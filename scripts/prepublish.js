// klarte ikke å eksportere dist mappa som rot mappa via 'export' og 'files' properties i package.json derfor
// dette scriptet kopierer package.json (uten devdeps og scripts) til dist mappe (etter den er bygget) og kjører npm publish derfra
import { exec } from 'child_process';
import util from 'util';
import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import nextTask from './nextTask.js';

const execPromise = util.promisify(exec);
const command = process.argv[2];

//check if .tgz files exist and delete
if (command !== 'pack' && command !== 'publish') {
  console.log(`${chalk.red('✘')} Wrong npm command. Use 'pack' or 'publish'`);
  process.exit(1);
}

fs.readdir('./dist', (err, files) => {
  if (err) {
    console.log(`${chalk.red('✘')} ${err}`);
    return;
  }

  // Filter the files to include only those with the .tgz extension
  const tgzFiles = files.filter((file) => path.extname(file).toLowerCase() === '.tgz');

  if (tgzFiles.length > 0) {
    console.log(`${chalk.green('✔')} Files with .tgz extension found and deleted`);
    tgxFiles.forEach((file) => console.log(file));
  }
});

const source = fs.readFileSync('./package.json').toString('utf-8');
const sourceObj = JSON.parse(source);
sourceObj.scripts = {};
sourceObj.devDependencies = {};
fs.writeFileSync('./dist/package.json', Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8'));
fs.copyFileSync('./.npmignore', './dist/.npmignore');

await nextTask('Publishing the package', () => execPromise(`cd dist && npm ${command}`));
