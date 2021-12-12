import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const POSTS_PATH = path.join(process.cwd(), "src/posts");

export const getPostFilePaths = () => {
  return fs.readdirSync(POSTS_PATH).filter((path) => /.mdx?$/.test(path));
};

export const getPostSource = async (filePath: string) => {
  try {
    const target = path.join(POSTS_PATH, filePath);
    const lstatResult = await fs.promises.lstat(target);
    if (!lstatResult.isFile()) {
      return null;
    }
    return await fs.promises.readFile(target);
  } catch (err) {
    return null;
  }
};

export const getAllCategories = async () => {
  return (
    await Promise.all(
      getPostFilePaths().map(async (path) => {
        if (path.endsWith(".mdx") || path.endsWith(".md")) {
          const source = await getPostSource(path);
          if (!source) {
            return null;
          }
          const { data } = matter(source);
          return (data as Post).category;
        }
      })
    )
  ).filter((category) => category != null) as string[];
};

export const getAllPosts = () =>
  getPostFilePaths().map((filepath) => {
    const src = fs.readFileSync(path.join(POSTS_PATH, filepath));
    const { content, data } = matter(src);
    const { title, tags = [], category = "", created } = data;
    const filename = filepath.replace(/.mdx?$/, "");

    return {
      title,
      content,
      tags,
      category,
      created,
      filename,
    };
  });
