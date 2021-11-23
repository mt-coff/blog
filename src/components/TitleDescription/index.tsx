import { formatDate } from "@/utils/formatDate";
import { Flex, Heading, Text, Icon, Link } from "@chakra-ui/react";
import { VFC } from "react";
import { MdEditCalendar, MdFolder } from "react-icons/md";
import NextLink from "next/link";

type Props = {
  title: string;
  publishedAt: string;
  category: Category;
};

export const TitleDescription: VFC<Props> = ({
  title,
  publishedAt,
  category,
}) => {
  return (
    <Flex
      direction="column"
      mb={4}
      pb={4}
      borderBottom="solid 1px"
      borderColor="gray.200"
    >
      <Heading mb={4}>{title}</Heading>
      <Flex direction="row">
        <Text fontSize="sm" mr={2}>
          <Icon as={MdEditCalendar} mr={1} />
          {formatDate(publishedAt)}
        </Text>
        <NextLink href={`/categories/${category.id}`}>
          <Link fontSize="sm" _hover={{ textDecor: "none" }}>
            <Icon as={MdFolder} mr={1} />
            {category.name}
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};
