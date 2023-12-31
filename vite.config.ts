// vite.config.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    dts({
      include: ['src/index.ts', 'src/components/**/*.component.ts'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NveDesignsystem',
      fileName: 'nve-designsystem',
      formats: ['es', 'umd'],
    },
  },
});
