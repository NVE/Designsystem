// klarte ikke å eksportere dist mappa som rot mappa via 'export' og 'files' properties i package.json derfor
// dette scriptet kopierer package.json (uten devdeps og scripts) til dist mappe (etter den er bygget) og kjører npm publish derfra
import { exec } from 'child_process';
import util from 'util';
import fs from 'fs';
import nextTask from './nextTask.js';

const execPromise = util.promisify(exec);

const source = fs.readFileSync('./package.json').toString('utf-8');
const sourceObj = JSON.parse(source);
sourceObj.scripts = {};
sourceObj.devDependencies = {};
fs.writeFileSync('./dist/package.json', Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8'));
fs.copyFileSync('./.npmignore', './dist/.npmignore');

await nextTask('Publishing the package', () => execPromise('cd dist && npm pack'));
