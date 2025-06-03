export interface TagStatusProps {
  status: "available" | "sold" | "cancelled" | null;
}

const statusColor = {
  available: "bg-blue-dark",
  sold: "bg-success",
  cancelled: "bg-gray-300",
};

const statusTitle = {
  available: "Anunciado",
  sold: "Vendido",
  cancelled: "Desativado",
};

export function TagStatus({ status }: TagStatusProps) {
  function getStatusColor(status: TagStatusProps["status"]) {
    return status ? statusColor[status] : "bg-gray-300";
  }

  function getStatusTitle(status: TagStatusProps["status"]) {
    return status ? statusTitle[status] : "Indefinido";
  }

  return (
    <span
      className={`${getStatusColor(status)} label-sm px-2 py-1 rounded-full text-white`}
    >
      {getStatusTitle(status)}
    </span>
  );
}
