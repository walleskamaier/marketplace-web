import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AccessIcon,
  ArrowRight02Icon,
  Mail02Icon,
} from "@hugeicons/core-free-icons";

const signInForm = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Enviamos um link de autenticação para o seu e-mail", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data),
        },
      });
    } catch {
      toast.error("Credenciais inválidas");
    }
  }

  return (
    <div className="justify-between flex flex-col items-center h-full p-10">
      <div className="w-[563px] px-20 flex flex-col gap-6 mb-auto">
        {/* Cabeçalho do login */}
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-500 text-title-md tracking-tight font-bold">
            Acesse sua conta
          </h1>
          <p className="text-sm text-muted-foreground">
            Informe seu e-mail e senha para entrar
          </p>
        </div>

        {/* Formulário do login */}
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <div className="flex flex-col gap-5">
              <div className="">
                <Label htmlFor="email">E-MAIL</Label>
                <div className="text-gray-200 relative w-full">
                  <HugeiconsIcon
                    className="absolute top-1/2 left-3 -translate-y-1/2"
                    icon={Mail02Icon}
                    size={24}
                    strokeWidth={1}
                  />
                  <Input
                    className="pl-10"
                    id="email"
                    type="email"
                    placeholder="Seu e-mail cadastrado"
                    {...register("email")}
                  />
                </div>
              </div>
              <div className="">
                <Label htmlFor="password">SENHA</Label>
                <div className="relative w-full">
                  <HugeiconsIcon
                    className="text-gray-200 absolute top-1/2 left-3 -translate-y-1/2"
                    icon={AccessIcon}
                    size={24}
                    strokeWidth={1}
                  />
                  <Input
                    className="pl-10"
                    id="password"
                    type="password"
                    placeholder="Sua senha de acesso"
                    {...register("password")}
                  />
                </div>
              </div>
            </div>
            <Button
              disabled={isSubmitting}
              className="mt-12 flex h-14 w-full justify-between"
              type="submit"
            >
              <Link to="/">Acessar</Link>
              <HugeiconsIcon
                className=""
                icon={ArrowRight02Icon}
                size={24}
                strokeWidth={1}
              />
            </Button>
          </div>
        </form>
      </div>
      {/* Seção de sign-up */}
      <div className="flex flex-col w-[563px] px-20 gap-5">
        <span className="text-gray-300">Ainda não tem uma conta?</span>
        <Button
          className="flex h-14 w-full justify-between"
          type="submit"
          variant={"secondary"}
        >
          <Link to="/sign-up">Cadastrar</Link>
          <HugeiconsIcon
            className=""
            icon={ArrowRight02Icon}
            size={24}
            strokeWidth={1}
          />
        </Button>
      </div>
    </div>
  );
}

// Lembrar de colocar px-20 e ajustar py-18 (estender nas opções). Padding do formulário.
