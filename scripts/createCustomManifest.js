/**
 * Genererer dist/custom-elements.json ved å analysere alle *.component.ts-filer
 * ved hjelp av TypeScript-kompilator-API-et. Erstatter @custom-elements-manifest/analyzer.
 *
 * Kjør: node scripts/generateManifest.js
 */
import ts from 'typescript';
import fs from 'fs';
import path from 'path';
import { parse as parseJsDoc } from 'comment-parser';

const COMPONENTS_DIR = path.resolve('src/components');
const OUT_FILE = path.resolve('dist/custom-elements.json');

/**
 * Henter alle komponentfiler i `src/components.component.ts`.
 *
 * Forventer at mappenavnet er lik filnavnet, f.eks.
 * `src/components/nve-button/nve-button.component.ts`.
 *
 * @returns {string[]} Absolutte filstier til alle eksisterende `*.component.ts`-filer.
 */
function getComponentFiles() {
  return fs.readdirSync(COMPONENTS_DIR).flatMap((name) => {
    const dir = path.join(COMPONENTS_DIR, name);
    if (!fs.statSync(dir).isDirectory()) return [];
    const file = path.join(dir, `${name}.component.ts`);
    return fs.existsSync(file) ? [file] : [];
  });
}

/**
 * Henter nærmeste ledende JSDoc-blokk for en node.
 *
 * Bruker "trivia"-tekst mellom `getFullStart()` og `getStart()` for å fange
 * opp kommentarer som ligger rett over deklarasjonen.
 *
 * @param {import('typescript').Node} node AST-noden vi vil hente JSDoc for.
 * @param {import('typescript').SourceFile} sourceFile Kilde-filen noden kommer fra.
 * @returns {string | null} Rå JSDoc-blokk inkludert eller `null`.
 */
function getLeadingJsDoc(node, sourceFile) {
  const fullText = sourceFile.getFullText();
  const trivia = fullText.slice(node.getFullStart(), node.getStart(sourceFile));
  const match = trivia.match(/\/\*\*[\s\S]*?\*\//);
  return match ? match[0] : null;
}

/**
 * Parser en rå JSDoc-streng til beskrivelse + tags.
 *
 * @param {string | null | undefined} raw Rå JSDoc-blokk .
 * @returns {{ description: string, tags: Array<{ tag: string, name?: string, description?: string }> }}
 * Et normalisert objekt som alltid har `description` og `tags`.
 */
function parseJsDocComment(raw) {
  if (!raw) return { description: '', tags: [] };
  const parsed = parseJsDoc(raw);
  if (!parsed.length) return { description: '', tags: [] };
  return { description: parsed[0].description ?? '', tags: parsed[0].tags ?? [] };
}

/**
 * Gjør om en TypeScript type-node til en lesbar tekstrepresentasjon.
 *
 * @param {import('typescript').TypeNode | undefined} typeNode Type-noden.
 * @param {import('typescript').SourceFile} sourceFile Kilde-fil som brukes for `getText()`.
 * @returns {string} Type som tekst (f.eks. `'string'`, `'"small" | "medium"'`), eller `'any'`.
 */
function typeText(typeNode, sourceFile) {
  return typeNode ? typeNode.getText(sourceFile) : 'any';
}

/**
 * Henter en opsjon fra en Lit `@property({...})`-decorator.
 *
 * Returnerer selve initializer-teksten slik den står i koden (f.eks. `true`, `'aria-label'`).
 *
 * @param {import('typescript').Decorator} decorator Decorator-noden.
 * @param {import('typescript').SourceFile} sourceFile Kilde-fil som brukes for tekst.
 * @param {string} key Nøkkelen i objektet (f.eks. `reflect` eller `attribute`).
 * @returns {string | undefined} Rå tekstverdi, eller `undefined` dersom den ikke finnes.
 */
function getDecoratorOption(decorator, sourceFile, key) {
  const call = decorator.expression;
  if (!ts.isCallExpression(call)) return undefined;
  const arg = call.arguments[0];
  if (!arg || !ts.isObjectLiteralExpression(arg)) return undefined;
  const prop = arg.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sourceFile) === key);
  if (!prop || !ts.isPropertyAssignment(prop)) return undefined;
  return prop.initializer.getText(sourceFile);
}

/**
 * Finner Lit sin `@property(...)`-decorator på et class-medlem.
 *
 * @param {import('typescript').ClassElement} member Klasse-medlem (field/method/etc).
 * @returns {import('typescript').Decorator | undefined} Decorator-noden, eller `undefined`.
 */
function findPropertyDecorator(member) {
  return member.modifiers?.find(
    (m) =>
      ts.isDecorator(m) &&
      ts.isCallExpression(m.expression) &&
      ts.isIdentifier(m.expression.expression) &&
      m.expression.expression.text === 'property'
  );
}

/**
 * Ekstraherer dokumenterbare medlemmer fra en komponentklasse.
 *
 * - Felter: `@property(...)`-dekorerte properties blir både `members` (fields) og `attributes`.
 * - Metoder: offentlige metoder, filtrert for livssyklus-/render-metoder.
 *
 * @param {import('typescript').ClassDeclaration} classNode Klasse-noden.
 * @param {import('typescript').SourceFile} sourceFile Kilde-fil som brukes for tekst og JSDoc.
 * @returns {{ members: Array<Record<string, any>>, attributes: Array<Record<string, any>> }}
 * Normaliserte lister som brukes i manifestet.
 */
function extractClassMembers(classNode, sourceFile) {
  const members = [];
  const attributes = [];

  for (const member of classNode.members) {
    const isPrivate =
      member.modifiers?.some(
        (m) => m.kind === ts.SyntaxKind.PrivateKeyword || m.kind === ts.SyntaxKind.ProtectedKeyword
      ) ?? false;

    const propertyDecorator = findPropertyDecorator(member);

    if (ts.isPropertyDeclaration(member) && propertyDecorator) {
      const name = member.name.getText(sourceFile);
      const type = member.type ? { text: typeText(member.type, sourceFile) } : undefined;
      const defaultVal = member.initializer?.getText(sourceFile);
      const reflect = getDecoratorOption(propertyDecorator, sourceFile, 'reflect') === 'true';
      const { description } = parseJsDocComment(getLeadingJsDoc(member, sourceFile));

      const fieldEntry = { kind: 'field', name };
      if (type) fieldEntry.type = type;
      if (defaultVal !== undefined) fieldEntry.default = defaultVal;
      if (description) fieldEntry.description = description;
      members.push(fieldEntry);

      const rawAttrName = getDecoratorOption(propertyDecorator, sourceFile, 'attribute');
      const attrName = rawAttrName ? rawAttrName.replace(/^['"]|['"]$/g, '') : name;
      const attrEntry = { name: attrName };
      if (type) attrEntry.type = type;
      if (description) attrEntry.description = description;
      if (reflect) attrEntry.reflects = true;
      attributes.push(attrEntry);
      continue;
    }

    const SKIP_METHODS = [
      'render',
      'connectedCallback',
      'disconnectedCallback',
      'attributeChangedCallback',
      'adoptedCallback',
      'updated',
      'firstUpdated',
    ];
    if (ts.isMethodDeclaration(member) && !isPrivate && !SKIP_METHODS.includes(member.name.getText(sourceFile))) {
      const name = member.name.getText(sourceFile);
      const { description } = parseJsDocComment(getLeadingJsDoc(member, sourceFile));
      const parameters = member.parameters.map((param) => {
        const paramName = param.name.getText(sourceFile);
        const paramType = param.type ? { text: typeText(param.type, sourceFile) } : undefined;
        const paramEntry = { name: paramName };
        if (paramType) paramEntry.type = paramType;
        return paramEntry;
      });

      const entry = { kind: 'method', name };
      if (description) entry.description = description;
      if (parameters.length) entry.parameters = parameters;
      members.push(entry);
    }
  }

  return { members, attributes };
}

/**
 * Parser én komponentfil og returnerer et manifest-modul-objekt for den.
 *
 * Finner første klasse som har `@customElement('...')`, henter klassebeskrivelse
 * og tags fra JSDoc (slot/event/csspart), samt members/attributes fra `@property`.
 *
 * @param {string} filePath Absolutt filsti til en `*.component.ts`.
 * @returns {{ modulePath: string, declaration: Record<string, any> } | null}
 * Et normalisert resultat, eller `null` dersom filen ikke inneholder en komponent.
 */
function parseComponentFile(filePath) {
  const sourceText = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true);
  let result = null;

  ts.forEachChild(sourceFile, (node) => {
    if (!ts.isClassDeclaration(node)) return;

    const customElementDecorator = node.modifiers?.find(
      (m) =>
        ts.isDecorator(m) &&
        ts.isCallExpression(m.expression) &&
        ts.isIdentifier(m.expression.expression) &&
        m.expression.expression.text === 'customElement'
    );
    if (!customElementDecorator) return;

    const tagName = customElementDecorator.expression.arguments[0]?.getText(sourceFile)?.replace(/['"]/g, '');
    const className = node.name?.getText(sourceFile) ?? '';
    const rawJsDoc = getLeadingJsDoc(node, sourceFile);
    const { description, tags } = parseJsDocComment(rawJsDoc);

    const slots = tags
      .filter((t) => t.tag === 'slot')
      .map((t) => ({ description: t.description ?? '', name: t.name ?? '' }));
    const events = tags
      .filter((t) => t.tag === 'event')
      .map((t) => ({ name: t.name ?? '', description: t.description ?? '' }));
    const cssParts = tags
      .filter((t) => t.tag === 'csspart')
      .map((t) => ({ name: t.name ?? '', description: t.description ?? '' }));

    const { members, attributes } = extractClassMembers(node, sourceFile);

    const heritage = node.heritageClauses?.find((h) => h.token === ts.SyntaxKind.ExtendsKeyword);
    const superclassName = heritage?.types[0]?.expression?.getText(sourceFile) ?? '';

    const componentPath = `components/${tagName}/${tagName}.js`;
    const relativeSrcPath = path.relative(path.resolve('.'), filePath).replace(/\\/g, '/');

    result = {
      modulePath: componentPath,
      declaration: {
        kind: 'class',
        description,
        name: className,
        ...(slots.length ? { slots } : {}),
        ...(events.length ? { events } : {}),
        ...(cssParts.length ? { cssParts } : {}),
        members,
        attributes,
        superclass: superclassName
          ? { name: superclassName, ...(superclassName === 'LitElement' ? { package: 'lit' } : {}) }
          : undefined,
        tagNameWithoutPrefix: tagName?.replace(/^nve-/, '') ?? '',
        tagName,
        customElement: true,
        jsDoc: rawJsDoc ?? '',
        modulePath: relativeSrcPath,
      },
    };
  });

  return result;
}

const files = getComponentFiles();
const modules = [];

for (const file of files) {
  const parsed = parseComponentFile(file);
  if (!parsed) continue;
  modules.push({
    kind: 'javascript-module',
    path: parsed.modulePath,
    declarations: [parsed.declaration],
    exports: [
      { kind: 'js', name: 'default', declaration: { name: parsed.declaration.name, module: parsed.modulePath } },
    ],
  });
}

const manifest = { schemaVersion: '1.0.0', readme: '', modules };
fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(manifest, null, 2), 'utf8');
console.log(`✔ custom-elements.json → ${OUT_FILE} (${modules.length} components)`);
