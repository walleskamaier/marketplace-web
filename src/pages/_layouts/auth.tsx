import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="grid grid-cols-2 min-h-screen max-w-7xl m-auto antialiased font-poppins">
      {/* Primeira coluna - lado esquerdo */}
      <div className="flex flex-col h-full p-10">
        <img className="w-64 object-contain" src="/logo.svg" />
        <div className="flex flex-1 items-center">
          <img className="w-3x1 mt-12 object-contain" src="/background.png" />
        </div>
      </div>

      {/* Segunda coluna - lado direito */}
      <div className="overflow-y-auto p-6">
        <div className="h-full bg-white rounded-4xl p-20 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
