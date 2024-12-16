import Image from "next/image";

const TShirtsPage = () => {
  const tshirts = [
    {
      id: 1,
      name: "Базовая футболка",
      price: 1999,
      image: "/images/t-shirts.avif",
    },
    {
      id: 2,
      name: "Футболка с принтом",
      price: 2499,
      image: "/images/t-shirts.avif",
    },
    {
      id: 3,
      name: "Oversize футболка",
      price: 2999,
      image: "/images/t-shirts.avif",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Футболки</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tshirts.map((tshirt) => (
          <div key={tshirt.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={tshirt.image}
                alt={tshirt.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{tshirt.name}</h3>
            <p className="text-gray-700 mb-4">Цена: {tshirt.price} руб.</p>
            <button className="w-full block bg-blue-600 text-white text-center px-6 py-2 rounded hover:bg-blue-700">
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TShirtsPage;
