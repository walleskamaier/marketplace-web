import { Store } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";

export function AdvertisedProductsCard() {
  return (
    <Card className="rounded-[20px] flex p-3">
      <CardContent className="flex items-center gap-4 p-0">
        <div className="flex bg-blue-light items-center justify-center w-[80px] h-[86px] rounded-[12px]">
          <Store className="text-blue-dark w-9 h-9" />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <>
            <h3 className="title-lg text-gray-400">56</h3>
            <p className="body-xs text-gray-300 w-1">Produtos anunciados</p>
          </>
        </div>
      </CardContent>
    </Card>
  );
}
