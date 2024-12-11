import Image from "next/image";
import Link from "next/link";

export const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Худи",
      image: "/images/hoodies.png",
      link: "/categories/hoodies",
    },
    {
      id: 2,
      name: "Футболки",
      image: "/images/t-shirts.avif",
      link: "/categories/t-shirts",
    },
    {
      id: 3,
      name: "Аксессуары",
      image: "/images/accessories.jpeg",
      link: "/categories/accessories",
    },
  ];

  return (
    <section className="popular-categories bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Популярные категории
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
