import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AccessIcon,
  CallIcon,
  Mail02Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ImageUp } from "lucide-react";

const signUpForm = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
  passwordConfirmation: z.string().min(6),
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
    <div className="justify-between flex flex-col items-center h-full">
      <div className="w-[563px] px-20 flex flex-col gap-6">
        {/* Cabeçalho do login */}
        <div className="flex flex-col gap-2 text-center">
          <h1 className="title-md text-gray-500 mb-2">Crie sua conta</h1>
          <p className="body-sm text-gray-300">
            Informe os seus dados pessoais e de acesso
          </p>
        </div>

        {/* Formulário do login */}
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          {/* Foto de perfil */}
          <div className="flex flex-col">
            <h2 className="title-sm text-gray-500 mb-5">Perfil</h2>
            <Label
              htmlFor="avatar"
              className="z-0 group w-[120px] h-[120px] rounded-[20px] bg-center bg-cover hover:cursor-pointer transition-all relative"
            >
              <div className="-z-10 absolute flex flex-col items-center justify-center w-full h-full bg-shape text-gray-300 rounded-[20px]">
                <ImageUp
                  className="h-8 w-8 text-orange-base"
                  strokeWidth={1.5}
                />
              </div>
              <Input type="file" id="avatar" name="" className="hidden" />
            </Label>

            {/* Nome */}
            <Label htmlFor="name" className="mt-5">
              Nome
            </Label>
            <div className="text-gray-200 relative w-full">
              <HugeiconsIcon
                className="absolute top-1/2 left-3 -translate-y-1/2"
                icon={UserIcon}
                size={24}
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
            <Label htmlFor="phone" className="mt-5">
              Telefone
            </Label>
            <div className="text-gray-200 relative w-full">
              <HugeiconsIcon
                className="absolute top-1/2 left-3 -translate-y-1/2"
                icon={CallIcon}
                size={24}
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

            <div className="my-12 gap-5 flex flex-col">
              <h2 className="text-gray-500 title-sm">Acesso</h2>

              {/* Email */}
              <div className="">
                <Label htmlFor="email">E-mail</Label>
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
                    placeholder="Seu e-mail de acesso"
                    {...register("email")}
                  />
                </div>
              </div>

              {/* Senha */}
              <div>
                <Label htmlFor="password">Senha</Label>
                <div className="text-gray-200 relative w-full">
                  <HugeiconsIcon
                    className="absolute top-1/2 left-3 -translate-y-1/2"
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

              {/* Confirmar senha */}
              <div className="">
                <Label htmlFor="password">Confirmar senha</Label>
                <div className="text-gray-200 relative w-full">
                  <HugeiconsIcon
                    className="absolute top-1/2 left-3 -translate-y-1/2"
                    icon={AccessIcon}
                    size={24}
                    strokeWidth={1}
                  />
                  <Input
                    className="pl-10"
                    id="confirm-password"
                    type="password"
                    placeholder="Confirme sua senha"
                    {...register("passwordConfirmation")}
                  />
                </div>
              </div>
            </div>
            <Button
              disabled={isSubmitting}
              className="w-full h-14 flex justify-between mb-20"
              type="submit"
            >
              Cadastrar
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </div>
      {/* Seção de sign-in */}
      <div className="flex flex-col gap-5 w-[563px] px-20">
        <span>Já tem uma conta?</span>
        <Button
          asChild
          className="flex h-14 w-full justify-between"
          type="submit"
          variant={"secondary"}
        >
          <Link to="/sign-in">
            Acessar
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
