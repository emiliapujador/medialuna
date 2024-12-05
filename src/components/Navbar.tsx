import Image from "next/image";
import MedialunaLogo from "../images/medialuna-navbar.png";
import LensIcon from "../images/lens.png";
import GlobalIcon from "../images/global 14.51.15.png";
import BagIcon from "../images/bag 14.51.15.png";
import { CartSheet } from "./CartSheet";

export default function Navbar() {
  return (
    <div className="border-b border-zinc-500">
      <div className="flex flex-row w-full justify-between container mx-auto">
        <div className="flex flex-row gap-2 lg:gap-12 items-center font-nunito text-[18px]">
          <p>Shop online</p>
          <p>About us</p>
          <p>Contact</p>
        </div>
        <Image
          src={MedialunaLogo}
          width={80}
          height={80}
          alt="Medialuna's logo"
        />
        <div className="flex flex-row gap-6 items-center">
          <Image src={LensIcon} width={27} height={27} alt="Lens icon" />
          <Image src={GlobalIcon} width={27} height={27} alt="Global icon" />
          <Image src={BagIcon} width={27} height={27} alt="Bag icon" />

          <CartSheet />
        </div>
      </div>
    </div>
  );
}
