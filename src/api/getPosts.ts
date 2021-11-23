import { microCmsApi } from "@/utils/microCmsApi";

type PostResponse = {
  contents: Post[];
};

export const getPosts = async ({
  limit = 100,
  filters,
}: {
  limit?: number;
  filters?: string;
}) => {
  const params = new URLSearchParams({
    limit: limit.toString(),
    orders: "-publishedAt",
  });
  if (filters) {
    params.append("filters", filters);
  }
  const { contents } = await microCmsApi<PostResponse>(
    `/posts?${params.toString()}`,
    "GET"
  );

  return contents;
};
