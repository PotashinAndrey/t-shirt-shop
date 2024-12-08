import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer bg-white border-t border-gray-200 py-6">
      <div className="container text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} T-Shop. Все права защищены.
        </p>

        <div className="mt-4 flex justify-center space-x-4">
          <Link
            className="text-sm text-gray-600 hover:text-blue-500"
            href="/privacy-policy"
          >
            Политика конфиденциальности
          </Link>
          <Link
            className="text-sm text-gray-600 hover:text-blue-500"
            href="/terms-of-service"
          >
            Условия обслуживания
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-blue-500"
            href="https://www.instagram.com"
          >
            Instagram
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-blue-500"
            href="https://www.facebook.com"
          >
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
};
