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

// Dados fictícios para o gráfico
const data = [
  { date: "2024-12-10", amount: 354 },
  { date: "2024-12-11", amount: 200 },
  { date: "2024-12-12", amount: 945 },
  { date: "2024-12-13", amount: 352 },
  { date: "2024-12-14", amount: 874 },
  { date: "2024-12-15", amount: 577 },
  { date: "2024-12-16", amount: 1456 },
];

export function DailyVisitorsChart() {
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
        <ResponsiveContainer width="100%" height={240}>
          <LineChart
            data={data}
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
            <Tooltip />
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
      </CardContent>
    </Card>
  );
}
