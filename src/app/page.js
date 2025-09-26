"use client";

import Count from "@/components/count";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <header>
      <Navbar />
      {/* <Count /> */}
      <Hero/>
    </header>
  );
}
