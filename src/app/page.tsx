import Image from "next/image";
import { Hero, PopularCategories } from "@/components/home";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <PopularCategories />
      </main>
    </div>
  );
}
