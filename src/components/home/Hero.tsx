import Link from "next/link";

export const Hero = () => {
  return (
    <section className="hero bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Купи стильные худи и футболки
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Лучшие предложения по доступным ценам. Будь в тренде уже сегодня!
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            className="bg-white text-blue-700 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition"
            href="/catalog"
          >
            Посмотреть товары
          </Link>
          <Link
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-500 transition"
            href="/sales"
          >
            Акции
          </Link>
        </div>
      </div>
    </section>
  );
};
