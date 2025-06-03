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

const cleanDist = async () => {
  await fs.ensureDir(distPath);
  await fs.emptyDir(distPath);
  console.log(`${chalk.green('✔')} Cleaned dist folder`);
};

const runBuild = async () => {
  if (currentBuildProcess) {
    console.log(chalk.yellow('⚠️  Killing previous build process...'));
    currentBuildProcess.kill('SIGTERM');
  }

  await cleanDist();

  console.log(chalk.blue('🔨 Starting Vite build...'));
  currentBuildProcess = spawn('npx', ['vite', 'build', '--outDir', 'dist'], {
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
  });

  currentBuildProcess.stdout.on('data', async (data) => {
    const output = data.toString();
    process.stdout.write(output);

    if (output.includes('built in')) {
      console.log(chalk.green('\n✅ Build completed\n'));

      if (!hasLinked) {
        hasLinked = true;

        const source = await fs.readFile(sourcePath, 'utf-8');
        const sourceObj = JSON.parse(source);
        sourceObj.scripts = {};
        sourceObj.devDependencies = {};
        await fs.writeFile(targetPath, JSON.stringify(sourceObj, null, 2), 'utf-8');
        console.log(`${chalk.green('✍')} package.json written to dist`);
        console.log(chalk.cyan('\n🔗 Running npm link from dist/\n'));

        spawn('npm', ['link'], { cwd: './dist', stdio: 'inherit', shell: true });
      }
    }
  });

  currentBuildProcess.stderr.on('data', (data) => {
    process.stderr.write(data.toString());
  });

  currentBuildProcess.on('close', (code) => {
    console.log(`Vite build process exited with code ${code}`);
    currentBuildProcess = null;
  });
};

// Watch for changes in src directory
const watcher = chokidar.watch('./src', {
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

watcher.on('ready', () => {
  console.log(chalk.cyan('👀 Watching for file changes...'));
  runBuild(); // Initial build
});

watcher.on('change', (filePath) => {
  console.log(chalk.magenta(`✏️  File changed: ${filePath}`));
  runBuild();
});
