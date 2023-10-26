/** @type { import('@storybook/web-components-vite').StorybookConfig } */
import './preview.js'

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    staticDirs: ['../www'],
  
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  parameters: {
    controls: {expanded: true},
  },
};
export default config;
