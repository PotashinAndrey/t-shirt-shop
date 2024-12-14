import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Страница не найдена</p>
      <Link href="/" className="text-blue-600 hover:underline text-lg">
        Вернуться на главную страницу
      </Link>
    </div>
  );
}
