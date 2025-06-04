import { spawn } from 'child_process';
import chokidar from 'chokidar';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const distPath = path.resolve('./dist');
const sourcePath = './package.json';
const targetPath = './dist/package.json';

let currentBuildProcess = null;
let hasLinked = false;
let isBuilding = false;
let buildQueued = false;

const cleanDist = async () => {
  await fs.ensureDir(distPath);
  await fs.emptyDir(distPath);
  console.log(`${chalk.green('✔')} Cleaned dist folder`);
};

await cleanDist();

const runBuild = async () => {
  if (currentBuildProcess) {
    console.log(chalk.yellow('\n⚠️  Killing previous build process...'));
    currentBuildProcess.kill('SIGTERM');

    await new Promise((resolve) => {
      const timeout = setTimeout(resolve, 3000); // fallback timeout
      currentBuildProcess.on('close', () => {
        clearTimeout(timeout);
        resolve(true);
      });
    });

    currentBuildProcess = null;
  }
  if (isBuilding) {
    buildQueued = true;
    return;
  }

  isBuilding = true;

  currentBuildProcess = spawn('npx', ['vite', 'build', '--outDir', 'dist'], {
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
  });

  currentBuildProcess.stdout.on('data', async (data) => {
    const output = data.toString();
    process.stdout.write(output);

    // Printed in the console when the build is successful, example: ✓ built in 3.39s
    if (output.includes('built in')) {
      if (!hasLinked) {
        hasLinked = true;

        try {
          const source = await fs.readFile(sourcePath, 'utf-8');
          const sourceObj = JSON.parse(source);
          sourceObj.scripts = {};
          sourceObj.devDependencies = {};
          await fs.writeFile(targetPath, JSON.stringify(sourceObj, null, 2), 'utf-8');
          console.log(chalk.green('\n✍  package.json written to ./dist\n'));
        } catch (error) {
          console.error(chalk.red('✘ Failed to write package.json to ./dist'));
          console.error(error);
        }
        try {
          spawn('npm', ['link'], { cwd: './dist', stdio: 'inherit', shell: true });
          console.log(chalk.cyan('\n🔗 npm link was successful \n'));
        } catch (error) {
          console.error(chalk.red('✘ Failed to run npm link on ./dist ' + error));
        }
      }
    }
  });

  currentBuildProcess.stderr.on('data', (data) => {
    process.stderr.write(data.toString());
  });

  currentBuildProcess.on('close', (code) => {
    console.log(chalk.green('\n✅ Build completed') + ' - enjoy live rebuilds on file changes 🔥 \n');
    currentBuildProcess = null;
    isBuilding = false;

    if (buildQueued) {
      buildQueued = false;
      runBuild();
    }
  });
};

// Debounce helper
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// Watch for changes in src directory
const watcher = chokidar.watch('./src', {
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

watcher.on('ready', () => {
  console.log(chalk.cyan('\n👀  Watching for file changes...\n'));
  runBuild();
});

watcher.on('change', (filePath) => {
  console.log(chalk.magenta(`\n✏️  File changed: ${filePath} \n`));
  debounce(runBuild, 300)();
});
