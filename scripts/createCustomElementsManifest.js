/*Brukes til å kjøre dev mode. Siden vue app krever dist/custom-elements.json, må vi opprette denne filen før vi starter
dev modus */
import { exec } from 'child_process';
import util from 'util';
import chalk from 'chalk';
import nextTask from './nextTask.js';
import fs from 'fs';

// get mode type. Production is default.
//sjekk om custom-element.json' i dist mappa finnes
if (!fs.existsSync('./dist/custom-elements.json')) {
  const execPromise = util.promisify(exec);
  await nextTask('Creating custom-elements.json in dist folder', () => {
    return execPromise('npm run manifest');
  });
  console.log(`${chalk.green('✔')} dist/custom-element.json created successfully`);
} else {
  console.log(`${chalk.green('✔')} dist/custom-element.json found`);
  process.exit(0);
}
