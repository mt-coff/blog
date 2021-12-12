import { formatDate } from "@/utils/formatDate";
import { Flex, Heading, Text, Icon, Link } from "@chakra-ui/react";
import { VFC } from "react";
import { MdEditCalendar, MdFolder } from "react-icons/md";
import NextLink from "next/link";

type Props = {
  title: string;
  created: string;
  category?: string;
};

export const TitleDescription: VFC<Props> = ({
  title,
  created,
  category = "未分類",
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
          {formatDate(created)}
        </Text>
        <NextLink href={`/categories/${category}`}>
          <Link fontSize="sm" _hover={{ textDecor: "none" }}>
            <Icon as={MdFolder} mr={1} />
            {category}
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};
