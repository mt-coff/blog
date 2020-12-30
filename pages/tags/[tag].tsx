import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { getPosts } from "../../utils/posts";
import BaseLayout from "../../components/BaseLayout";
import PostListItem from "../../components/PostListItem";

type Props = {
  posts: ReturnType<typeof getPosts>;
};

const Tags: NextPage<Props> = ({ posts }) => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <BaseLayout>
      <section className="flex-grow max-w-screen-md w-full px-8 mb-8 lg:mb-4">
        <ul>
          {posts.map((post, idx) => (
            <PostListItem
              key={idx}
              title={post.title}
              created={post.created}
              href={post.href}
              tags={post.tags}
            />
          ))}
        </ul>
      </section>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params.tag as string;
  const posts = getPosts().filter((post) => post.tags.includes(tag));

  return {
    props: {
      posts: posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts();
  const tags = posts.map((post) => post.tags).flat();
  const tagPaths = tags.map((tag) => ({ params: { tag: encodeURI(tag) } }));
  console.log(tagPaths);

  return {
    paths: tagPaths,
    fallback: false,
  };
};

export default Tags;
