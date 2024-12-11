"use server";

import { Hero, PopularCategories } from "@/components/home";

export default async function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <PopularCategories />
      </main>
    </div>
  );
}
