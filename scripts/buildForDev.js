/*Brukes til å kjøre dev mode. 
Vi trenger to filer fra dist mappen for å kjøre dev mode. Vi kunne importere disse filene inn i src direkte, men
vi bestemte å ikke gjøre det foreløpig. Grunnen er at vi må huske å importere disse filene i src hver gang enten shoelace 
eller manifest filen oppdateres. Appen krever både dist/custom-elements.json og dist/nve-designsystem.css (inneholder shoelace sine
css-variabler som vi importerer i global.css)
*/
import { exec } from 'child_process';
import util from 'util';
import chalk from 'chalk';
import nextTask from './nextTask.js';
import fs from 'fs';
import process from 'process';

// sjekker om dist mappa finnes
if (!fs.existsSync('./dist')) {
  const execPromise = util.promisify(exec);
  await nextTask('Building app', () => {
    return execPromise('npm run build');
  });
  console.log(`${chalk.green('✔')} Application built successfully`);
} else {
  console.log(`${chalk.green('✔')} Build folder exists`);
  process.exit(0);
}
