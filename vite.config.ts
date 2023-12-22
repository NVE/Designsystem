// vite.config.ts
import { defineConfig } from 'vite';
import esbuildPluginTsc from 'esbuild-plugin-tsc';

export default defineConfig({
  ssr: {
    external: ['lit/decorators.js'],
  },
  plugins: [esbuildPluginTsc()],
});
