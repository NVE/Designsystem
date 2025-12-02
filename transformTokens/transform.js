import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

register(StyleDictionary);

const createBrandCssFiles = async (files, destination, themeOption) => {
  const config = new StyleDictionary({
    source: files,
    log: {
      verbosity: 'default',
    },
    preprocessors: ['tokens-studio'],
    hooks: {
      filters: {
        'no-dimensions': (token) => {
          return token.$type !== 'dimension'; //fjerner dimensions, de kommer i gjenstand tokene
        },
      },
    },
    platforms: {
      css: {
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        buildPath: 'public/css/',
        files: [
          {
            destination: `${destination}.css`,
            format: 'css/variables',
            filter: 'no-dimensions',
            options: {
              outputReferences: true,
              ...(themeOption ? { theme: themeOption } : {}),
            },
          },
        ],
      },
    },
  });
  await config.buildAllPlatforms();
};

const createDeviceCssFiles = async (device) => {
  const config = new StyleDictionary({
    source: [
      `tokens/public/device/${device}.json`,
      'tokens/$metadata.json',
      'tokens/$themes.json',
      'tokens/brand/nve.json',
    ],
    log: {
      verbosity: 'default',
    },
    preprocessors: ['tokens-studio'],
    hooks: {
      filters: {
        sizes: (token) => {
          return (
            token.$type === 'typography' ||
            token.$type === 'dimension' ||
            token.$type === 'sizing' ||
            token.$type === 'fontSize'
          );
        },
      },
    },
    platforms: {
      css: {
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        buildPath: 'public/css/',
        files: [
          {
            destination: `${device}.css`,
            format: 'css/variables',
            filter: 'sizes',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  });

  await config.buildAllPlatforms();
};

const devices = ['desktop', 'desktop-large', 'tablet', 'mobile', 'mobile-small'];

for (const device of devices) {
  await createDeviceCssFiles(device);
}

await createBrandCssFiles(
  ['tokens/brand/nve.json', 'tokens/public/theme/light.json', 'tokens/$metadata.json', 'tokens/$themes.json'],
  'nve'
);
await createBrandCssFiles(
  ['tokens/brand/nve.json', 'tokens/*json', 'tokens/public/theme/dark.json'],
  'nve_dark',
  'darkmode'
);
await createBrandCssFiles(
  ['tokens/brand/nve.json', 'tokens/brand/varsom.json', 'tokens/*json', 'tokens/public/theme/light.json'],
  'varsom'
);
await createBrandCssFiles(
  ['tokens/brand/nve.json', 'tokens/brand/varsom.json', 'tokens/*json', 'tokens/public/theme/dark.json'],
  'varsom_dark',
  'darkmode'
);
await createBrandCssFiles(
  ['tokens/brand/nve.json', 'tokens/brand/rme.json', 'tokens/*json', 'tokens/public/theme/light.json'],
  'rme'
);
await createBrandCssFiles(
  ['tokens/brand/nve.json', 'tokens/brand/rme.json', 'tokens/*json', 'tokens/public/theme/dark.json'],
  'rme_dark',
  'darkmode'
);
