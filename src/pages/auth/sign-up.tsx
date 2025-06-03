import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { registerSeller } from "../../api/register-seller";

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
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const SignUpForm = z
  .object({
    avatar: z
      .custom<FileList>()
      .refine((files) => files?.length, "A foto de perfil é obrigatória.")
      .refine(
        (files) => files && files[0]?.size <= MAX_FILE_SIZE,
        `O tamanho máximo da imagem é de 5MB.`,
      )
      .refine(
        (files) => files && ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
        "Apenas os formatos .jpg, .jpeg, .png e .webp são suportados.",
      ),
    name: z.string().min(1, "O nome é obrigatório."),
    phone: z.string().min(10, "O telefone é obrigatório."),
    email: z.string().email(),
    password: z.string().min(6),
    passwordConfirmation: z.string().min(6),
  })
  .refine((schema) => schema.password === schema.passwordConfirmation, {
    message: "As senhas não são iguais!",
    path: ["passwordConfirmation"],
  });

type SignUpForm = z.infer<typeof SignUpForm>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting: isRegistering },
  } = useForm<SignUpForm>({
    resolver: zodResolver(SignUpForm),
  });

  const { mutateAsync: registerNewSeller } = useMutation({
    mutationFn: registerSeller,
  });

  async function handleSignUp({
    avatar,
    email,
    name,
    phone,
    password,
    passwordConfirmation,
  }: SignUpForm) {
    try {
      const avatarFile = avatar[0];

      const files = new FormData();
      files.append("files", avatarFile);

      const data = await registerNewSeller({
        files,
        name,
        phone,
        email,
        password,
        passwordConfirmation,
      });
      console.log(data);
      toast.success("Cadastro realizado com sucesso", {
        action: {
          label: "Login",
          onClick: () => navigate("/login"),
        },
      });
    } catch (error) {
      toast.error("Ocorreu um erro durante o cadastro. Tente novamente");
      console.error(error);
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

            <Controller
              name="avatar"
              control={control}
              render={({ field: { name, onChange, value } }) => {
                return (
                  <Label
                    htmlFor="avatar"
                    style={{
                      backgroundImage: `url(${value && value[0] ? URL.createObjectURL(value[0]) : ""})`,
                    }}
                    className="z-0 w-[120px] h-[120px] relative bg-center bg-cover hover:cursor-pointer transition-all"
                  >
                    {!value && (
                      <div className="bg-shape -z-10 absolute w-full h-full rounded-[20px] flex items-center justify-center text-gray-300">
                        <ImageUp
                          className="h-8 w-8 text-orange-base"
                          strokeWidth={1.5}
                        />
                      </div>
                    )}

                    <div className="z-10 flex flex-col items-center justify-center w-full h-full bg-transparent text-transparent rounded-[20px] group-hover:bg-black group-hover:bg-opacity-30 group-hover:text-white">
                      <ImageUp className="h-8 w-8" strokeWidth={1.5} />
                    </div>

                    <Input
                      type="file"
                      id="avatar"
                      name={name}
                      className="hidden"
                      onChange={(e) => onChange(e.target.files)}
                    />
                  </Label>
                );
              }}
            />

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
              disabled={isRegistering}
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
