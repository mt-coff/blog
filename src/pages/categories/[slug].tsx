import { CommonLayout } from "@/components/CommonLayout";
import { PostList } from "@/components/PostList";
import { getAllCategories, getAllPosts } from "@/utils/mdxUtils";
import { Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

type Props = {
  category: string;
  posts: Post[];
  categories: string[];
};

const CategoryPage: NextPage<Props> = ({ category, posts, categories }) => {
  return (
    <CommonLayout categories={categories}>
      <Heading as="h2" size="md" mb={4}>
        {category}
      </Heading>
      <PostList posts={posts} />
    </CommonLayout>
  );
};

type Params = {
  slug: string;
} & ParsedUrlQuery;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const categories = getAllCategories();
  if (!params) {
    return {
      props: {
        category: "",
        posts: [],
        categories,
      },
    };
  }
  const category = params.slug;
  const posts = getAllPosts().filter((post) => {
    if (category === "未分類" && post.category === "") {
      return true;
    }
    return post.category === category;
  });

  return {
    props: {
      category,
      posts,
      categories,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const categories = await getAllCategories();

  const paths = categories.map((category) => ({
    params: {
      slug: category,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default CategoryPage;
