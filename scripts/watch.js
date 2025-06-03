import { exec, spawn } from 'child_process';
import nextTask from './nextTask.js';

import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const distPath = path.resolve('./dist');
const sourcePath = './package.json';
const targetPath = './dist/package.json';

let hasLinked = false;

// Clean dist folder before starting
await fs.ensureDir(distPath);
await fs.emptyDir(distPath);
console.log(`${chalk.green('✔')} Cleaned dist folder`);

// Start the Vite build process in watch mode directly to dist
await nextTask('Starting Vite build in watch mode (to dist)', () => {
  const build = spawn('npx', ['vite', 'build', '--watch', '--outDir', 'dist'], {
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
  });

  build.stdout.on('data', async (data) => {
    const output = data.toString();
    process.stdout.write(output);

    if (output.includes('built in')) {
      console.log(chalk.green('\n✅ Build completed\n'));

      try {
        // Run npm link
        if (!hasLinked) {
          hasLinked = true;

          // Write cleaned package.json
          const source = await fs.readFile(sourcePath, 'utf-8');
          const sourceObj = JSON.parse(source);
          sourceObj.scripts = {};
          sourceObj.devDependencies = {};
          await fs.writeFile(targetPath, JSON.stringify(sourceObj, null, 2), 'utf-8');
          console.log(`${chalk.green('✍')} package.json written to dist`);
          console.log(chalk.cyan('\n🔗 Running npm link from dist/\n'));
          exec('npm link', { cwd: './dist' }, (error, stdout, stderr) => {
            if (error) {
              console.error(`npm link error: ${error.message}`);
              return;
            }
            if (stderr) console.error(`npm link stderr: ${stderr}`);
            if (stdout) console.log(`npm link stdout: ${stdout}`);
          });
        }
      } catch (err) {
        console.error(chalk.red('❌ Error during post-build steps:'), err);
      }
    }
  });

  build.stderr.on('data', (data) => {
    process.stderr.write(data.toString());
  });

  build.on('close', (code) => {
    console.log(`Vite build process exited with code ${code}`);
  });
});
