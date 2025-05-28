import { Link } from "react-router-dom";
import { TagCategory } from "./tag-category";
import { TagStatus } from "./tag-status";

export function ProductCard() {
  return (
    <div className=" flex flex-col bg-white rounded-[20px] p-1 border-solid border-2 border-transparent relative hover:border-blue-base transition-all">
      <Link to={"/products/edit/:productId"}>
        <div className="absolute top-3 right-3 flex gap-1">
          <TagStatus />
          <TagCategory />
        </div>

        <img
          className="h-[144px] rounded-[16px] object-cover w-full"
          src="/product.jpg"
          alt=""
        />

        <div className="p-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 subtitle">Iphone 15</span>
            <div className="flex items-baseline gap-1">
              <span className="label-md text-gray-500">R$</span>
              <p className="title-sm font-bold text-gray-500">4.290,00</p>
            </div>
          </div>
        </div>

        <p className="text-gray-300 body-sm line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          dapibus, diam sit amet elementum dignissim, felis quam placerat enim,
          vel convallis urna dolor sed dui. Nullam erat urna, laoreet at arcu
          ac, commodo tristique est.{" "}
        </p>
      </Link>
    </div>
  );
}
