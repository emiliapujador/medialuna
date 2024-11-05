import Image from "next/image";
import Baker from "../images/bakery.png";
import BakeryProduct from "../images/products.png";
export default function AboutUs() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row container mx-auto px-4 lg:px-12 lg:gap-12 gap-8  mt-10 mb-10 lg:mt-16 lg:mb-24 lg:items-center">
        <div className="flex flex-col lg:flex-1">
          <h3 className="text-xl	lg:text-2xl	font-bold mb-2 lg:mb-4">
            ABOUT US Lorem ipsum neque senectus massa{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pulvinar neque senectus
            massa sit turpis risus cursus id non nulla facilisis.{" "}
          </p>
          <br />{" "}
          <p>
            Laoreet volutpat varius turpis in nulla augue urna ultrices. Augue
            egestas lacus amet id etiam elementum sed. Augue egestas lacus amet
            id etiam elementum sed.{" "}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-1 lg:gap-6 gap-4">
          <Image
            src={Baker}
            width={272}
            height={295}
            alt="Baker"
            className="w-full h-auto lg:w-auto lg:h-auto"
          />
          <Image
            src={BakeryProduct}
            width={272}
            height={295}
            alt="Products"
            className="w-full h-auto lg:w-auto lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
