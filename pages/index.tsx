import { GetStaticProps, NextPage } from "next";
import React from "react";
import BaseLayout from "../components/BaseLayout";
import Profile from "../components/Profile";
import { getPosts } from "../utils/posts";

type Props = {
  posts: ReturnType<typeof getPosts>;
};

const IndexPage: NextPage<Props> = ({ posts }) => {
  return (
    <BaseLayout>
      <section className="flex-grow max-w-screen-md w-full px-8 mb-8 lg:mb-4"></section>
      <Profile />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default IndexPage;
