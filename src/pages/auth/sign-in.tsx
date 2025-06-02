import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AccessIcon,
  ArrowRight02Icon,
  Mail02Icon,
} from "@hugeicons/core-free-icons";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../api/sign-in";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const [searchParams] = useSearchParams()

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get("email") ?? "",
    },
    resolver: zodResolver(signInForm),
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInForm) {
    console.log("Dados enviados para login:", data);

    try {
      const { accessToken } = await authenticate(data);

      toast.success("Usuário autenticado com sucesso!");
      localStorage.setItem("@rocketseat-marketplace/accessToken", accessToken);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Credenciais inválidas.");
    }
  }

  return (
    <div className="justify-between flex flex-col items-center h-full p-10">
      <div className="w-[563px] px-20 flex flex-col gap-6 mb-auto">
        {/* Cabeçalho do login */}
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-500 title-md">Acesse sua conta</h1>
          <p className="text-gray-300 body-sm">
            Informe seu e-mail e senha para entrar
          </p>
        </div>

        {/* Formulário do login */}
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <div className="flex flex-col gap-5">
              <div>
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
                    placeholder="Seu e-mail cadastrado"
                    {...register("email")}
                  />
                </div>
              </div>
              <div className="">
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
            </div>
            <Button
              disabled={isSubmitting}
              className="mt-12 mb-20 flex h-14 w-full justify-between"
              type="submit"
            >
              Acessar
              <HugeiconsIcon
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
          <HugeiconsIcon icon={ArrowRight02Icon} size={24} strokeWidth={1} />
        </Button>
      </div>
    </div>
  );
}
