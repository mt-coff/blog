import { getPostFilePaths, POSTS_PATH } from "@/utils/mdxUtils";
import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { PostList } from "../components/PostList";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <PostList posts={posts}></PostList>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props, {}> = async () => {
  const posts: Array<Post> = getPostFilePaths().map((filepath) => {
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

  return {
    props: {
      posts,
    },
  };
};

export default Home;
