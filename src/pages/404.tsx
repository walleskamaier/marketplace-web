import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p>
        Voltar para o {""}
        <Link to="/sign-in" className="text-sky-500">
          Login
        </Link>
      </p>
    </div>
  );
}
