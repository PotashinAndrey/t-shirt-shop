import Link from "next/link";
// import { useState } from "react";

export const Navbar = () => {
  //   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  //   const toggleMobileMenu = () => {
  //     setMobileMenuOpen(!isMobileMenuOpen);
  //   };

  return (
    <nav className="navbar">
      <div className="container flex items-center justify-between">
        <Link className="text-xl font-bold" href="/">
          T-Shop
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link className="navbar-link hover:text-blue-500" href="/hoodies">
            Худи
          </Link>
          <Link className="navbar-link hover:text-blue-500" href="/t-shirts">
            Футболки
          </Link>
          <Link className="navbar-link hover:text-blue-500" href="/cart">
            Корзина
          </Link>
          <Link className="navbar-link hover:text-blue-500" href="/profile">
            Профиль
          </Link>
        </div>

        {/* Мобильное меню */}
        {/* <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link href="/hoodies">
                <a className="hover:text-blue-500">Hoodies</a>
              </Link>
              <Link href="/t-shirts">
                <a className="hover:text-blue-500">T-Shirts</a>
              </Link>
              <Link href="/cart">
                <a className="hover:text-blue-500">Cart</a>
              </Link>
              <Link href="/profile">
                <a className="hover:text-blue-500">Profile</a>
              </Link>
            </div>
          </div>
        )} */}
      </div>
    </nav>
  );
};
