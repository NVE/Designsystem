import fs from 'fs';
import chalk from 'chalk';
import nextTask from './nextTask.js';
import process, { exit } from 'process';

const componentName = process.argv[2];

if (!componentName) {
  console.error(`${chalk.red('✘')} Vennligst skriv navn på komponenten som argument.`);
  process.exit(1);
}

if (!componentName.startsWith('nve-')) {
  console.error(`${chalk.red('✘')} Komponent-navnet må starte med nve-`);
  process.exit(1);
}

const folderName = componentName.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

const createFolder = () => {
  const folderPath = `src/components/${folderName}`;
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

const className = componentName
  .split('-')
  .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
  .join('');

const createComponentFile = () => {
  const content = `
  import { LitElement } from 'lit';
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './${componentName}.styles';

  @customElement('${componentName}')
  export default class ${className} extends LitElement implements INveComponent {

  @property({reflect: true, type: String}) testId: string | undefined = undefined;

  static styles = [styles];

  constructor() {
    super();
  }

}

declare global {
  interface HTMLElementTagNameMap {
    '${componentName}': ${className};
  }
}`;

  fs.writeFileSync(`src/components/${folderName}/${componentName}.component.ts`, content);
};

const createDemoFile = () => {
  const demoContent = `---
layout: component
---

TODO: Start med et enklest mulig kodeeksempel i html for å kunne vise komponenten.
<CodeExamplePreview>

\`\`\`html
<${componentName}></${componentName}>
\`\`\`

</CodeExamplePreview>

TODO: Skriv evt. generelle tips som ikke passer å ha i @JsDoc. Pass på at det ikke blir dobbelt opp med det du har skrevet i @JsDoc.

## Eksempler

Legg eksempler på funksjonalitet her. Hvert tema skal ha egen overskrift på nivå 3.

### TODO: Eksempel 1
### TODO: Eksempel 2
osv..:)`;

  fs.writeFileSync(`doc-site/components/${componentName}.md`, demoContent);
};

const createStylesFile = () => {
  const stylesContent = `import { css } from 'lit';

export default css\`\``;

  fs.writeFileSync(`src/components/${folderName}/${componentName}.styles.ts`, stylesContent);
};

const addComponentToExports = () => {
  const existingComponentFile = fs.readFileSync('src/nve-designsystem.ts', { encoding: 'utf8', flag: 'r' });
  const lines = existingComponentFile.split(/\r?\n/);
  const exports = lines.filter((l) => l.startsWith('export'));
  const comments = lines.filter((l) => !l.startsWith('export') && !!l);
  console.dir(comments.length);
  console.dir(exports.length);
  exports.push(`export { default as ${className} } from './components/${componentName}/${componentName}.component';`);
  exports.sort();
  const newFile = `${comments.join('\r\n')}
${exports.join('\r\n')}
  `;
  fs.writeFileSync('src/nve-designsystem.ts', newFile);
};

const createFiles = () => {
  createComponentFile();
  createDemoFile();
  createStylesFile();
};

await nextTask(`Creating folder ${componentName}`, () => createFolder());
await nextTask(`Creating files`, () => createFiles());
await nextTask(`Adding component to exports`, () => addComponentToExports());
