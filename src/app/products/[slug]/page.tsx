import Image from "next/image";
import Maicenitas from "@/images/homecategories1.png";
import { AddtoCartButton } from "@/components/AddToCart";

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

          <AddtoCartButton />
        </div>
      </div>
    </main>
  );
}
