import Image from "next/image";
import HeroImage from "../images/Hero.png";
import AboutUs from "@/components/AboutUs";
import HomeCategories from "@/components/HomeCategories";
import Footer from "@/components/Footer";
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

export default function Home() {
  return (
    <main>
      <div className="h-[490px] relative">
        <Image
          src={HeroImage}
          placeholder="blur"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover"
          alt="Medialuna's hero image"
        />
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className=" text-[50px] lg:text-[90px] font-bold	lg:tracking-widest text-white relative leading-none tracking-wider">
            Medialuna
          </h1>
          <h2 className="lg:text-[28px] text-[20px] text-white relative text-center">
            Authentic Argentinian pastries & cakes in London.
          </h2>
        </div>
      </div>
      <AboutUs />
      <HomeCategories />
      <div className="container mx-auto px-4 lg:mt-20 mt-10">
        <h2 className="font-bold text-xl lg:text-2xl mb-2 text-center">
          Trending products
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full lg:mt-7 mt-5"
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
      </div>
      <Footer />
    </main>
  );
}
