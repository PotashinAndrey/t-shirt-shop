"use server";

import { Hero, PopularCategories, SalesDiscounts } from "@/components/home";

export default async function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <PopularCategories />
        <SalesDiscounts />
      </main>
    </div>
  );
}
