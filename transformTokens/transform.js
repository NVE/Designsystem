import fontFamilies from './customtransforms/fontFamilies.js';
import fontWeight from './customtransforms/fontWeights.js';
import boxShadow from './customtransforms/boxShadow.js';
import fontSizes from './customtransforms/fontSizes.js';
import fixZeroes from './customtransforms/fixZeroes.js';
import { StyleDictionary } from 'style-dictionary-utils';
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

const myStyleDictionary = new StyleDictionary();

StyleDictionary.registerTransform(fontFamilies);
StyleDictionary.registerTransform(fontWeight);
StyleDictionary.registerTransform(boxShadow);
StyleDictionary.registerTransform(fontSizes);
StyleDictionary.registerTransform(fixZeroes);

myStyleDictionary.registerFormat({
  name: 'css/variables',
  format: async ({ dictionary, file, options }) => {
    const { outputReferences, theme } = options;
    const header = await fileHeader({ file });
    return (
      header +
      `@import './global.css'; \n` +
      `:root${theme ? '.' + theme : ''} {\n` +
      formattedVariables({ format: 'css', dictionary, outputReferences }) +
      '\n}\n'
    );
  },
});

myStyleDictionary.registerFormat({
  name: 'css/device',
  format: ({ dictionary, options }) => {
    const { outputReferences, minWidth, maxWidth } = options;
    return minWidth || maxWidth
      ? `@media (${maxWidth ? 'max-width' : 'min-width'}: ${maxWidth || minWidth}px) {\n` +
          `:root {\n` +
          formattedVariables({ format: 'css', dictionary, outputReferences }) +
          '\n}\n' +
          '}\n'
      : formattedVariables({ format: 'css', dictionary, outputReferences });
  },
});

const transforms = [
  'attribute/cti',
  'name/kebab',
  'fixZeroes',
  'fontFamilies/css',
  'fontFamily/css',
  'fontWeight/number',
  'fontWeights/number',
  'boxshadow/css',
  'shadow/css',
];

// vi trenger kun disse properties i gjenstand styling filene
const filterDevicesTokens = (token) => {
  return (
    token.type === 'typography' || token.type === 'spacing' || token.type === 'sizing' || token.type === 'fontSizes'
  );
};

const transformDeviceTokens = async (device, minWidth, maxWidth) => {
  const deviceTokens = await myStyleDictionary.extend({
    source: [
      'tokens/$metadata.json',
      'tokens/$themes.json',
      `tokens/public/device/${device}.json`,
      'tokens/brand/nve.json',
    ],
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
              minWidth: minWidth,
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
  { name: 'desktop' },
  { name: 'desktop-large', minWidth: 1400 },
  { name: 'desktop-small', maxWidth: 1200 },
  { name: 'mobile', maxWidth: 600 },
];

// transform alle tilgjengelige gjenstander
devices.forEach(async ({ name, minWidth, maxWidth }) => await transformDeviceTokens(name, minWidth, maxWidth));

async function buildThemeTokens(source, platformName, destination, themeOption) {
  return await myStyleDictionary.extend({
    source: source,
    platforms: {
      [platformName]: {
        transformGroup: 'css',
        buildPath: 'public/css/',
        transforms,
        files: [
          {
            destination: destination,
            format: 'css/variables',
            options: {
              outputReferences: true,
              ...(themeOption ? { theme: themeOption } : {}),
            },
          },
        ],
      },
    },
  });
}

const nveTokensLight = await buildThemeTokens(
  ['tokens/brand/nve.json', 'tokens/*json', 'tokens/public/theme/light.json'],
  'nve',
  'nve.css'
);

const nveTokensDark = await buildThemeTokens(
  ['tokens/brand/nve.json', 'tokens/*json', 'tokens/public/theme/dark.json'],
  'nveDark',
  'nve_dark.css',
  'darkmode'
);

const varsomTokensLight = await buildThemeTokens(
  ['tokens/brand/nve.json', 'tokens/brand/varsom.json', 'tokens/*json', 'tokens/public/theme/light.json'],
  'varsom',
  'varsom.css'
);

const varsomTokensDark = await buildThemeTokens(
  ['tokens/brand/nve.json', 'tokens/brand/varsom.json', 'tokens/*json', 'tokens/public/theme/dark.json'],
  'varsomDark',
  'varsom_dark.css',
  'darkmode'
);

const rmeTokensLight = await buildThemeTokens(
  ['tokens/brand/nve.json', 'tokens/brand/rme.json', 'tokens/*json', 'tokens/public/theme/light.json'],
  'rme',
  'rme.css'
);

const rmeTokensDark = await buildThemeTokens(
  ['tokens/brand/nve.json', 'tokens/brand/rme.json', 'tokens/*json', 'tokens/public/theme/dark.json'],
  'rmeDark',
  'rme_dark.css',
  'darkmode'
);

nveTokensLight.buildAllPlatforms();
nveTokensDark.buildAllPlatforms();
varsomTokensLight.buildAllPlatforms();
varsomTokensDark.buildAllPlatforms();
rmeTokensLight.buildAllPlatforms();
rmeTokensDark.buildAllPlatforms();
