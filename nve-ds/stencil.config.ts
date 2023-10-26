import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'nve-ds',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
   globalStyle: 'src/global/global.css',
  testing: {
    browserHeadless: "new",
  },
};
