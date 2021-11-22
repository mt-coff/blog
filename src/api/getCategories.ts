import { microCmsApi } from "@/utils/microCmsApi";

type CategoriesResponse = {
  contents: Category[];
};

export const getCategories = async (limit = 100) => {
  const { contents } = await microCmsApi<CategoriesResponse>(
    `/categories?limit=${limit}`,
    "GET"
  );

  return contents;
};
