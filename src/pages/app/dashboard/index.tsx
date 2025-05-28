import { AdvertisedProductsCard } from "./advertised-products-card";
import { DailyVisitorsChart } from "./daily-visitors-chart";
import { SoldProductsCard } from "./sold-products-card";
import { VisitorsCountCard } from "./visitors-count-card";

export function Dashboard() {
  return (
    <div className="w-full max-w-[1100px] mx-auto">
      <header className="mt-10 mb-10">
        <h1 className="title-md text-gray-500 mb-2">Últimos 30 dias</h1>
        <p className="body-sm text-gray-300">
          Confira as estatísticas da sua loja no último mês
        </p>
      </header>

      <div className="grid grid-cols-4 grid-rows-1 gap-6">
        <div className="flex flex-col col-span-1 gap-[15px]">
          <SoldProductsCard />
          <AdvertisedProductsCard />
          <VisitorsCountCard />
        </div>
        <div className="col-span-3">
          <DailyVisitorsChart />
        </div>
      </div>
    </div>
  );
}
