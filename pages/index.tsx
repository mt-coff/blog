import { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import BaseLayout from "../components/BaseLayout";
import Pagination from "../components/Pagination";
import Profile from "../components/Profile";
import { getPosts } from "../utils/posts";
import { useRouter } from "next/router";
import PostListItem from "../components/PostListItem";

type Props = {
  posts: ReturnType<typeof getPosts>;
};

const PER_PAGE = 5;

const IndexPage: NextPage<Props> = ({ posts }) => {
  const splitPosts = posts.reduce(
    (acc, _cur, idx) =>
      idx % PER_PAGE ? acc : [...acc, posts.slice(idx, idx + PER_PAGE)],
    []
  );
  const router = useRouter();
  const currentPageQuery = router.query.p;
  const initialCurrentPageNum = (() => {
    if (Array.isArray(currentPageQuery) || currentPageQuery == null) return 1;
    return parseInt(currentPageQuery, 10) ?? 1;
  })();
  const [currentPageNum, setCurrentPageNum] = useState(initialCurrentPageNum);
  const toNext = () => {
    if (currentPageNum < splitPosts.length) {
      setCurrentPageNum(currentPageNum + 1);
      router.push({ query: { p: `${currentPageNum + 1}` } });
    }
  };
  const toPrev = () => {
    if (currentPageNum > 1) {
      setCurrentPageNum(currentPageNum - 1);
      router.push({ query: { p: `${currentPageNum - 1}` } });
    }
  };

  return (
    <BaseLayout>
      <section className="flex-grow max-w-screen-md w-full px-8 mb-8 lg:mb-4">
        {splitPosts.length === 0 ? (
          <p className="text-center">記事が投稿されていません</p>
        ) : (
          <>
            <ul className="flex flex-grow flex-col min-h-full">
              {splitPosts[currentPageNum - 1].map((post, idx) => (
                <PostListItem
                  key={idx}
                  title={post.title}
                  created={post.created}
                  href={post.href}
                  tags={post.tags}
                />
              ))}
            </ul>
            <Pagination
              total={splitPosts.length}
              current={currentPageNum}
              perPage={PER_PAGE}
              toNext={toNext}
              toPrev={toPrev}
            />
          </>
        )}
      </section>
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
