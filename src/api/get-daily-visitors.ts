import { api } from "../lib/axios";

export interface GetDailyVisitorsResponse {
  viewsPerDay: {
    date: string;
    amount: number;
  }[];
}

export async function getDailyVisitors() {
  const response = await api.get<GetDailyVisitorsResponse>(
    "/sellers/metrics/views/days",
  );
  console.log("Daily visitors data:", response.data);
  return response.data;
}
