import { ProductFilter } from "./product-filter";
import { ProductCard } from "../../../components/product-card";

export function Products() {
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
            {Array.from({ length: 7 }).map((_, i) => {
              return <ProductCard key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
