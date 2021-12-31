import { getAllCategories, getAllPosts } from "@/utils/mdxUtils";
import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { CommonLayout } from "../components/CommonLayout";
import { PostList } from "../components/PostList";

type Props = {
  posts: Post[];
  categories: string[];
};

const Home: NextPage<Props> = ({ posts, categories }) => {
  return (
    <CommonLayout categories={categories}>
      <PostList posts={posts}></PostList>
    </CommonLayout>
  );
};

export const getStaticProps: GetStaticProps<Props, {}> = async () => {
  const posts: Array<Post> = getAllPosts();
  const categories = getAllCategories();

  return {
    props: {
      posts,
      categories,
    },
  };
};

export default Home;
