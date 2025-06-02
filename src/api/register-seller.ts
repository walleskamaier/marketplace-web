import { api } from "../lib/axios";
import { uploadAttachments } from "./upload-attachments";

export interface RegisterBody {
  files: FormData;
  name: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface RegisterResponse {
  seller: {
    id: string;
    name: string;
    phone: string;
    email: string;
    avatar: {
      id: string;
      url: string;
    } | null;
  };
}

export async function registerSeller({
  files,
  name,
  phone,
  email,
  password,
  passwordConfirmation,
}: RegisterBody) {
  const { attachments } = await uploadAttachments({ files });

  const { data } = await api.post<RegisterResponse>("/sellers", {
    name,
    phone,
    email,
    avatarId: attachments[0]?.id || null,
    password,
    passwordConfirmation,
  });

  console.log("Sign-in response:", data);

  return data;
}
