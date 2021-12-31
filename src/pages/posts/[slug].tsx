import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "../../components/MDXComponents";
import rehypePrism from "@mapbox/rehype-prism";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { TitleDescription } from "@/components/TitleDescription";
import {
  getAllCategories,
  getPostFilePaths,
  getPostSource,
  POSTS_PATH,
} from "@/utils/mdxUtils";
import matter from "gray-matter";
import { Meta } from "@/components/Meta";
import { Box } from "@chakra-ui/react";
import { CommonLayout } from "@/components/CommonLayout";

type Props = {
  post?: Post;
  categories: string[];
  mdxSource?: MDXRemoteSerializeResult;
};

const PostPage: NextPage<Props> = ({ post, mdxSource, categories }) => {
  return (
    <CommonLayout categories={categories}>
      <Meta image={post?.filename} title={post?.title} />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-nord.min.css"
        />
      </Head>
      {mdxSource ? (
        <>
          {post && <TitleDescription {...post} />}
          <Box as="article" flex={1}>
            <MDXRemote {...mdxSource} components={MDXComponents()} />
          </Box>
        </>
      ) : (
        <></>
      )}
    </CommonLayout>
  );
};

export const getStaticProps: GetStaticProps<{}, Params> = async ({
  params,
}) => {
  const categories = getAllCategories();
  if (!params) {
    return {
      props: {
        categories,
      },
    };
  }
  const src =
    (await getPostSource(`${params.slug}.md`)) ||
    (await getPostSource(`${params.slug}.mdx`));
  if (!src) {
    return {
      props: {
        categories,
      },
    };
  }
  const { content, data } = matter(src);
  const mdxSource = await serialize(content, {
    mdxOptions: { rehypePlugins: [rehypePrism] },
  });

  return {
    props: {
      mdxSource,
      post: { filename: params.slug, ...data },
      categories,
    },
  };
};

type Params = {
  slug: string;
} & ParsedUrlQuery;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getPostFilePaths()
    .map((path) => path.replace(/.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};

export default PostPage;
