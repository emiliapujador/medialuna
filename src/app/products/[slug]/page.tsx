import Image from "next/image";
import Maicenitas from "@/images/homecategories1.png";
import { AddtoCartButton } from "@/components/AddToCart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <main>
      <div className="flex flex-col lg:flex-row container mx-auto lg:gap-12 mt-7 px-4">
        <div className="flex grow-[2]">
          <Image
            src={Maicenitas}
            width={264}
            height={302}
            alt="Plp prduct"
            className="mb-2 w-full h-auto "
          />
        </div>
        <div className="flex flex-1 flex-col max-w-2xl">
          <h3 className="font-bold text-2xl	">Maicenitas x12</h3>
          <p className="mb-2">Short description</p>
          <p className="text-sm mb-3">£XX</p>
          <p className="text-sm mb-2">Quantity:</p>
          <div className="mb-5">
            <AddtoCartButton />
          </div>
          <div className="mb-4">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Pulvinar neque senectus
              massa sit turpis risus cursus id non nulla facilisis. Lorem ipsum
              dolor sit amet consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <p>
              Pulvinar neque senectus massa sit turpis risus cursus id non nulla
              facilisis. Pulvinar neque senectus massa sit turpis risus cursus
              id non nulla facilisis.
            </p>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-[#373737] font-normal text-base	">
                INGREDIENTS
              </AccordionTrigger>
              <AccordionContent className="text-base	">
                Pulvinar neque senectus massa sit turpis risus cursus id non
                nulla facilisis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className=" text-[#373737] font-normal text-base	 ">
                HOW TO STORE THE PRODUCT
              </AccordionTrigger>
              <AccordionContent className="text-base	">
                Pulvinar neque senectus massa sit turpis risus cursus id non
                nulla facilisis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="flex flex-row container mx-auto">
        <Carousel>
          <CarouselContent>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
