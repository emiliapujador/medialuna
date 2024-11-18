import { MapPinCheckInside } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="border-t border-stone-300">
      <footer className="flex lg:flex-row flex-col  container mx-auto px-4 lg:px-12 mt-7 justify-around align-middle pb-8 items-baseline ">
        <div className="flex flex-col mb-[15px] lg:mb-0">
          <p className="lg:text-[40px] text-[30px]">Medialuna</p>
          <p className="lg:text-[12px] text-[10px] font-nunito">
            This is a mock store to showcase a custom Shopify store. <br />
            Built with Next.js. Orders will not be fullfilled.
          </p>
        </div>

        <div className="flex flex-col">
          <p className=" text-[20px] lg:text-[25px] mb-[5px]">Location</p>
          <div className="flex flex-row">
            <MapPinCheckInside fill="#CF2032" color="white" className="pr-2" />
            <p className=" text-[15px]">London SW1A 0AA</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className=" text-[20px] lg:text-[25px] mb-[5px]">Contact</p>
          <div className="flex flex-row">
            <Phone fill="#CF2032" color="white" className="pr-2" />
            <p className=" text-[15px] mb-3">+44 07931xxxxxx</p>
          </div>
          <div className="flex flex-row">
            <Mail fill="#CF2032" color="white" className="pr-2" />
            <p className=" text-[15px]">emiliapujador@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
