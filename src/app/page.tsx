"use server";

import {
  Hero,
  PopularCategories,
  SalesDiscounts,
  WhyChooseUs,
} from "@/components/home";
import NewArrivals from "@/components/home/NewArrivals";

export default async function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <PopularCategories />
        <SalesDiscounts />
        <NewArrivals />
        <WhyChooseUs />
      </main>
    </div>
  );
}
