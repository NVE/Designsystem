//Brukes til å kjøre bygg med fil kopiering
import { exec } from "child_process";
import util from "util";
import chalk from "chalk";
import nextTask from "./nextTask.js";
import fs from "fs";
import process from "process";
import { Buffer } from "buffer";

const execPromise = util.promisify(exec);
// get mode type. Production is default.
const command = process.argv[2];

const isWatch = process.argv.includes("--watch");

//check if dist folder exists and delete it
if (fs.existsSync("./dist") && !isWatch) {
  await fs.rm("./dist", { recursive: true }, (err) => {
    if (err) {
      console.log(
        `\n${chalk.red("✘")} Removal of dist folder failed. You risk bringing old files in the package. Details: ${err}`
      );
    } else {
      console.log(`\n${chalk.green("✔")} dist folder removed successfully`);
    }
  });
}

if (!isWatch) {
  await nextTask("Running the TypeScript compiler", () => {
    return execPromise("tsc");
  });
}

await nextTask("Building the project", () => {
  return execPromise(
    `vite build ${command === "dev" ? "--mode development" : ""}`
  );
});

if (!isWatch) {
  await nextTask("Creating custom-elements.json in dist folder", () => {
    return execPromise("npm run manifest");
  });
}

await nextTask("Adding package.json to dist folder", () => {
  const source = Buffer.from(
    fs.readFileSync("./package.json").toString("utf-8")
  );
  const sourceObj = JSON.parse(source);

  // Strip out scripts and devDependencies
  sourceObj.scripts = {};
  sourceObj.devDependencies = {};

  // Write the modified package.json to the dist folder
  fs.writeFileSync(
    "./dist/package.json",
    Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8")
  );
});
