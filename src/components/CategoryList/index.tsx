import categories from "@/data/categories.json";
import {
  Link,
  ListItem,
  Icon,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MdFolder } from "react-icons/md";

export const CategoryList = () => {
  return (
    <VStack>
      <Text fontWeight="bold">カテゴリー</Text>
      <UnorderedList w="full">
        {categories?.map((category) => {
          return (
            <ListItem
              key={category.id}
              listStyleType="none"
              textAlign="left"
              mx={4}
              borderBottom="solid 1px"
              borderColor="gray.200"
            >
              <NextLink href={`/categories/${category.id}`}>
                <Link
                  display="flex"
                  alignItems="center"
                  p={1}
                  my={1}
                  borderRadius="md"
                  _hover={{ textDecor: "none", bg: "gray.300" }}
                >
                  <Icon as={MdFolder} mr={1} />
                  {category.name}
                </Link>
              </NextLink>
            </ListItem>
          );
        })}
      </UnorderedList>
    </VStack>
  );
};
