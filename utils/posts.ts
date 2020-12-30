import fs from "fs";
import fm from "front-matter";
import { FrontMatter } from "../types/frontMatter";

const postsPath = "./pages/posts";

type POST = {
  year: string;
  month: string;
  href: string;
} & FrontMatter;

export const getPosts = () => {
  const posts: POST[] = [];
  for (const year of fs.readdirSync(postsPath)) {
    if (!year.match(/^[0-9]{4}$/)) continue;
    for (const month of fs.readdirSync(`${postsPath}/${year}`)) {
      if (!month.match(/^0[1-9]|1[0-2]$/)) continue;
      for (const file of fs.readdirSync(`${postsPath}/${year}/${month}`)) {
        if (!file.match(/\.mdx?$/)) continue;
        const path = `${postsPath}/${year}/${month}/${file}`;
        const post = fm(fs.readFileSync(path, "utf-8"));
        const meta = post.attributes as FrontMatter;

        posts.push({
          ...meta,
          year: year,
          month: month,
          href: `/posts/${year}/${month}/${file.replace(/\.mdx?$/, "")}`,
        });
      }
    }
  }
  posts.sort((x, y) => {
    const xCreated = new Date(x.created).getTime();
    const yCreated = new Date(y.created).getTime();

    if (xCreated > yCreated) return -1;
    if (xCreated < yCreated) return 1;

    return 0;
  });

  return posts;
};
