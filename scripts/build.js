//Brukes til å kjøre bygg med fil kopiering
import { exec } from 'child_process';
import util from 'util';
import chalk from 'chalk';
import nextTask from './nextTask.js';
import fs from 'fs';
import process from 'process';

const execPromise = util.promisify(exec);
// get mode type. Production is default.
const command = process.argv[2];
//check if dist folder exists and delete it
if (fs.existsSync('./dist')) {
  await fs.rm('./dist', { recursive: true }, (err) => {
    if (err) {
      console.log(
        `\n${chalk.red('✘')} Removal of dist folder failed. You risk bringing old files in the package. Details: ${err}`
      );
    } else {
      console.log(`\n${chalk.green('✔')} dist folder removed successfully`);
    }
  });
}

await nextTask('Running the TypeScript compiler', () => {
  return execPromise('tsc');
});

await nextTask('Building the project', () => {
  return execPromise(`vite build ${command === 'dev' ? '--mode development' : ''}`);
});

await nextTask('Creating custom-elements.json in dist folder', () => {
  return execPromise('npm run manifest');
});
