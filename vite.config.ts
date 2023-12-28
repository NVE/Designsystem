// vite.config.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/index.ts'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NveDesignsystem',
      fileName: 'nve-designsystem',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['lit', 'lit/decorators.js', '@shoelace-style/shoelace'],
      output: {
        globals: {
          lit: 'lit',
          'lit/decorators.js': 'lit/decorators.js',
          '@shoelace-style/shoelace': '@shoelace-style/shoelace',
        },
      },
    },
  },
});
