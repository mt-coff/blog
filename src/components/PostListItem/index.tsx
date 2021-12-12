import { Box, Flex, Heading, Icon, Link, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { MdEditCalendar, MdFolder } from "react-icons/md";
import NextLink from "next/link";
import { formatDate } from "@/utils/formatDate";

type Props = {
  post: Post;
};

export const PostListItem = ({ post }: Props) => {
  const { tags, title, created, category, filename } = post;

  return (
    <Box borderBottom="solid 1px" borderColor="gray.200" p="2" mb="4">
      <Heading as="h2" size="lg" mb={4}>
        <NextLink href={`/posts/${filename}`}>
          <Link _hover={{ textDecor: "none" }}>{title}</Link>
        </NextLink>
      </Heading>
      <Flex direction="row" justify="space-between" alignItems="center">
        <Flex direction="row" alignItems="flex-end" padding={1}>
          <Text fontSize="xs">
            <Icon as={MdEditCalendar} mr={1} />
            {formatDate(created)}
          </Text>
          <NextLink href={`/categories/${category || "未分類"}`}>
            <Link fontSize="xs" _hover={{ textDecor: "none" }}>
              <Icon as={MdFolder} ml={2} mr={1} />
              {category || "未分類"}
            </Link>
          </NextLink>
        </Flex>
        <Flex direction="row" alignItems="flex-end" padding={1}>
          {tags?.map((tag) => (
            <NextLink href={`/tags/${tag}`} key={tag}>
              <Link _hover={{ textDecor: "none" }}>
                <Tag mr="1" size="sm">
                  {tag}
                </Tag>
              </Link>
            </NextLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
