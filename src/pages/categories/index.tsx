import { Meta } from "@/components/Meta";
import { getAllCategories } from "@/utils/mdxUtils";
import { Icon, Link, Tag } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import NextLink from "next/link";
import { MdFolder } from "react-icons/md";

type Props = {
  categories: string[];
};

const CategoryListPage: NextPage<Props> = ({ categories }) => {
  return (
    <>
      <Meta />
      {categories?.map((category) => (
        <Tag key={category} mr={2} mb={2}>
          <NextLink href={`/categories/${category}`}>
            <Link _hover={{ textDecorationLine: "none" }}>
              <Icon as={MdFolder} mr={1} />
              {category}
            </Link>
          </NextLink>
        </Tag>
      ))}
      <Tag mr={2} mb={2}>
        <NextLink href={"/categories/未分類"}>
          <Link _hover={{ textDecorationLine: "none" }}>
            <Icon as={MdFolder} mr={1} />
            未分類
          </Link>
        </NextLink>
      </Tag>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getAllCategories();

  return {
    props: {
      categories,
    },
  };
};

export default CategoryListPage;
