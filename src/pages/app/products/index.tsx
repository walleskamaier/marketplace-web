import { ProductFilter } from "./product-filter";
import { ProductCard } from "./product-card";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProducts, GetProductsQuery } from "../../../api/get-products";
import { Skeleton } from "../../../components/ui/skeleton";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search");
  const status = searchParams.get("status");

  const { data: result, isLoading: isLoadingProducts } = useQuery({
    queryKey: ["products", search, status],
    queryFn: () =>
      getProducts({
        search,
        status:
          status === "all" ? null : (status as GetProductsQuery["status"]),
      }),
  });

  return (
    <div className="flex flex-col gap-10 px-32 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-foreground">Seus produtos</h1>
        <span className="text-gray-300">
          Acesse e gerencie a sua lista de produtos à venda
        </span>
      </div>
      <div className="gap-4 grid grid-cols-3">
        <aside className="items-start col-span-1 self-start">
          <ProductFilter />
        </aside>
        <div className="items-start col-span-2">
          <div className="gap-4 grid grid-cols-2">
            {!isLoadingProducts && result
              ? result.products.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })
              : Array.from({ length: 7 }).map((_, i) => {
                  return <Skeleton key={i} />;
                })}

            {Array.from({ length: 7 }).map((_, i) => {
              return (
                <Skeleton
                  key={i}
                  className="h-[240px] rounded-[20px] p-1 w-[calc(50%-16px)]"
                />
              );
            })}

            {!isLoadingProducts && !result?.products.length && (
              <h2 className="text-orange-base title-lg w-[60%] text-center m-auto">
                Você não tem nenhum produto cadastrado
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
