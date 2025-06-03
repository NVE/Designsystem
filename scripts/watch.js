import chokidar from "chokidar";
import { exec } from "child_process";
import nextTask from "./nextTask.js";

const watcher = chokidar.watch(["src", "components", "css"], {
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

let isBuilding = false;
let hasBeenLinked = false;
let rebuildQueued = false;
let debounceTimer = null;

await nextTask("Running the TypeScript compiler", () => {
  return exec("tsc");
});

const runBuild = () => {
  if (isBuilding) {
    rebuildQueued = true;
    return;
  }

  isBuilding = true;
  console.log("🔄 Rebuilding...");
  const build = exec("node scripts/build.js -- --watch");

  build.stdout.on("data", (data) => process.stdout.write(data));
  build.stderr.on("data", (data) => process.stderr.write(data));

  build.on("exit", () => {
    console.log("✅ Build complete.\n");

    if (!hasBeenLinked) {
      console.log("🔗 Linking the package...");
      const link = exec("cd dist && npm link");

      link.stdout.on("data", (data) => process.stdout.write(data));
      link.stderr.on("data", (data) => process.stderr.write(data));

      link.on("exit", () => {
        console.log("✅ Package linked successfully.\n");
        hasBeenLinked = true;
        finishBuild();
      });
    } else {
      finishBuild();
    }
  });
};

const finishBuild = () => {
  isBuilding = false;
  if (rebuildQueued) {
    rebuildQueued = false;
    runBuild();
  }
};

const scheduleBuild = () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(runBuild, 100);
};

watcher.on("change", scheduleBuild);
watcher.on("add", scheduleBuild);
watcher.on("unlink", scheduleBuild);
