import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import process from "process";

export const getAllPost = async () => {
  const postsPath = path.join(process.cwd(), "./src/posts");

  return Promise.all(
    (await fs.readdir(postsPath)).map(async (filename) => {
      const source = await fs.readFile(path.join(postsPath, filename));
      return {
        filename: filename.replace(/.mdx?/, ""),
        ...matter(source).data,
      };
    })
  );
};
