import Image from "next/image";
import QuickAdd from "../images/quick-add.png";
import Palmeritas from "../images/palmeritas.png";

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
          <p className="uppercase font-bold">Palmeritas x12</p>
          <Image src={QuickAdd} width={30} height={30} alt="Plp prduct" />
        </div>
        <p className="text-sm">£14.00</p>
      </div>
    </div>
  );
}
