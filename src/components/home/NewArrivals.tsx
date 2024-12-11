import Image from "next/image";
import Link from "next/link";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "Новое худи",
      image: "/images/hoodies.png",
      price: "49.99€",
      link: "/products/new-hoodie",
    },
    {
      id: 2,
      name: "Футболка с принтом",
      image: "/images/t-shirts.avif",
      price: "29.99€",
      link: "/products/new-tshirt",
    },
    {
      id: 3,
      name: "Стильный рюкзак",
      image: "/images/backpack.jpeg",
      price: "79.99€",
      link: "/products/new-backpack",
    },
  ];

  return (
    <section className="new-arrivals bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Новинки</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.price}</p>
                <Link
                  className="text-blue-600 font-medium hover:underline"
                  href={product.link}
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
