import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export function ProductFilter() {
  return (
    <aside className="flex flex-col gap-6 bg-white p-6 rounded-[20px]">
      <span className="">Filtrar</span>

      <form className="flex flex-col gap-4">
        <Input placeholder="Pesquisar" type="text" />
        <Select defaultValue="all">
          <SelectTrigger className="h-8 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os status</SelectItem>
            <SelectItem value="available">Anunciado</SelectItem>
            <SelectItem value="sold">Vendido</SelectItem>
            <SelectItem value="cancelled">Desativado</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">Aplicar filtro</Button>
      </form>
    </aside>
  );
}
