import Image from "next/image";
import Palmeritas from "../images/palmeritas.png";
import { Button } from "@/components/ui/button";
import { AddtoCartButton } from "./AddToCart";

export function CartProduct() {
  return (
    <div>
      <div className="flex flex-row">
        <Image
          src={Palmeritas}
          alt="Plp prduct"
          className="mb-2 w-24 h-24 mr-5"
        />
        <div className="flex flex-col text-left	">
          <div className="flex flex-col items-left ">
            <p className="capitalize	font-semibold text-[14px] lg:font-bold flex flex-col mb-1">
              Product name & quantity
            </p>
            <p className="text-[13px] ">£14.00</p>
            <div>
              {" "}
              <AddtoCartButton />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
