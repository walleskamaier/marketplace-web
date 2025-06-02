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
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/get-profile";
import { Skeleton } from "./ui/skeleton";
import { AvatarImage } from "./avatar-image";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { signOut } from "../api/sign-out";

export function AccountMenu() {
  const navigate = useNavigate();

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    staleTime: 0,
  });

  const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      localStorage.removeItem("@rocketseat-marketplace/accessToken");
      navigate("/sign-in", { replace: true });
    },
  });

  async function handleSignOut() {
    toast.promise(signOutFn(), {
      loading: (
        <div className="flex w-full items-center justify-between">
          Deslogando...
        </div>
      ),
      success: "Deslogando com sucesso!",
      error: "Ocorreu um erro ao tentar deslogar.",
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center m-0 p-0" variant="link">
          {isLoadingProfile ? (
            <Skeleton className="h-12 w-12" />
          ) : (
            <AvatarImage avatar={profile?.seller.avatar} />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40 border-none p-4 mt-2 ">
        <DropdownMenuLabel className="flex items-center gap-2">
          {isLoadingProfile ? (
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          ) : (
            <div className="flex items-center">
              <AvatarImage avatar={profile?.seller.avatar} size="sm" />
              <span className="ml-3 h-auto w-full text-gray-300 body-sm">
                {profile?.seller.name || "Usuário"}
              </span>
            </div>
          )}
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-shape mx-2 my-4" />

        <DropdownMenuItem
          className="justify-between text-orange-base action-sm"
          disabled={isSigningOut}
        >
          <button
            className="w-full flex justify-between items-center hover:text-orange-dark cursor-pointer"
            onClick={handleSignOut}
          >
            <span>Sair</span>
            {isSigningOut ? (
              <Loader2 className="ml-auto h-4 w-4 animate-spin" />
            ) : (
              <HugeiconsIcon
                className="text-orange-base hover:text-orange-dark"
                icon={Logout01Icon}
                size={20}
                strokeWidth={1}
              />
            )}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
