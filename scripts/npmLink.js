/*

  Hensikten med denne filen er å håndtere bygging og lenking av NVEs designsystem for å forenkle lokal pakke utvikling.

  Når alt fungerer som det skal så vil du se endringer gjort i designsystemet, reflektert i din applikasjon etter kort tid.

*/

import { exec, spawn } from 'child_process';
import chokidar from 'chokidar';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import util from 'util';

const execPromise = util.promisify(exec);

const distPath = path.resolve('./dist');
const sourcePath = './package.json';
const targetPath = './dist/package.json';

let hasLinked = false;
let hasBuiltPackageJson = false;
let hasCreatedCustomElementsManifest = false;
let currentBuildProcess = null;
let isBuilding = false;
let buildRequested = false;
let buildCancelled = false;

const cleanDist = async () => {
  await fs.ensureDir(distPath);
  await fs.emptyDir(distPath);
  console.log(`${chalk.green('✔')} Cleaned dist folder`);
};

await cleanDist();

const runBuild = async () => {
  if (isBuilding) {
    buildRequested = true;

    if (currentBuildProcess) {
      console.log(chalk.yellow('\n⚠️  Cancelling current build to prioritize latest change...'));
      buildCancelled = true;
      currentBuildProcess.kill('SIGTERM');
    }

    return;
  }

  isBuilding = true;
  buildCancelled = false;

  currentBuildProcess = spawn('npx', ['vite', 'build', '--outDir', 'dist', '--emptyOutDir=false'], {
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
  });

  currentBuildProcess.stdout.on('data', async (data) => {
    const output = data.toString();
    process.stdout.write(output);

    // Ser om bygget var vellykket ved å sjekke etter "✓ built in"
    if (output.includes('✓ built in')) {
      if (!hasBuiltPackageJson) {
        try {
          const source = await fs.readFile(sourcePath, 'utf-8');
          const sourceObj = JSON.parse(source);
          sourceObj.scripts = {};
          sourceObj.devDependencies = {};
          fs.writeFile(targetPath, JSON.stringify(sourceObj, null, 2), 'utf-8');
          console.log(chalk.green('\n✍  package.json written to ./dist\n'));
          hasBuiltPackageJson = true;
        } catch (error) {
          console.error(chalk.red('✘ Failed to write package.json to ./dist ' + error));
        }
      }

      if (!hasLinked) {
        try {
          spawn('npm', ['link'], { cwd: './dist', stdio: 'inherit', shell: true });
          console.log(chalk.cyan('\n🔗 npm link was successful \n'));
          hasLinked = true;
        } catch (error) {
          console.error(chalk.red('✘ Failed to run npm link on ./dist ' + error));
        }
      }
      if (!hasCreatedCustomElementsManifest) {
        try {
          execPromise('npm run manifest');
          console.log(chalk.green('\n📃 custom-elements-manifest was successfully written to ./dist \n'));
          hasCreatedCustomElementsManifest = true;
        } catch (error) {
          console.error(chalk.red('✘ Failed to run npm manifest ' + error));
        }
      }
    }
  });

  currentBuildProcess.stderr.on('data', (data) => {
    process.stderr.write(data.toString());
  });

  currentBuildProcess.on('close', async () => {
    isBuilding = false;
    currentBuildProcess = null;
    if (buildCancelled || buildRequested) {
      buildRequested = false;
      buildCancelled = false;
      await runBuild();
    } else {
      console.log(chalk.green('\n✅ Build completed') + ' - 👀  Watching for file changes \n');
    }
  });
};

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

const debouncedRunBuild = debounce(runBuild, 300);

// Watcher
const watcher = chokidar.watch('./src', {
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

watcher.on('ready', () => {
  console.log(chalk.cyan('\n Watcher ready...\n'));
  runBuild();
});

watcher.on('change', (filePath) => {
  console.log(chalk.magenta(`\n✏️  File changed: ${filePath} \n`));
  debouncedRunBuild();
});
