"use client";

import Count from "@/components/count";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Main/>
      </main>
    </>
  );
}
