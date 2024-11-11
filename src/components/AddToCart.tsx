import { MinusIcon, PlusIcon } from "lucide-react";

export function AddtoCartButton() {
  return (
    <div>
      <div className="flex flex-row justify-start ">
        <button className="bg-[#CF2032] h-[50px] w-[51px] text-white flex justify-center items-center">
          <MinusIcon />
        </button>
        <p className="w-[90px] border-[#9C9C9C] border-t-[0.5px] border-b-[0.5px] flex justify-center items-center">
          1
        </p>
        <button className=" bg-[#CF2032] h-[50px] w-[51px] text-white flex justify-center items-center">
          <PlusIcon />
        </button>
      </div>
      <div>
        <button className=" w-full bg-[#CF2032] text-white px-[100px] h-[50px] mt-5 font-semibold	">
          Add to basket
        </button>
      </div>
    </div>
  );
}
