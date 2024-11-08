import { PlpProductCard } from "@/components/PlpProductCard";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <main className="container mx-auto px-4">
      <div>
        <h1 className="font-bold text-3xl lg:text-4xl uppercase mt-7">
          {slug}
        </h1>
        <p className=" text-sm lg:text-lg">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-9 max-w-5xl mx-auto">
        <PlpProductCard />
        <PlpProductCard />
        <PlpProductCard />
        <PlpProductCard />
        <PlpProductCard />
        <PlpProductCard />
        <PlpProductCard />
        <PlpProductCard />
        <PlpProductCard />
      </div>
    </main>
  );
}
