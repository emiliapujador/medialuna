import Image from "next/image";
import Maicenitas from "@/images/homecategories1.png";
import { AddtoCartButton } from "@/components/AddToCart";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
import { PlpProductCard } from "@/components/PlpProductCard";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <main className="container mx-auto px-4">
      <div className="flex flex-col lg:items-start lg:flex-row  lg:gap-12 mt-7">
        <div className="flex grow-[2]">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={Maicenitas}
              alt="Alfajores de maicena"
              fill
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-1 flex-col max-w-2xl">
          <h3 className="font-bold text-2xl mt-4">{slug} x12</h3>
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
      <p className="font-bold text-center text-xl lg:mt-20 mt-8">
        You may also like
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full lg:mt-10 mt-8"
      >
        <CarouselContent>
          {Array.from({ length: 20 }).map((_, item) => (
            <CarouselItem
              key={item}
              className="pl-9 basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <div>
                <PlpProductCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
