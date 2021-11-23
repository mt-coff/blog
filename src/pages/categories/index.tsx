import { NextPage } from "next";
import categories from "@/data/categories.json";
import { Link, Tag, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { MdFolder } from "react-icons/md";

const CategoryListPage: NextPage = () => {
  return (
    <>
      {categories.map((category) => (
        <Tag key={category.id} mr={2} mb={2}>
          <NextLink href={`/categories/${category.id}`}>
            <Link _hover={{ textDecorationLine: "none" }}>
              <Icon as={MdFolder} mr={1} />
              {category.name}
            </Link>
          </NextLink>
        </Tag>
      ))}
    </>
  );
};

export default CategoryListPage;
