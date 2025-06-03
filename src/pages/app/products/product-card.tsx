import { Link } from "react-router-dom";
import { TagCategory } from "./tag-category";
import { TagStatus } from "./tag-status";

export interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    priceInCents: number;
    status: "available" | "sold" | "cancelled";
    owner: {
      id: string;
      name: string;
      phone: string;
      email: string;
      avatar: {
        id: string;
        url: string;
      };
    };
    category: {
      id: string;
      title: string;
      slug: string;
    };
    attachments: {
      id: string;
      url: string;
    }[];
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className=" flex flex-col bg-white rounded-[20px] p-1 border-solid border-2 border-transparent relative hover:border-blue-base transition-all">
      <Link to={`/products/edit/${product.id}`}>
        <div className="absolute top-3 right-3 flex gap-1">
          <TagStatus status={product.status} />
          <TagCategory category={product.category} />
        </div>

        <div
          className="h-[144px] rounded-[16px] bg-center bg-cover"
          style={{
            backgroundImage: `url(${product.attachments[0].url})`,
          }}
        />

        <div className="p-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 subtitle">{product.title}</span>
            <div className="flex items-baseline gap-1">
              <span className="label-md text-gray-500">R$</span>
              <p className="title-sm font-bold text-gray-500">
                {(product.priceInCents / 100).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-300 body-sm line-clamp-2">
          {product.description}
        </p>
      </Link>
    </div>
  );
}
