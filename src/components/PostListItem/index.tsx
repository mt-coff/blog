import { Box, Flex, Heading, Icon, Tag, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import { MdEditCalendar, MdFolder } from "react-icons/md";

type Props = {
  post: Post;
};

export const PostListItem = ({ post }: Props) => {
  const { id, tags, title, publishedAt } = post;
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "yyyy/MM/dd");
  };

  return (
    <Box borderBottom="solid 1px" borderColor="gray.200" p="2" mb="4">
      <Heading as="h2" size="lg" mb="4">
        {title}
      </Heading>
      <Flex direction="row" justify="space-between" alignItems="center">
        <Flex direction="row" alignItems="flex-end" padding={1}>
          <Icon as={MdEditCalendar} mr={1} />
          <Text fontSize="xs">{formatDate(publishedAt)}</Text>
          <Icon as={MdFolder} ml={2} mr={1} />
          <Text fontSize="xs">Category</Text>
        </Flex>
        <Flex direction="row" alignItems="flex-end" padding={1}>
          {tags?.map((tag) => (
            <Tag mr="1" size="sm" key={tag}>
              {tag}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
