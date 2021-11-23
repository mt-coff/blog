import { Box, Flex, Heading, Icon, Link, Tag, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import { MdEditCalendar, MdFolder } from "react-icons/md";
import NextLink from "next/link";

type Props = {
  post: Post;
};

export const PostListItem = ({ post }: Props) => {
  const { id, tags, title, publishedAt, category } = post;
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "yyyy/MM/dd");
  };

  return (
    <Box borderBottom="solid 1px" borderColor="gray.200" p="2" mb="4">
      <Heading as="h2" size="lg" mb="4">
        <NextLink href={`/posts/${id}`}>
          <Link _hover={{ textDecor: "none" }}>{title}</Link>
        </NextLink>
      </Heading>
      <Flex direction="row" justify="space-between" alignItems="center">
        <Flex direction="row" alignItems="flex-end" padding={1}>
          <Icon as={MdEditCalendar} mr={1} />
          <Text fontSize="xs">{formatDate(publishedAt)}</Text>
          <NextLink href={`/categories/${category.id}`}>
            <Link fontSize="xs" _hover={{ textDecor: "none" }}>
              <Icon as={MdFolder} ml={2} mr={1} />
              {category.name}
            </Link>
          </NextLink>
        </Flex>
        <Flex direction="row" alignItems="flex-end" padding={1}>
          {tags?.map((tag) => (
            <NextLink href={`/tags/${tag.id}`} key={tag.id}>
              <Link _hover={{ textDecor: "none" }}>
                <Tag mr="1" size="sm">
                  {tag.name}
                </Tag>
              </Link>
            </NextLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
