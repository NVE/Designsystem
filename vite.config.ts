// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    external: ['lit/decorators.js'],
  },
});
