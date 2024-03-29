import type { StorybookConfig } from '@storybook/web-components-vite';
// we have to add another styling files after they will be in use

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  previewHead: (head) => `
  ${head}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/themes/light.css" />
  <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/source-sans-pro" />
  <link rel="stylesheet" href="/css/varsom.css" />
  <link rel="stylesheet"  href="/css/global.css"/>
`,
  docs: {
    autodocs: 'tag',
  },
};
export default config;
