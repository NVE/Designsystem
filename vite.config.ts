// vite.config.ts
import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import dts from 'vite-plugin-dts';
import { glob } from 'glob';
import alias from '@rollup/plugin-alias';
import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

/** Inneholder alle stiene til filene som skal bundles, og skal ha types */
const includedPaths = ['src/**/*.ts'];
/** Inneholder stiene til filene som ikke skal bundles, og som ikke skal ha types */
const excludedPaths = [
  'src/components/**/*.demo.ts',
  'src/stories/**',
  'src/assets/**',
  'src/styles/**',
  'src/utils/**',
  'src/main.ts',
];

// Sikre at vi henter riktig css fil i global.css etter build
function replaceImportAfterBuild() {
  return {
    name: 'replace-import-path',
    closeBundle() {
      const globalCssPath = path.resolve(__dirname, 'dist/css/global.css');
      if (fs.existsSync(globalCssPath)) {
        let content = fs.readFileSync(globalCssPath, 'utf8');
        content = content.replace('../../dist/nve-designsystem.css', '../nve-designsystem.css');
        fs.writeFileSync(globalCssPath, content, 'utf8');
        console.log('\n✅ Fixed import path in global.css \n');
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      dts({
        include: includedPaths,
        exclude: excludedPaths,
      }),
      alias({
        entries: [{ find: '@interfaces', replacement: resolve(__dirname, 'src/interfaces') }],
      }) as Plugin,
      replaceImportAfterBuild(),
    ],
    build: {
      sourcemap: mode === 'development' ? true : false,
      lib: {
        entry: resolve(__dirname, 'src/nve-designsystem.ts'),
        formats: ['es'],
      },
      rollupOptions: {
        input: Object.fromEntries(
          glob
            .sync(includedPaths, {
              ignore: excludedPaths,
            })
            .map((file) => [
              // from src/components/button/button.tsx => components/button/button
              relative('src', file.slice(0, file.length - extname(file).length)),
              fileURLToPath(new URL(file, import.meta.url)),
            ])
        ),
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: 'chunks/[name].js',
        },
      },
    },
  };
});
