import { getPosts } from "@/api/getPosts";
import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { PostList } from "../components/PostList";

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
  const posts = await getPosts({ limit: 6 });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
