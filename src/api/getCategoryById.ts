import { microCmsApi } from "@/utils/microCmsApi";

type CategoryResponse = Category;

export const getCategoryById = async (id: string) => {
  const category = await microCmsApi<CategoryResponse>(
    `/categories/${id}`,
    "GET"
  );

  return category;
};
