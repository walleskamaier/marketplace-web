import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { NavLink } from "./nav-link";
import { AccountMenu } from "./account-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChartHistogramIcon,
  PackageFreeIcons,
} from "@hugeicons/core-free-icons";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <img className="w-14 mr-auto object-contain" src="/logo-icons.svg" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <HugeiconsIcon
              className="h-5 w-5"
              icon={ChartHistogramIcon}
              size={24}
              color=""
              strokeWidth={1}
            />
            Dashboard
          </NavLink>
          <NavLink to="/products">
            <HugeiconsIcon
              className="h-5 w-5"
              icon={PackageFreeIcons}
              size={24}
              color=""
              strokeWidth={1}
            />
            Produtos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button asChild className="w-40" type="submit" variant={"default"}>
            <Link to="/sign-up">Novo produto</Link>
          </Button>
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
