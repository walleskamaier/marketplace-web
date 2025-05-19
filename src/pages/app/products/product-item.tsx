export function ProductItem() {
  return (
    <div className="w-[80] flex flex-col bg-white rounded-2xl p-4">
      <img
        className="rounded-[20px] w-full h-32 object-cover"
        src="/product.jpg"
      />
      <div className="p-3">
        <div className="flex justify-between items-center">
          <span className="">Iphone 15 128GB</span>
          <div className="flex items-baseline gap-1">
            <span className="">R$</span>
            <p className="text-lg">4.290,00</p>
          </div>
        </div>

        <p className="line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          dapibus, diam sit amet elementum dignissim, felis quam placerat enim,
          vel convallis urna dolor sed dui. Nullam erat urna, laoreet at arcu
          ac, commodo tristique est.{" "}
        </p>
      </div>
    </div>
  );
}
