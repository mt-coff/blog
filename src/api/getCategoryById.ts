import { microCmsApi } from "@/utils/microCmsApi";

type CategoriesResponse = Category;

export const getCategoryById = async (id: string) => {
  const category = await microCmsApi<CategoriesResponse>(
    `/categories/${id}`,
    "GET"
  );

  return category;
};
