import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const StyleDictionary = require('style-dictionary-utils');

const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;
import fontFamilies from './customtransforms/fontFamilies.js';
import fontWeight from './customtransforms/fontWeights.js';
import boxShadow from './customtransforms/boxShadow.js';
import fontSizes from './customtransforms/fontSizes.js';
import fixZeroes from './customtransforms/fixZeroes.js';

StyleDictionary.registerTransform(fontFamilies);
StyleDictionary.registerTransform(fontWeight);
StyleDictionary.registerTransform(boxShadow);
StyleDictionary.registerTransform(fontSizes);
StyleDictionary.registerTransform(fixZeroes);

const lightModeFile = 'tokens/Theme/nve_light.json';
const darkModeFile = 'tokens/Theme/nve_dark.json';
const lightModeVarsomFile = 'tokens/Theme/varsom_light.json';
const darkModeVarsomFile = 'tokens/Theme/varsom_dark.json';
const isDark = process.argv?.[2] === 'dark';
const isVarsom = process.argv?.[2] === 'varsom';
const isVarsomDark = process.argv?.[2] === 'varsom_dark';

const tokenfilter = (token) => {
  if (isDark) {
    return token.filePath.replaceAll('\\', '/') === darkModeFile.replaceAll('\\', '/');
  } else if (isVarsomDark) {
    return token.filePath.replaceAll('\\', '/') === darkModeVarsomFile.replaceAll('\\', '/');
  }
  return true;
};

let sources = [lightModeFile, 'tokens/public/device/base.json', 'tokens/*.json'];
let destination = 'nve.css';

if (isDark) {
  sources[0] = darkModeFile;
  destination = 'nve_dark.css';
} else if (isVarsom) {
  sources[0] = lightModeVarsomFile;
  destination = 'varsom.css';
} else if (isVarsomDark) {
  sources[0] = darkModeVarsomFile;
  destination = 'varsom_dark.css';
}

StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences, theme } = options;
    const isDarkmode = theme === 'darkmode';
    return (
      fileHeader({ file }) +
      `@import './global.css'; \n` +
      `${isDarkmode ? '@media not print {\n  ' : ''}` +
      `:root${theme ? '.' + theme : ''} {\n` +
      formattedVariables({
        format: 'css',
        dictionary,
        outputReferences,
        formatting: { indentation: `${isDarkmode ? '    ' : '  '}` },
      }) +
      `${isDarkmode ? '  \n}\n' : ''}` +
      '\n}\n'
    );
  },
});

const myStyleDictionary = StyleDictionary.extend({
  source: sources,
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'public/css/',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'fixZeroes',
        'font/css',
        'fontsizes/px',
        'fontFamilies/css',
        'fontFamily/css',
        'fontWeight/number',
        'fontWeights/number',
        'boxshadow/css',
        'shadow/css',
      ],
      files: [
        {
          filter: tokenfilter,
          destination: destination,
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
          selector: '.test',
        },
      ],
    },
    darkcss: {
      transformGroup: 'css',
      buildPath: 'public/css/',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'fixZeroes',
        'font/css',
        'fontsizes/px',
        'fontFamilies/css',
        'fontFamily/css',
        'fontWeight/number',
        'fontWeights/number',
        'boxshadow/css',

        'shadow/css',
      ],
      files: [
        {
          filter: tokenfilter,
          destination: destination,
          format: 'css/variables',
          options: {
            outputReferences: true,
            theme: 'darkmode',
          },
        },
      ],
    },
  },
});
if (isDark || isVarsomDark) {
  myStyleDictionary.buildPlatform('darkcss');
} else {
  myStyleDictionary.buildPlatform('css');
}
