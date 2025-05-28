import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { NavLink } from "./nav-link";
import { AccountMenu } from "./account-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChartHistogramIcon,
  PackageFreeIcons,
} from "@hugeicons/core-free-icons";
import { Plus } from "lucide-react";

export function Header() {
  return (
    <div className="border-b border-shape">
      <div className="flex h-20 items-center gap-6 px-6">
        <img className="w-14 mr-auto object-contain" src="/logo-icons.svg" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <HugeiconsIcon
              icon={ChartHistogramIcon}
              size={20}
              strokeWidth={1}
            />
            Dashboard
          </NavLink>
          <NavLink to="/products">
            <HugeiconsIcon icon={PackageFreeIcons} size={20} strokeWidth={1} />
            Produtos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <Link to="/products/create">
            <Button className="w-40" type="button" variant={"default"}>
              <Plus className="w-4 h-4" />
              <span className="action-sm">Novo produto</span>
            </Button>
          </Link>
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
