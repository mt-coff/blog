import { List, Text, Icon } from "@chakra-ui/react";
import { PostListItem } from "../PostListItem";
import { MdInfo } from "react-icons/md";

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  return posts && posts.length > 0 ? (
    <List>
      {posts.map((post) => (
        <PostListItem post={post} key={post.id} />
      ))}
    </List>
  ) : (
    <Text display="flex" alignItems="center">
      <Icon as={MdInfo} mr={1} />
      記事が見つかりませんでした
    </Text>
  );
};
