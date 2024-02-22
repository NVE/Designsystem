//Brukes til å kjøre bygg med fil kopiering
import { exec } from 'child_process';
import util from 'util';
import chalk from 'chalk';
import nextTask from './nextTask.js';
import fs from 'fs';

const execPromise = util.promisify(exec);

//check if dist folder exists and delete it
if (fs.existsSync('./dist')) {
  fs.rm('./dist', { recursive: true }, (err) => {
    if (err) {
      console.log(`${chalk.red('✘')} ${label}`);
    }
    console.log(`${chalk.green('✔')} Folder dist removed successfully`);
  });
}

await nextTask('Running the TypeScript compiler', () => {
  return execPromise('tsc');
});
await nextTask('Building the project', () => {
  return execPromise('vite build');
});
