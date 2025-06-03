import { UsersRound } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import { getVisitorsCount } from "../../../api/get-visitors-count";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../../../components/ui/skeleton";

export function VisitorsCountCard() {
  const { data: visitorsCount } = useQuery({
    queryKey: ["metrics", "views"],
    queryFn: getVisitorsCount,
  });

  return (
    <Card className="rounded-[20px] flex p-3">
      <CardContent className="flex items-center gap-4 p-0">
        <div className="flex bg-blue-light items-center justify-center w-[80px] h-[86px] rounded-[12px]">
          <UsersRound className="text-gray-300 w-9 h-9" />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          {visitorsCount ? (
            <>
              <h3 className="title-lg text-gray-400">
                {visitorsCount?.amount}
              </h3>
              <p className="body-xs text-gray-300 w-1">Pessoas visitantes</p>
            </>
          ) : (
            <>
              <Skeleton className="h-8 w-9" />
              <Skeleton className="h-6 w-16" />
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
