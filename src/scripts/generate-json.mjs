import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";
import { cwd } from "process";
import { directorySetup } from "./directorySetup.mjs";

/**
 * @param {string} resourceName
 */
export const generateJSON = async (resourceName) => {
  const targetDir = path.join(cwd(), "./src/data");
  await directorySetup(targetDir);
  const postsPath = path.join(cwd(), "./src/posts");
  const postDataList = await Promise.all(
    (
      await fs.readdir(postsPath)
    ).map(async (filename) => {
      const source = await fs.readFile(path.join(postsPath, filename));
      return matter(source).data;
    })
  );
  const contents = postDataList
    .map((postData) => {
      if (postData.hasOwnProperty(resourceName)) {
        return postData[resourceName];
      }
      return null;
    })
    .flat()
    .filter((content) => !!content);

  await fs.writeFile(
    path.join(targetDir, `${resourceName}.json`),
    JSON.stringify(contents)
  );
};
