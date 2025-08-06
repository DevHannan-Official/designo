import React from "react";
import HeroSection from "./sections/hero";
import PricingSection from "./sections/pricing";
import AboutSection from "./sections/about";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PricingSection />
    </>
  );
};

export default HomePage;
