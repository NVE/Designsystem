//Brukes til å kjøre bygg med fil kopiering
import { exec } from 'child_process';
import cpy from 'cpy';
import util from 'util';
import nextTask from './nextTask.js';

const execPromise = util.promisify(exec);

await nextTask('Running the TypeScript compiler', () => {
  return execPromise('tsc');
});
await nextTask('Building the project', () => {
  return execPromise('vite build');
});
await nextTask('Copy css variables files', () => {
  return cpy('./build/css/**/*', 'dist/css/', { concurrency: 100 });
});
await nextTask('Copy css variables files', () => {
  return cpy('./build/css/**/*', 'dist/css/', { concurrency: 100 });
});
await nextTask('Copy global.css file', () => {
  return cpy('src/styles/global.css', 'dist/css/', { concurrency: 100, flat: true });
});
await nextTask('Copy components files', () => {
  return cpy('src/components/**/*', 'dist/components/', { concurrency: 100 });
});