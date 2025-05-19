import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { HugeiconsIcon } from "@hugeicons/react";
import { AccessIcon, Mail02Icon } from "@hugeicons/core-free-icons";
import { Link, useNavigate } from "react-router-dom";

const signUpForm = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Conta criada com sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch {
      toast.error("Erro ao cadastrar conta.");
    }
  }

  return (
    <div className="justify-between flex flex-col items-center h-full p-10">
      <div className="w-[563px] px-20 flex flex-col gap-6">
        {/* Cabeçalho do login */}
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Crie sua conta
          </h1>
          <p className="text-sm text-muted-foreground">
            Informe os seus dados pessoais e de acesso
          </p>
        </div>

        {/* Formulário do login */}
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div className="space-y-2">
            <span>Perfil</span>
            <Input type="file" />
            {/* Nome */}
            <Label htmlFor="name">NOME</Label>
            <div className="relative w-full">
              <HugeiconsIcon
                className="absolute top-1/2 left-3 -translate-y-1/2"
                icon={AccessIcon}
                size={24}
                color="#adadad"
                strokeWidth={1}
              />
              <Input
                className="pl-10"
                id="name"
                type="text"
                placeholder="Seu nome completo"
                {...register("name")}
              />
            </div>

            {/* Telefone */}
            <Label htmlFor="phone">TELEFONE</Label>
            <div className="relative w-full">
              <HugeiconsIcon
                className="absolute top-1/2 left-3 -translate-y-1/2"
                icon={AccessIcon}
                size={24}
                color="#adadad"
                strokeWidth={1}
              />
              <Input
                className="pl-10"
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                {...register("phone")}
              />
            </div>

            {/* Email */}
            <Label htmlFor="email">E-MAIL</Label>
            <div className="relative w-full">
              <HugeiconsIcon
                className="absolute top-1/2 left-3 -translate-y-1/2"
                icon={Mail02Icon}
                size={24}
                color="#adadad"
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

            {/* Senha */}
            <Label htmlFor="password">SENHA</Label>
            <div className="relative w-full">
              <HugeiconsIcon
                className="absolute top-1/2 left-3 -translate-y-1/2"
                icon={AccessIcon}
                size={24}
                color="#adadad"
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
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
      {/* Seção de sign-in */}
      <div className="w-[563px] px-20">
        <span>Já tem uma conta?</span>
        <Button asChild className="w-full" type="submit" variant={"secondary"}>
          <Link to="/sign-in">Acessar</Link>
        </Button>
      </div>
    </div>
  );
}

// Lembrar de colocar px-20 e ajustar py-18 (estender nas opções). Padding do formulário.
