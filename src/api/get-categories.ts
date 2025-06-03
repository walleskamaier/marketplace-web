import { api } from "../lib/axios";

export interface GetCategoriesResponse {
  categories: {
    id: string;
    title: string;
    slug: string;
  }[];
}

export async function getCategories() {
  const response = await api.get<GetCategoriesResponse>("/categories");
  console.log("Get categories data:", response.data);
  return response.data;
}
