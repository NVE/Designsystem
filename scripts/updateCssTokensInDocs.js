import fs from 'fs';
import path from 'path';

/** Oppdaterer css tokens in doc-site prosjekt. Burde kjøres etter ny tokenbuild */
const updateCssTokensInDocs = (docsFileName, theme) => {
  // Les doc-site css filen
  const docCssFile = path.join(`doc-site/.vitepress/theme/styles/${docsFileName}.css`);
  // Siker at innhold skrives på nytt
  let docCssFileContent = '';

  // Les css filene med tokene i /public
  const publicCssLightContent = fs.readFileSync(`public/css/${theme}.css`, 'utf8');
  const publicCssDarkContent = fs.readFileSync(`public/css/${theme}_dark.css`, 'utf8');

  // Ta ut styles fra :root i css filene
  const lightRootStylesMatch = publicCssLightContent.match(/:root\s*{([^}]*)}/);
  const darkRootStylesMatch = publicCssDarkContent.match(/:root\.darkmode\s*{([^}]*)}/);
  const newLightStyles = lightRootStylesMatch ? lightRootStylesMatch[1].trim() : '';
  const newDarkStyles = darkRootStylesMatch ? darkRootStylesMatch[1].trim() : '';

  docCssFileContent += `:root.${theme} { ${newLightStyles} }\n`;
  docCssFileContent += `:root.${theme}_darkmode { ${newDarkStyles} }\n`;

  const mediaQueryRegex = /@media[^{]*{[^{}]*({[^{}]*}[^{}]*)*}/g;
  // Ta ut media queries fra css filene og lagre innhold av hver @media i et array
  const lightMediaQueries = [...publicCssLightContent.matchAll(mediaQueryRegex)];
  // Legge til media queries til både :root og :root.darkmode
  lightMediaQueries.forEach((mediaQuery) => {
    const mediaQueryContent = mediaQuery[0];
    const newMediaQueryContent = mediaQueryContent.replace(/:root\s*{/, `:root.${theme}, :root.${theme}_darkmode {`);
    docCssFileContent += `\n${newMediaQueryContent}`;
  });

  // Skriv ny innhold til doc-site filene
  fs.writeFileSync(docCssFile, docCssFileContent);
};

updateCssTokensInDocs('nve_theme', 'nve');
updateCssTokensInDocs('varsom_theme', 'varsom');
