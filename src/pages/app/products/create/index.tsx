import { useQuery } from "@tanstack/react-query";
import { ProductCreateForm } from "./product-create";
import { getCategories } from "../../../../api/get-categories";



export function ProductCreatePage() {
  const { data: categoryData } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  })

  return (
    <>
      <div className="w-full max-w-[1100px] mx-auto">
        <header className="flex justify-between mt-10 mb-10">
          <div>
            <h1 className="title-md text-gray-500 mb-2">Novo produto</h1>
            <span className="body-sm text-gray-300">
              Cadastre um produto para venda no marketplace
            </span>
          </div>
        </header>
      </div>
      <ProductCreateForm />
    </>
  );
}
