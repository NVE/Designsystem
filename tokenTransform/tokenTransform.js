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

StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences, theme } = options;
    return (
      fileHeader({ file }) +
      `@import './global.css'; \n` +
      `:root${theme ? '.' + theme : ''} {\n` +
      formattedVariables({ format: 'css', dictionary, outputReferences }) +
      '\n}\n'
    );
  },
});

StyleDictionary.registerFormat({
  name: 'css/device',
  formatter: function ({ dictionary, options }) {
    const { outputReferences } = options;
    return (
      `@media (max-width:${options.maxWidth ? options.maxWidth : ''}) { \n` +
      `:root {\n` +
      formattedVariables({ format: 'css', dictionary, outputReferences }) +
      '\n}' +
      '\n}\n'
    );
  },
});

const transforms = [
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
];

// vi trenger kun disse properties i gjenstand styling filene
const filterDevicesTokens = (token) => {
  return token.type === 'typography' || token.type === 'spacing' || token.type === 'sizing';
};

const transformDeviceTokens = (device, maxWidth) => {
  const deviceTokens = StyleDictionary.extend({
    source: [`tokens/public/device/${device}.json`, 'tokens/*json', 'tokens/Brand/nve.json'],
    platforms: {
      [device]: {
        transformGroup: 'css',
        buildPath: 'public/css/',
        transforms,
        files: [
          {
            filter: filterDevicesTokens,
            destination: `${device}.css`,
            format: 'css/device',
            options: {
              outputReferences: true,
              maxWidth: maxWidth,
            },
          },
        ],
      },
    },
  });
  deviceTokens.buildAllPlatforms();
};

const devices = [
  { name: 'desktop-large', maxWidth: 1400 },
  { name: 'desktop', maxWidth: 1000 },
  { name: 'mobile', maxWidth: 600 },
  { name: 'desktop-small', maxWidth: 1200 },
];

// lage gjenstand styling filer for alle enheter
devices.forEach(({ name, maxWidth }) => transformDeviceTokens(name, maxWidth));

const nveTokensLight = StyleDictionary.extend({
  source: ['tokens/brand/nve.json', 'tokens/*json', 'tokens/Theme/light.json'],
  platforms: {
    nve: {
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
          destination: 'nve.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

const nveTokensDark = StyleDictionary.extend({
  source: ['tokens/Brand/nve.json', 'tokens/*json', 'tokens/Theme/dark.json'],
  platforms: {
    nveDark: {
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
          filter: (token) => token.filePath === 'tokens\\Theme\\dark.json',
          destination: 'nve_dark.css',
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

const varsomTokensLight = StyleDictionary.extend({
  source: ['tokens/Brand/nve.json', 'tokens/Brand/varsom.json', 'tokens/*json', 'tokens/Theme/light.json'],
  platforms: {
    varsom: {
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
          destination: 'varsom.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

const varsomTokensDark = StyleDictionary.extend({
  source: ['tokens/Brand/nve.json', 'tokens/Brand/varsom.json', 'tokens/*json', 'tokens/Theme/dark.json'],
  platforms: {
    varsomDark: {
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
          filter: (token) => token.filePath === 'tokens\\Theme\\dark.json',
          destination: 'varsom_dark.css',
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

nveTokensLight.buildAllPlatforms();
nveTokensDark.buildAllPlatforms();
varsomTokensLight.buildAllPlatforms();
varsomTokensDark.buildAllPlatforms();
