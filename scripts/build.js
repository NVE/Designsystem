import { exec } from 'child_process';
import cpy from 'cpy';
import util from 'util';
import ora from 'ora';
import chalk from 'chalk';

const execPromise = util.promisify(exec);
const spinner = ora({ hideCursor: false }).start();
//
// Helper function to run tasks in async
//
async function nextTask(label, action) {
  spinner.text = label;
  spinner.start();

  try {
    await action();
    spinner.stop();
    console.log(`${chalk.green('✔')} ${label}`);
  } catch (err) {
    spinner.stop();
    console.error(`${chalk.red('✘')} ${err}`);
    if (err.stdout) console.error(chalk.red(err.stdout));
    if (err.stderr) console.error(chalk.red(err.stderr));
    process.exit(1);
  }
}

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
