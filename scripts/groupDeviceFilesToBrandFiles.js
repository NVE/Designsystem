/** Dette scriptet legger til alle gjenstand styling filer opprettet gjennom token build inn i en hoved brand (nve, varsom) css fil.
 * Den sletter gjestandsfiler til slutt.
 */
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

// Orden i deviceCssFiles er veldig viktig! @media for større enheter må komme før media for mindre enheter. dekstop.css er en unntak
// fordi den tas inn i :root blokken, ikke i selve @media. Grunnen til det er at desktop inneholder base variabler for fonter og fargene.
const deviceCssFiles = [
  path.resolve('./public/css/desktop.css'),
  path.resolve('./public/css/desktop-large.css'),
  path.resolve('./public/css/desktop-small.css'),
  path.resolve('./public/css/mobile.css'),
];

const varsomFile = path.resolve('./public/css/varsom.css');
const nveFile = path.resolve('./public/css/nve.css');
const rmeFile = path.resolve('./public/css/rme.css');

let varsomFileContent = fs.readFileSync(varsomFile, 'utf8');
let nveFileContent = fs.readFileSync(nveFile, 'utf8');
let rmeFileContent = fs.readFileSync(rmeFile, 'utf8');

// Legger til innholdet fra en gjwnstand CSS-fil til hoved CSS-filen og sletter gjestandsfilen.
const addDeviceToMainAndDelete = (deviceCssFile) => {
  const deviceCssFileContent = fs.readFileSync(deviceCssFile, 'utf8');

  // Spesiell håndtering for desktop.css fordi den inneholder base variabler for fonter og farger og skal legges inn i vanlig :root blokken
  if (deviceCssFile.includes('desktop.css')) {
    varsomFileContent = varsomFileContent.replace(/:root\s*{([^}]*)}/, `:root { $1 ${deviceCssFileContent} }`);
    nveFileContent = nveFileContent.replace(/:root\s*{([^}]*)}/, `:root { $1 ${deviceCssFileContent} }`);
    rmeFileContent = rmeFileContent.replace(/:root\s*{([^}]*)}/, `:root { $1 ${deviceCssFileContent} }`);
  } else {
    varsomFileContent += deviceCssFileContent;
    nveFileContent += deviceCssFileContent;
    rmeFileContent += deviceCssFileContent;
  }

  // Slett gjestandsfilen
  fs.unlinkSync(deviceCssFile);
};

// Gå gjennom hver enhetsfil og legg til innholdet i hovedfilene
deviceCssFiles.forEach(addDeviceToMainAndDelete);

// Skriv den oppdaterte innholdet til hovedfilene
fs.writeFileSync(nveFile, nveFileContent, 'utf8');
fs.writeFileSync(varsomFile, varsomFileContent, 'utf8');
fs.writeFileSync(rmeFile, rmeFileContent, 'utf8');

console.log(`${chalk.green('✔')} Device css files injected successfully`);
