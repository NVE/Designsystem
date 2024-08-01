import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './assets'),
      '@images': path.resolve(__dirname, './assets/images')
    }
  }
});
