import { format, subDays } from "date-fns";
import colors from "tailwindcss/colors";
import { DateRange } from "react-day-picker";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";
import { DatePickerWithRange } from "../../../components/ui/date-range-picker";
import { DailyVisitorsChartTooltip } from "./daily-visitors-chart-tooltip";
import { useQuery } from "@tanstack/react-query";
import { getDailyVisitors } from "../../../api/get-daily-visitors";
import { Loader, Loader2 } from "lucide-react";

export function DailyVisitorsChart() {
  const { data: dailyVisitors } = useQuery({
    queryKey: ["metrics", "views", "days"],
    queryFn: getDailyVisitors,
  });

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });

  return (
    <Card className="h-full rounded-[20px]">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <CardTitle className="text-gray-500 title-sm">Visitantes</CardTitle>
        <DatePickerWithRange date={dateRange} onDateChange={setDateRange} />
      </CardHeader>

      <CardContent>
        {dailyVisitors ? (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart
              data={dailyVisitors?.viewsPerDay}
              style={{ fontSize: 12 }}
              margin={{ top: 20, right: 10, left: 10, bottom: 10 }}
            >
              <XAxis
                dataKey="date"
                stroke="#888"
                axisLine={false}
                tickLine={false}
                dy={16}
                tickFormatter={(value) => format(new Date(value), "dd")}
              />
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                dx={-4}
                width={30}
              />
              <CartesianGrid
                vertical={false}
                strokeDasharray="10 12"
                stroke={colors.gray[200]}
              />
              <Tooltip content={<DailyVisitorsChartTooltip />} />
              <Line
                type="natural"
                strokeWidth={2}
                dataKey="amount"
                stroke="#5ec5fd"
                dot={false}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-gray-200" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
