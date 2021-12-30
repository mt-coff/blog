import { promises as fs } from "fs";
import path from "path";
import { cwd } from "process";
import { directorySetup } from "./directorySetup.mjs";
import { getAllPost } from "./getAllPost.mjs";

/**
 * @param {string} resourceName
 */
export const generateJSON = async (resourceName, filename) => {
  const targetDir = path.join(cwd(), "./src/data");
  await directorySetup(targetDir);
  const postDataList = await getAllPost();
  const contents = Array.from(
    new Set(
      postDataList
        .map((postData) => {
          if (postData.hasOwnProperty(resourceName)) {
            return postData[resourceName];
          }
          return null;
        })
        .flat()
        .filter((content) => !!content)
    )
  );

  await fs.writeFile(
    path.join(targetDir, `${filename ? filename : resourceName}.json`),
    JSON.stringify(contents)
  );
};
