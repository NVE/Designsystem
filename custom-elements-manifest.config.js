import * as path from 'path';
import { customElementVsCodePlugin } from 'custom-element-vs-code-integration';
import { customElementVuejsPlugin } from 'custom-element-vuejs-integration';
import { cemInheritancePlugin } from '@wc-toolkit/cem-inheritance';
import { parse } from 'comment-parser';
import { pascalCase } from 'pascal-case';
import commandLineArgs from 'command-line-args';
import fs from 'fs';
import externalCEM from '@shoelace-style/shoelace/dist/custom-elements.json' with { type: 'json' };

const packageData = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const { name, description, version, author, homepage, license } = packageData;

const { outdir } = commandLineArgs([
  { name: 'litelement', type: String },
  { name: 'analyze', defaultOption: true },
  { name: 'outdir', type: String, defaultValue: 'dist' },
]);

function noDash(string) {
  return string.replace(/^\s?-/, '').trim();
}

function replace(string, terms) {
  terms.forEach(({ from, to }) => {
    string = string?.replace(from, to);
  });

  return string;
}

const cemInheritancePluginOptions = {
  externalManifests: [externalCEM],
};

export default {
  globs: ['src/components/**/*.component.ts'],
  exclude: ['**/*.styles.ts', '**/*.demo.ts'],
  plugins: [
    cemInheritancePlugin(cemInheritancePluginOptions),
    {
      // Legg properties som er dekorert med @property til attributes-delen i manifest-fila
      name: 'add-attributes-with-jsdoc',
      analyzePhase({ ts, node, moduleDoc }) {
        if (node.kind === ts.SyntaxKind.ClassDeclaration) {
          const className = node.name.getText();
          const classDoc = moduleDoc.declarations.find((declaration) => declaration.name === className);

          node.members.forEach((member) => {
            if (member.kind === ts.SyntaxKind.PropertyDeclaration) {
              const decorators = ts.getDecorators(member);

              // Sjekk om felt har @property-taggen
              const hasPropertyDecorator = decorators?.some((decorator) => {
                const expression = decorator.expression;
                return ts.isCallExpression(expression) && expression.expression.getText() === 'property';
              });

              if (hasPropertyDecorator) {
                const name = member.name.getText();
                const type = member.type?.getText() || 'any';

                // Les JsDoc-kommentaren og legg i description-feltet
                const jsDocComment = ts.getJSDocCommentsAndTags(member);
                let description = '';
                if (jsDocComment.length > 0) {
                  const parsedComment = parse(jsDocComment[0].getFullText());
                  description = parsedComment[0]?.description || '';
                }

                classDoc.attributes = classDoc.attributes || [];
                classDoc.attributes.push({
                  name,
                  type: { text: type },
                  description: description,
                });
              }
            }
          });
        }
      },
    },
    // Append package data
    {
      name: 'shoelace-package-data',
      packageLinkPhase({ customElementsManifest }) {
        customElementsManifest.package = { name, description, version, author, homepage, license };
      },
    },
    // Infer tag names because we no longer use @customElement decorators.
    {
      name: 'shoelace-infer-tag-names',
      analyzePhase({ ts, node, moduleDoc }) {
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
            const className = node.name.getText();
            const classDoc = moduleDoc?.declarations?.find((declaration) => declaration.name === className);
            const importPath = moduleDoc.path;
            // This is kind of a best guess at components. "thing.component.ts"
            if (!importPath.endsWith('.component.ts')) {
              return;
            }
            const tagName = path.basename(importPath, '.component.ts');
            const tagNameWithoutPrefix = tagName.replaceAll('nve-', '');
            classDoc.tagNameWithoutPrefix = tagNameWithoutPrefix;
            classDoc.tagName = tagName;
            // This used to be set to true by @customElement
            classDoc.customElement = true;
          }
        }
      },
    },
    // Parse custom jsDoc tags
    {
      name: 'shoelace-custom-tags',
      analyzePhase({ ts, node, moduleDoc }) {
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
            const className = node.name.getText();
            const classDoc = moduleDoc?.declarations?.find((declaration) => declaration.name === className);
            const customTags = ['animation', 'dependency', 'documentation', 'since', 'status', 'title'];
            let customComments = '/**';
            node.jsDoc?.forEach((jsDoc) => {
              jsDoc?.tags?.forEach((tag) => {
                const tagName = tag.tagName.getText();
                if (customTags.includes(tagName)) {
                  customComments += `\n * @${tagName} ${tag.comment}`;
                }
              });
            });
            // This is what allows us to map JSDOC comments to ReactWrappers.
            classDoc['jsDoc'] = node.jsDoc?.map((jsDoc) => jsDoc.getFullText()).join('\n');
            const parsed = parse(`${customComments}\n */`);
            parsed[0].tags?.forEach((t) => {
              switch (t.tag) {
                // Animations
                case 'animation':
                  if (!Array.isArray(classDoc['animations'])) {
                    classDoc['animations'] = [];
                  }
                  classDoc['animations'].push({
                    name: t.name,
                    description: noDash(t.description),
                  });
                  break;
                // Dependencies
                case 'dependency':
                  if (!Array.isArray(classDoc['dependencies'])) {
                    classDoc['dependencies'] = [];
                  }
                  classDoc['dependencies'].push(t.name);
                  break;
                // Value-only metadata tags
                case 'documentation':
                case 'since':
                case 'status':
                case 'title':
                  classDoc[t.tag] = t.name;
                  break;
                // All other tags
                default:
                  if (!Array.isArray(classDoc[t.tag])) {
                    classDoc[t.tag] = [];
                  }
                  classDoc[t.tag].push({
                    name: t.name,
                    description: t.description,
                    type: t.type || undefined,
                  });
              }
            });
          }
        }
      },
    },
    {
      name: 'shoelace-react-event-names',
      analyzePhase({ ts, node, moduleDoc }) {
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
            const className = node.name.getText();
            const classDoc = moduleDoc?.declarations?.find((declaration) => declaration.name === className);
            if (classDoc?.events) {
              classDoc.events.forEach((event) => {
                event.reactName = `on${pascalCase(event.name)}`;
                event.eventName = `${pascalCase(event.name)}Event`;
              });
            }
          }
        }
      },
    },
    {
      name: 'shoelace-translate-module-paths',
      packageLinkPhase({ customElementsManifest }) {
        customElementsManifest?.modules?.forEach((mod) => {
          //
          // CEM paths look like this:
          //
          //  src/components/button/button.ts
          //
          // But we want them to look like this:
          //
          //  components/button/button.js
          //
          const terms = [
            { from: /^src\//, to: '' }, // Strip the src/ prefix
            { from: /\.component.(t|j)sx?$/, to: '.js' }, // Convert .ts to .js
          ];
          mod.path = replace(mod.path, terms);
          for (const ex of mod.exports ?? []) {
            ex.declaration.module = replace(ex.declaration.module, terms);
          }
          for (const dec of mod.declarations ?? []) {
            if (dec.kind === 'class') {
              for (const member of dec.members ?? []) {
                if (member.inheritedFrom) {
                  member.inheritedFrom.module = replace(member.inheritedFrom.module, terms);
                }
              }
            }
          }
        });
      },
    },
    // Generer metadata til VS Code for dokumentasjon og autofullføring av attributt-verdier
    customElementVsCodePlugin({
      outdir: outdir || 'dist',
      referencesTemplate: (_, tag) => [
        {
          name: 'Mer info',
          url: `https://designsystem.nve.no/components/${tag}`,
        },
      ],
      labels: {
        slots: 'Spor',
        methods: 'Metoder',
        events: 'Hendelser',
        cssProperties: 'CSS-variabler',
        cssParts: 'Deler',
      },
    }),
  ],
};
