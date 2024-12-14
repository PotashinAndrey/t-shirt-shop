import Image from "next/image";
import Link from "next/link";

const HoodiesSection = () => {
  const hoodies = [
    {
      id: 1,
      name: "Классическое худи",
      price: 3999,
      image: "/images/hoodies.png",
      link: "/hoodie",
    },
    {
      id: 2,
      name: "Oversize худи",
      price: 4499,
      image: "/images/hoodies.png",
      link: "/hoodie",
    },
    {
      id: 3,
      name: "Худи с принтом",
      price: 4999,
      image: "/images/hoodies.png",
      link: "/hoodie",
    },
  ];

  return (
    <section className="hoodies-section bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши худи</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hoodies.map((hoodie) => (
            <div key={hoodie.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={hoodie.image}
                  alt={hoodie.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{hoodie.name}</h3>
              <p className="text-gray-700 mb-4">Цена: {hoodie.price} руб.</p>
              <Link
                className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
                href={hoodie.link}
              >
                Подробнее
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoodiesSection;
