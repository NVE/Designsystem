/** Dette scriptet legger til alle gjenstand styling filer opprettet gjennom token build inn i en hoved css fil */
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const deviceCssFiles = [
  path.resolve('./public/css/desktop-small.css'),
  path.resolve('./public/css/desktop.css'),
  path.resolve('./public/css/mobile.css'),
  path.resolve('./public/css/desktop-large.css'),
];

const varsomFile = path.resolve('./public/css/varsom.css');
let varsomFileContent = fs.readFileSync(varsomFile, 'utf8');
const nveFile = path.resolve('./public/css/nve.css');
let nveFileContent = fs.readFileSync(nveFile, 'utf8');

const addDeviceToMainAndDelete = (deviceCssFile) => {
  const deviceCssFileContent = fs.readFileSync(deviceCssFile, 'utf8');
  varsomFileContent += deviceCssFileContent;
  nveFileContent += deviceCssFileContent;
  fs.unlinkSync(deviceCssFile);
};
deviceCssFiles.forEach(addDeviceToMainAndDelete);
fs.writeFileSync(nveFile, nveFileContent, 'utf8');
fs.writeFileSync(varsomFile, varsomFileContent, 'utf8');
console.log(`${chalk.green('✔')} Device css files injected successfully`);
