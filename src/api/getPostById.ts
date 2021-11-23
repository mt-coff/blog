import { microCmsApi } from "@/utils/microCmsApi";

type PostResponse = Post;

export const getPostById = async (id: string) => {
  const post = await microCmsApi<PostResponse>(`/posts/${id}`, "GET");

  return post;
};
