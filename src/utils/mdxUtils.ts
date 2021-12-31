import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { compareDesc } from "date-fns";

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

export const getAllCategories = () => {
  const posts = getAllPosts();
  const categories = Array.from(
    new Set(
      posts
        .map((post) => post.category)
        .filter((category): category is string => !!category)
    )
  );
  categories.push("未分類");

  return categories;
};

export const getAllPosts = (): Post[] =>
  getPostFilePaths()
    .map((filepath) => {
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
    })
    .sort((a, b) => compareDesc(new Date(a.created), new Date(b.created)));
