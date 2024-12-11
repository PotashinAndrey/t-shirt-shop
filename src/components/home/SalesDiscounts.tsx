import Image from "next/image";
import Link from "next/link";

export const SalesDiscounts = () => {
  const sales = [
    {
      id: 1,
      title: "Скидка 20% на все худи",
      description: "Специальное предложение на ограниченное время!",
      image: "/images/hoodies.png",
      link: "/sales/hoodies",
    },
    {
      id: 2,
      title: "3 футболки по цене 2",
      description: "Добавьте три футболки в корзину и получите одну бесплатно!",
      image: "/images/t-shirts.avif",
      link: "/sales/tshirts",
    },
  ];

  return (
    <section className="sales-discounts bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Акции и скидки</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sales.map((sale) => (
            <div
              key={sale.id}
              className="sale-item bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={sale.image}
                  alt={sale.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2">{sale.title}</h3>
                <p className="text-gray-700 mb-4">{sale.description}</p>
                <Link
                  className="text-blue-600 font-medium hover:underline"
                  href={sale.link}
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
