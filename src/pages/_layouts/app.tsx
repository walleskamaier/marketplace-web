import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

export function AppLayout() {
  return (
    <div className="font-poppins flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-col flex-1 gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
