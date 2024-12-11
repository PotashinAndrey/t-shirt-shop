import type { Metadata } from "next";

import { Navbar, Footer, Container } from "../components";

import "./globals.css";

export const metadata: Metadata = {
  title: "T-Shop",
  description: "Онлайн магазин футболок и худи",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <head>
        <title>T-shop</title>
        <meta
          name="description"
          content="Лучший онлайн-магазин худи и футболок."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gray-100 text-gray-800">
        <Navbar />

        <main className="min-h-screen">
          <Container>{children}</Container>
        </main>

        <Footer />
      </body>
    </html>
  );
}

// const Layout = ({ children }: LayoutProps) => {
//   return (

//   );
// };

// export default Layout;
