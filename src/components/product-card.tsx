import { Link } from "react-router-dom";

export function ProductCard() {
  return (
    <Link to={"/products/id"}>
      <div className="w-[80] flex flex-col bg-white rounded-2xl p-4">
        <img
          className="rounded-[20px] w-full h-32 object-cover"
          src="/product.jpg"
        />
        <div className="p-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-semibold">Iphone 15</span>
            <div className="flex items-baseline gap-1">
              <span className="text-label-md text-gray-500 font-medium">
                R$
              </span>
              <p className="text-title-sm font-bold text-gray-500">4.290,00</p>
            </div>
          </div>

          <p className="text-gray-300 text-body-sm line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dapibus, diam sit amet elementum dignissim, felis quam placerat
            enim, vel convallis urna dolor sed dui. Nullam erat urna, laoreet at
            arcu ac, commodo tristique est.{" "}
          </p>
        </div>
      </div>
    </Link>
  );
}
