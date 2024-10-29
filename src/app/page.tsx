import Image from "next/image";
import HeroImage from "../images/Hero.png";

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
    </main>
  );
}
