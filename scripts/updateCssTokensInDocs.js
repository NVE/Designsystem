import fs from 'fs';
import path from 'path';

/** Oppdaterer css tokens in doc-site prosjekt. Burde kjøres etter ny tokenbuild */
const updateCssTokensInDocs = (docsFileName, theme) => {
  // Les doc-site css filen
  const docCssFile = path.join(`doc-site/.vitepress/theme/styles/${docsFileName}.css`);
  let docCssFileContent = fs.readFileSync(docCssFile, 'utf8');

  // Les css filene med tokene i /public
  const publicCssLightContent = fs.readFileSync(`public/css/${theme}.css`, 'utf8');
  const publicCssDarkContent = fs.readFileSync(`public/css/${theme}_dark.css`, 'utf8');

  // Ta ut styles fra :root i css filene med tokene
  const lightRootStylesMatch = publicCssLightContent.match(/:root\s*{([^}]*)}/);
  const darkRootStylesMatch = publicCssDarkContent.match(/:root\.darkmode\s*{([^}]*)}/);
  const newLightStyles = lightRootStylesMatch ? lightRootStylesMatch[1].trim() : '';
  const newDarkStyles = darkRootStylesMatch ? darkRootStylesMatch[1].trim() : '';

  let regexDark = new RegExp(`:root\\.${theme}_darkmode\\s*{[^}]*}`, 'g');
  let regexLight = new RegExp(`:root\\.${theme}\\s*{[^}]*}`, 'g');
  // Erstatt style innhold i doc-site css filen
  docCssFileContent = docCssFileContent.replace(regexDark, `:root.${theme}_darkmode { ${newDarkStyles} }`);
  docCssFileContent = docCssFileContent.replace(regexLight, `:root.${theme} { ${newLightStyles} }`);

  // Skriv ny innhold til doc-site filene
  fs.writeFileSync(docCssFile, docCssFileContent);
};

updateCssTokensInDocs('nve_theme', 'nve');
updateCssTokensInDocs('varsom_theme', 'varsom');
