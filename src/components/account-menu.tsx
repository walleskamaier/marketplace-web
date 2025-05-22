import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import { Logout01Icon } from "@hugeicons/core-free-icons";

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center" variant={"ghost"}>
          <img className="" src="/profile.png" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuLabel className="flex gap-2">
          <img className="w-8 object-contain" src="/profile.png" />
          <span className="h-auto w-full text-muted-foreground">
            Walleska Maier
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-between text-accent-foreground">
          <Link to={"/sign-in"} className="">
            <span>Sair</span>
          </Link>
          <HugeiconsIcon
            className="h-4 w-4 text-accent-foreground"
            icon={Logout01Icon}
            size={24}
            strokeWidth={1}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
