import { promises as fs } from "fs";
import path from "path";
import { exit } from "process";

/**
 *
 * @param {string} path
 */
export const directorySetup = async (targetPath) => {
  try {
    const lstatResult = await fs.lstat(targetPath);
    if (lstatResult.isDirectory()) {
      console.log(`${path.basename(targetPath)} directory exists!`);
    } else {
      console.error("File exists. Please remove.");
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(targetPath);
      console.log(`${path.basename(targetPath)} has been directory created!`);
      return;
    }
    console.error(`Failed to make the directory.\n${error}`);
    exit(-1);
  }
};
