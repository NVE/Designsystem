/**
 * Etter at token-tolkningen i Style Dictionary er ferdig, opprettes det en CSS-fil per gjenstand og per brand (lys og mørk).
 * Gjenstandsfilene sørger for riktig størrelser på komponentene. For å gjøre det enklere for sluttbrukeren
 * skal vi slå sammen alle gjenstandsfilene med brand-filene ved bruk av media queries.
 *
 * Designerne har bestemt hvilke verdier som skal brukes for hvilke media queries,
 * og disse er hardkodet i deviceCssFiles-arrayet.
 *
 * Hver brand-fil må også importere global.css-filen.
 * I tillegg må vi legge til .darkmode-selektoren etter :root i de mørke CSS-filene.
 *
 * Til slutt slettes gjenstandsfilene fra public/css, siden de ikke trengs som separate filer lenger.
 */
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const deviceCssFiles = [
  { device: path.resolve('./public/css/desktop.css') },
  { device: path.resolve('./public/css/desktop-large.css'), media: 'min-width: 1400px' },
  { device: path.resolve('./public/css/desktop-small.css'), media: 'max-width: 1200px' },
  { device: path.resolve('./public/css/mobile.css'), media: 'max-width: 600px' },
];

const brandFiles = [
  { light: path.resolve('./public/css/nve.css'), dark: path.resolve('./public/css/nve_dark.css') },
  { light: path.resolve('./public/css/varsom.css'), dark: path.resolve('./public/css/varsom_dark.css') },
  { light: path.resolve('./public/css/rme.css'), dark: path.resolve('./public/css/rme_dark.css') },
];

/**
 * Legger til innholdet fra en gjenstandsbasert CSS-fil i en brand-fil.
 * Funksjonen sørger også for at `global.css` importeres øverst i brand-filen.
 *
 * @param {string} deviceFile - Stien til gjenstandsfilen (for eksempel mobile.css, desktop.css).
 * @param {string} brandFile - Stien til brand-filen som skal oppdateres (for eksempel nve.css, varsom.css).
 * @param {string} [media] - Valgfri media query som brukes til å pakke inn gjenstand CSS-innholdet (for eksempel "min-width: 768px").
 */
const addDeviceCssToBrandFile = (deviceFile, brandFile, media) => {
  let brandFileContent = fs.readFileSync(brandFile, 'utf8');
  let deviceFileContent = fs.readFileSync(deviceFile, 'utf8');

  // Hvis det finnes en media query for gjenstandsfilen, pakk inn innholdet med denne før det legges til i brand-filen.
  if (media) {
    deviceFileContent = `@media (${media}) {\n${deviceFileContent}\n}\n`;
  }

  // Desktop-filen brukes direkte i brand-filen uten media queries, siden den representerer standardstørrelsen.
  if (deviceFile.includes('desktop.css')) {
    const match = deviceFileContent.match(/:root\s*{([\s\S]*?)}/);
    const contentInsideRoot = match ? match[1].trim() : '';

    // Legg til import av global.css og sett inn desktop-innholdet i :root-blokken.
    brandFileContent = brandFileContent.replace(
      /:root\s*{([^}]*)}/,
      `@import './global.css';\n:root { $1 ${contentInsideRoot} }`
    );
  } else {
    // Legg til gjenstandsfilens innhold (eventuelt med media query) på slutten av brand-filen.
    brandFileContent += deviceFileContent;
  }

  fs.writeFileSync(brandFile, brandFileContent, 'utf8');
};

// Legg til darkmode-selector og import i darkmode-filer
const addDarkMode = (darkFile) => {
  let darkFileContent = fs.readFileSync(darkFile, 'utf8');
  darkFileContent = darkFileContent.replace(/:root\s*{([^}]*)}/, `@import './global.css';\n:root.darkmode { $1 }`);
  fs.writeFileSync(darkFile, darkFileContent, 'utf8');
};

brandFiles.forEach(({ light }) => {
  deviceCssFiles.forEach(({ device, media }) => addDeviceCssToBrandFile(device, light, media));
});

brandFiles.forEach(({ dark }) => addDarkMode(dark));

deviceCssFiles.forEach(({ device }) => {
  fs.unlinkSync(device);
});

console.log(`${chalk.green('✔')} Device css files injected successfully`);
