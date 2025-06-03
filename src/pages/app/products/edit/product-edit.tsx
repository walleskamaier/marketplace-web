import { ImageUp } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Button } from "../../../../components/ui/button";
import { Textarea } from "../../../../components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { TagStatus } from "../tag-status";
import { GetCategoriesResponse } from "../../../../api/get-categories"
import { useQueryClient } from "@tanstack/react-query";

interface ProductEditFormProps {
  // product: GetProductResponse["product"];
  categories: GetCategoriesResponse["categories"];
}

export function ProductEditForm({ categories }: ProductEditFormProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient()

  

  return (
    <form className="flex gap-6">
      <Label
        htmlFor="productImage"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1743535681049-512db5983e73?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
        className="group max-h-[340px] w-full max-w-[415px] rounded-[20px] bg-center bg-cover hover:cursor-pointer transition-all relative"
      >
        <div className="flex flex-col items-center justify-center w-full h-full bg-transparent text-transparent rounded-[20px] group-hover:bg-black group-hover:bg-opacity-20 group-hover:text-white">
          <ImageUp className="h-10 w-10 mb-4" strokeWidth={1.5} />
          <p className="text-body-sm text-center max-w-[150px] normal-case font-normal">
            Selecione a imagem do produto
          </p>
        </div>
        <Input type="file" id="productImage" className="hidden" />
      </Label>

      <div className="bg-white p-6 rounded-[20px] flex-1">
        <div className="flex items-center mb-6 justify-between">
          <h3 className="text-gray-300 title-sm">Dados do produto</h3>
          <TagStatus status={product} />
        </div>

        <div className="">
          <div className="flex gap-4 mb-5">
            <div className="w-full">
              <Label htmlFor="title" className="label-md text-gray-300">
                Título
              </Label>
              <Input id="title" type="text" placeholder="Nome do produto" />
            </div>
            <div className="relative">
              <Label htmlFor="price" className="label-md text-gray-300">
                Valor
              </Label>
              <Input
                id="price"
                type="number"
                placeholder="0,00"
                className="pl-6"
              />
              <span className="absolute top-[50%] text-orange-base">R$</span>
            </div>
          </div>

          <Label htmlFor="description" className="label-md text-gray-300">
            Descrição
          </Label>
          <Textarea
            id="description"
            className="rezise-none mb-5"
            placeholder="Descreva aqui características do seu produto"
          />

          <Label htmlFor="category" className="label-md text-gray-300">
            Categoria
          </Label>
          <Select>
            <SelectTrigger className="h-8 w-full">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Eletrônicos</SelectItem>
              <SelectItem value="sold">Roupas</SelectItem>
              <SelectItem value="cancelled">Acessórios</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-4 mt-10">
            <Button
              className=""
              type="button"
              variant="secondary"
              onClick={() => navigate("/products")}
            >
              Cancelar
            </Button>
            <Button className="" type="submit">
              Salvar e atualizar
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
