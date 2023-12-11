import type { StorybookConfig } from '@storybook/web-components-vite';

const globalCSSPath = process.env.NODE_ENV === 'production' ? '/assets/global.css' : '../src/styles/global.css';

const varsomCSSPath = process.env.NODE_ENV === 'production' ? '/assets/varsom.css' : '../../../build/css/varsom.css';

// we have to add another styling files after they will be in use

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  previewHead: (head) => `
  ${head}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/themes/light.css" />
  <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/source-sans-pro" />
  <link rel="stylesheet" href="${varsomCSSPath}" />
  <link rel="stylesheet" href="${globalCSSPath}" />
`,
  docs: {
    autodocs: 'tag',
  },
};
export default config;
