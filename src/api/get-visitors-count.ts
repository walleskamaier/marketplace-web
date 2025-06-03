import { api } from "../lib/axios";

export interface GetVisitorsCountResponse {
  amount: number;
}

export async function getVisitorsCount() {
  const response = await api.get<GetVisitorsCountResponse>(
    "/sellers/metrics/views",
  );
  console.log("Visitors count data:", response.data);
  return response.data;
}
