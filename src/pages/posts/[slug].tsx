import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "../../components/MDXComponents";
import rehypePrism from "@mapbox/rehype-prism";
import Head from "next/head";

type Props = {
  mdxSource: MDXRemoteSerializeResult;
};

const PostPage: NextPage<Props> = ({ mdxSource }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-nord.min.css"
        />
      </Head>
      {mdxSource ? (
        <MDXRemote {...mdxSource} components={MDXComponents()} />
      ) : (
        <></>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const source = "";
  const mdxSource = await serialize(source, {
    target: ["esnext"],
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });

  return {
    props: {
      mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default PostPage;
