import { Link, LinkProps, useLocation } from "react-router-dom";

export type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center action-sm gap-2 text-gray-300 hover:text-orange-base hover:bg-shape data-[current=true]:text-orange-base data-[current=true]:bg-shape px-4 py-3 rounded-[10px]"
      {...props}
    />
  );
}
