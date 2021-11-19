import { List } from "@chakra-ui/react";
import { PostListItem } from "../PostListItem";

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  return (
    <List>
      {posts.map((post) => (
        <PostListItem post={post} key={post.id} />
      ))}
    </List>
  );
};
