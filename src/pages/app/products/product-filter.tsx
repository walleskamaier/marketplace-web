import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { HugeiconsIcon } from "@hugeicons/react";
import { SaleTag02Icon, Search01Icon } from "@hugeicons/core-free-icons";

export function ProductFilter() {
  return (
    <aside className="flex flex-col gap-6 bg-white p-6 rounded-[20px]">
      <span className="text-gray-300 title-sm">Filtrar</span>

      <form className="flex flex-col gap-4">
        <div className="relative w-full text-gray-200 ">
          <HugeiconsIcon
            className="absolute top-1/2 left-3 -translate-y-1/2 "
            icon={Search01Icon}
            size={24}
            strokeWidth={1}
          />
          <Input className="pl-10" placeholder="Pesquisar" type="text" />
        </div>
        <Select>
          <SelectTrigger className="h-8 w-full flex pl-10 relative text-gray-200">
            <HugeiconsIcon
              className="absolute top-1/2 left-3 -translate-y-1/2"
              icon={SaleTag02Icon}
              size={24}
              strokeWidth={1}
            />

            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="available">Anunciado</SelectItem>
            <SelectItem value="sold">Vendido</SelectItem>
            <SelectItem value="cancelled">Cancelado</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="action-md mt-10">
          Aplicar filtro
        </Button>
      </form>
    </aside>
  );
}
