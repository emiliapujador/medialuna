import Image from "next/image";
import HomeCategories1 from "../images/homecategories1.png";
import HomeCategories2 from "../images/homecategories2.png";
import HomeCategories3 from "../images/homecategories3.png";

const categories = [
  { label: "Pastries", image: HomeCategories1 },
  { label: "Cakes", image: HomeCategories2 },
  { label: "Regional Products", image: HomeCategories3 },
];

export default function HomeCategories() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-xl lg:text-2xl mb-3">Our products</h2>
          <p className="max-w-[400px] text-center mb-4">
            Lorem ipsum dolor sit amet consectetur. Pulvinar neque senectus
            massa sit turpis risus cursus id.
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            {categories.map((item) => (
              <div className="flex flex-col" key={item.label}>
                <Image
                  src={item.image}
                  width={410}
                  height={320}
                  alt={item.label}
                  className="w-full h-auto lg:w-auto lg:h-auto mb-2"
                />
                <p className="text-center font-bold uppercase	">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
