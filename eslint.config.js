import prettier from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
      'dist',
      'node_modules',
      '*.d.ts',
      'build',
      'loader',
      'tokens',
      'doc-site/dist',
      'doc-site/node_modules',
      'doc-site/.vitepress/cache',
      'vite.config.ts',
      '.eslintrc.js',
      'custom-elements-manifest.config.js',
    ],
  },

  {
    files: ['**/*.vue', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsparser,
        sourceType: 'module',
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
      },
    },

    plugins: {
      vue,
      '@typescript-eslint': tseslint,
    },

    rules: {
      ...vue.configs['essential'].rules,
      ...tseslint.configs['recommended'].rules,

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'vue/no-multiple-template-root': 'off', // Slår av regelen fordi Vue 3 tillater flere rot-elementer i <template>
      'vue/no-deprecated-slot-attribute': 'off',

      quotes: ['error', 'double'],
      semi: ['error', 'always'],
      'no-console': 'error',
      'no-debugger': 'error',

      'max-lines-per-function': ['warn', { max: 50, skipBlankLines: true, skipComments: true }],
    },
  },

  prettier,
];
