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
        <Button className="flex items-center m-0 p-0" variant="link">
          <img className="" src="/profile.png" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 border-none p-4 mt-2 ">
        <DropdownMenuLabel className="flex items-center gap-2">
          <img className="w-8 object-contain" src="/profile.png" />
          <span className="h-auto w-full text-gray-300 body-sm">
            Walleska Maier
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-shape mx-2 my-4" />
        <DropdownMenuItem className="justify-between text-orange-base action-sm">
          <button className="w-full flex justify-between items-center hover:text-orange-dark cursor-pointer">
            <span>Sair</span>
            <HugeiconsIcon
              className="text-orange-base hover:text-orange-dark"
              icon={Logout01Icon}
              size={20}
              strokeWidth={1}
            />
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
