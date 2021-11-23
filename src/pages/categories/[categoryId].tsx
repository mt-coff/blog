import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PostList } from "@/components/PostList";
import { getCategories } from "@/api/getCategories";
import { getPosts } from "@/api/getPosts";
import { ParsedUrlQuery } from "querystring";
import { getCategoryById } from "@/api/getCategoryById";
import { Heading } from "@chakra-ui/react";

type Props = {
  categoryName: string;
  posts: Post[];
};

const CategoryPage: NextPage<Props> = ({ categoryName, posts }) => {
  return (
    <>
      <Heading as="h2" size="md" mb={4}>
        {categoryName}
      </Heading>
      <PostList posts={posts} />
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
        categoryName: "",
        posts: [],
      },
    };
  }
  const posts = await getPosts({
    filters: `category[equals]${params.categoryId}`,
  });
  const { name: categoryName } = await getCategoryById(params.categoryId);

  return {
    props: {
      categoryName,
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
