import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, UnavailableIcon } from "@hugeicons/core-free-icons";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export function ProductId() {
  return (
    <>
      <header className="flex items-end justify-between mx-40">
        <div>
          <Link to={"/products"}>
            <div>
              <span>Voltar</span>
            </div>
          </Link>
          <h1 className="title-md">Editar produto</h1>
          <span>Gerencie as informações do produto cadastrado</span>
        </div>
        <div>
          <Button variant={"link"}>
            <HugeiconsIcon
              className=""
              icon={Tick02Icon}
              size={20}
              strokeWidth={1}
            />
            <span className="action-sm">Marcar como vendido</span>
          </Button>
          <Button variant={"link"}>
            <HugeiconsIcon
              className=""
              icon={UnavailableIcon}
              size={20}
              strokeWidth={1}
            />
            <span className="action-sm">Desativar anúncio</span>
          </Button>
        </div>
      </header>

      {/* Imagem do produto */}
      <div className="flex gap-6 justify-center">
        <img
          className="rounded-[20px] w-[415px] h-[340px] object-cover"
          src="/product.jpg"
          alt=""
        />

        {/* Dados do produto */}
        <form className="bg-white p-6 rounded-[20px] items-start">
          <h2 className="text-gray-300 title-sm">Dados do produto</h2>
          <div className="flex">
            <div>
              <Label htmlFor="title" className="label-md text-gray-300">
                Título
              </Label>
              <Input id="title" type="text" placeholder="Nome do produto" />
            </div>
            <div>
              <Label htmlFor="price" className="label-md text-gray-300">
                Valor
              </Label>
              <Input id="price" type="number" placeholder="0,00" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
