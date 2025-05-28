import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { ArrowLeft, BadgePlus, Ban, Check } from "lucide-react";
import { ProductEditForm } from "./product-edit";

export function ProductEditPage() {
  return (
    <>
      <div className="w-full max-w-[1100px] mx-auto">
        <header className="flex justify-between mt-2 mb-10">
          <div>
            <Button type="button" variant="link" className="mb-2 p-0">
              <Link to="/products" className="flex items-center gap-2">
                <ArrowLeft className="w-4" />
                <p className="action-sm">Voltar</p>
              </Link>
            </Button>
            <h1 className="title-md text-gray-500">Editar produto</h1>
            <span className="body-sm text-gray-300">
              Gerencie as informações do produto cadastrado
            </span>
          </div>

          <div className="flex items-end justify-end gap-4">
            <Button
              type="button"
              variant="link"
              className="flex items-center action-sm p-0 h-fit"
            >
              <Check className="h-4 w-4 mr-2" />
              Marcar como vendido
            </Button>
            {/* <Button
              type="button"
              variant="link"
              className="flex items-center action-sm p-0 h-fit"
            >
              <BadgePlus className="h-4 w-4 mr-2" />
              Marcar como disponível
            </Button> */}

            <Button
              type="button"
              variant="link"
              className="flex items-center action-sm p-0 h-fit"
            >
              <Ban className="h-4 w-4 mr-2" />
              Desativar anúncio
            </Button>
          </div>
        </header>
      </div>
      <ProductEditForm />
    </>
  );
}
