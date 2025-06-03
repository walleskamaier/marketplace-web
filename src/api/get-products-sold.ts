import { api } from "../lib/axios";

export interface GetProductsSoldResponse {
  amount: number;
}

export async function getProductsSold() {
  const response = await api.get<GetProductsSoldResponse>(
    "/sellers/metrics/products/sold",
  );
  console.log("Products sold data:", response.data);
  return response.data;
}
