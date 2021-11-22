import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PostList } from "@/components/PostList";
import { getCategories } from "@/api/getCategories";
import { getPosts } from "@/api/getPosts";
import { ParsedUrlQuery } from "querystring";

type Props = {
  posts: Post[];
};

const CategoryPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <PostList posts={posts}></PostList>
    </>
  );
};

type Params = {
  categoryId: string;
} & ParsedUrlQuery;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params) {
    return {
      props: {
        posts: [],
      },
    };
  }
  const posts = await getPosts({
    filters: `category[equals]${params.categoryId}`,
  });

  return {
    props: {
      posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const categories = await getCategories();
  const paths = categories.map((category) => ({
    params: {
      categoryId: category.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default CategoryPage;
