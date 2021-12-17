import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "../../components/MDXComponents";
import rehypePrism from "@mapbox/rehype-prism";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { TitleDescription } from "@/components/TitleDescription";
import { getPostFilePaths, getPostSource, POSTS_PATH } from "@/utils/mdxUtils";
import matter from "gray-matter";
import { Meta } from "@/components/Meta";

type Props = {
  post?: Post;
  mdxSource?: MDXRemoteSerializeResult;
};

const PostPage: NextPage<Props> = ({ post, mdxSource }) => {
  console.log(post);
  return (
    <>
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
      props: {},
    };
  }
  const src =
    (await getPostSource(`${params.slug}.md`)) ||
    (await getPostSource(`${params.slug}.mdx`));
  if (!src) {
    return {
      props: {},
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
