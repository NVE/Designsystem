import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  previewHead: (head) => `
  ${head}
  <link rel="stylesheet" href="../src/styles/global.css" />
  <link rel="stylesheet" href="../../../build/css/varsom.css" />
`,
  docs: {
    autodocs: 'tag',
  },
};
export default config;
