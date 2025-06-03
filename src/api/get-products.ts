import { api } from "../lib/axios";

export interface GetProductsQuery {
  status: "available" | "sold" | "cancelled" | null;
  search: string | null;
}

export interface GetProductsResponse {
  products: {
    id: string;
    title: string;
    description: string;
    priceInCents: number;
    status: "available" | "sold" | "cancelled";
    owner: {
      id: string;
      name: string;
      phone: string;
      email: string;
      avatar: {
        id: string;
        url: string;
      };
    };
    category: {
      id: string;
      title: string;
      slug: string;
    };
    attachments: {
      id: string;
      url: string;
    }[];
  }[];
}

export async function getProducts({ search, status }: GetProductsQuery) {
  const response = await api.get<GetProductsResponse>("/products/me", {
    params: {
      search,
      status,
    },
  });
  console.log("Products data:", response.data);
  return response.data;
}
