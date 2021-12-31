import {
  Link,
  ListItem,
  Icon,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { VFC } from "react";
import { MdFolder } from "react-icons/md";

type Props = {
  categories: string[];
};
export const CategoryList: VFC<Props> = ({ categories }) => {
  return (
    <VStack>
      <Text fontWeight="bold">カテゴリー</Text>
      <UnorderedList w="full">
        {categories?.map((category: string) => {
          return (
            <ListItem
              key={category}
              listStyleType="none"
              textAlign="left"
              mx={4}
              borderBottom="solid 1px"
              borderColor="gray.200"
            >
              <NextLink href={`/categories/${category}`}>
                <Link
                  display="flex"
                  alignItems="center"
                  p={1}
                  my={1}
                  borderRadius="md"
                  _hover={{ textDecor: "none", bg: "gray.300" }}
                >
                  <Icon as={MdFolder} mr={1} />
                  {category}
                </Link>
              </NextLink>
            </ListItem>
          );
        })}
      </UnorderedList>
    </VStack>
  );
};
