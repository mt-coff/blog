import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "../../components/MDXComponents";
import rehypePrism from "@mapbox/rehype-prism";
import Head from "next/head";
import { getPosts } from "@/api/getPosts";
import { ParsedUrlQuery } from "querystring";
import { getPostById } from "@/api/getPostById";
import { TitleDescription } from "@/components/TitleDescription";

type Props = {
  post?: Post;
  mdxSource?: MDXRemoteSerializeResult;
};

const PostPage: NextPage<Props> = ({ post, mdxSource }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-nord.min.css"
        />
      </Head>
      {mdxSource ? (
        <>
          {post && <TitleDescription {...post} />}
          <MDXRemote {...mdxSource} components={MDXComponents()} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<{}, Params> = async ({
  params,
}) => {
  if (!params) {
    return {
      props: {
        mdxSource: {},
      },
    };
  }
  const post = await getPostById(params.postId);
  const mdxSource = await serialize(post.body, {
    target: ["esnext"],
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });

  return {
    props: {
      mdxSource,
      post,
    },
  };
};

type Params = {
  postId: string;
} & ParsedUrlQuery;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getPosts({ limit: 100 });
  const paths = posts.map((post) => ({
    params: {
      postId: post.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default PostPage;
