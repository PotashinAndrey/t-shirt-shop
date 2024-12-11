import Image from "next/image";

export const AboutBrand = () => {
    return (
      <section className="about-brand bg-white py-16 mb-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашем бренде</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Мы создаем одежду, которая сочетает в себе стиль, качество и комфорт. Наши
              продукты разработаны для тех, кто ценит уникальность и заботится об
              окружающей среде.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Присоединяйтесь к нашему сообществу и становитесь частью истории, полной
              вдохновения, творчества и ответственности.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/images/about-brand.jpg"
              alt="О нашем бренде"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    );
  };