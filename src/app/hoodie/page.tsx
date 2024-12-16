import Image from "next/image";

const HoodiePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative w-full h-96">
          <Image
            src="/images/hoodies.png"
            alt="Худи"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Стильное худи</h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Наше худи - это сочетание комфорта, качества и стиля. Изготовлено из
            высококачественного материала, идеально подходящего для повседневной
            носки.
          </p>
          <p className="text-gray-700 font-semibold mb-4">Цена: 3,999 руб.</p>

          {/* Add to Cart Button */}
          <button className="block bg-blue-600 text-center text-white px-6 py-2 rounded hover:bg-blue-700">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoodiePage;
