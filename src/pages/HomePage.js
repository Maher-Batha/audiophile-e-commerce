import React from "react";
import { BestGear, Categories, HeroSection, MainProducts } from "../components";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <section className="categories-section">
        <Categories />
      </section>
      <MainProducts />
      <BestGear />
    </>
  );
};

export default HomePage;
