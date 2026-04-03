import React from "react";
import Hero from "../components/hero/Hero";

const HeroContainer = () => {
  return (
    <main className="flex flex-col overflow-hidden min-h-screen w-full">
      <Hero />
    </main>
  );
};

export default HeroContainer;
