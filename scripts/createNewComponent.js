import fs from 'fs';
import chalk from 'chalk';
import nextTask from './nextTask.js';

const componentName = process.argv[2];

if (!componentName) {
  console.error(`${chalk.red('✘')} Please provide a component name.`);
  process.exit(1);
}

if (!componentName.startsWith('nve-')) {
  console.error(`${chalk.red('✘')} Component name must start with nve-`);
  process.exit(1);
}

const folderName = componentName.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

const createFolder = () => {
  const folderPath = `src/components/${folderName}`;
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  } else {
    console.error(`${chalk.red('✘')} Folder already exists.`);
    process.exit(1);
  }
  fs.mkdirSync(`src/components/${folderName}`, { recursive: true });
};

const createComponentFile = () => {
  const className = componentName
    .split('-')
    .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
    .join('');
  const content = `
    import { LitElement } from 'lit';
    import { customElement } from 'lit/decorators.js';
    import { INveComponent } from '@interfaces/NveComponent.interface';
    import styles from './${componentName}.styles';

    @customElement('${componentName}')
    export default class ${className} extends LitElement implements INveComponent {

      static styles = [styles];

      constructor() {
        super();
      }

      //VIKTIG! Husk at du må importere komponent i index.ts 
      // For å vise en demonstrasjon av en komponent når vi starter appen lokalt import den i main.ts 

    }
    
    declare global {
      interface HTMLElementTagNameMap {
        '${componentName}': ${className};
      }
    }`;

  fs.writeFileSync(`src/components/${folderName}/${componentName}.component.ts`, content);
};

const createDemoFile = () => {
  const demoContent = `
  import { html } from 'lit';

  export default html\`\``;

  fs.writeFileSync(`src/components/${folderName}/${componentName}.demo.ts`, demoContent);
};

const createStylesFile = () => {
  const stylesContent = `
  import { css } from 'lit';

  export default css\`\``;

  fs.writeFileSync(`src/components/${folderName}/${componentName}.styles.ts`, stylesContent);
};

const createFiles = () => {
  createComponentFile();
  createDemoFile();
  createStylesFile();
};

await nextTask(`Creating folder ${componentName}`, () => createFolder());
await nextTask(`Creating files`, () => createFiles());
