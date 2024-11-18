import Image from "next/image";
import Palmeritas from "../images/palmeritas.png";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";

export function PlpProductCard() {
  return (
    <div>
      <div className="flex flex-col">
        <Image
          src={Palmeritas}
          width={264}
          height={302}
          alt="Plp prduct"
          className="mb-2 w-full h-auto"
        />
        <div className="flex flex-row justify-between items-center">
          <p className="uppercase font-semibold text-[14px] lg:font-bold">
            Palmeritas x12
          </p>
          <Button
            variant="outline"
            size="icon"
            className="size-6 lg:size-8 rounded-full border-foreground"
          >
            <ShoppingBagIcon className="size-3 lg:size-4" />
          </Button>
        </div>
        <p className="text-[13px]">£14.00</p>
      </div>
    </div>
  );
}
