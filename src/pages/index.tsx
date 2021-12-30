import { getAllPosts, getPostFilePaths, POSTS_PATH } from "@/utils/mdxUtils";
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
  const posts: Array<Post> = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
