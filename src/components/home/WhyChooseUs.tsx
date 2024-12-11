import { FC } from "react";

const advantages = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12 text-blue-600 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 19.5h17.25M4.5 8.25h15a1.5 1.5 0 011.5 1.5v6.75a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5V9.75a1.5 1.5 0 011.5-1.5z"
        />
      </svg>
    ),
    title: "Быстрая доставка",
    description: "Мы доставляем ваши заказы в кратчайшие сроки, куда бы вы ни находились.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12 text-blue-600 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25v4.5m0 3v.75M21 10.5a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Высокое качество",
    description: "Наши товары изготовлены из материалов высшего качества.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12 text-blue-600 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18m0-18a9 9 0 019 9m-9-9a9 9 0 00-9 9"
        />
      </svg>
    ),
    title: "Надежность",
    description: "Мы гарантируем безопасность ваших покупок и полную прозрачность.",
  },
];

export const WhyChooseUs: FC = () => {
  return (
    <section className="why-choose-us bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Почему выбирают нас?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="advantage-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="icon flex justify-center">{advantage.icon}</div>
              <h3 className="text-xl font-bold mt-4 mb-2">{advantage.title}</h3>
              <p className="text-gray-700">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};