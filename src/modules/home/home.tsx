import React from "react";
import HeroSection from "./sections/hero";
import PricingSection from "./sections/pricing";
import AboutSection from "./sections/about";
import WhyChooseUsSection from "./sections/whycu";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <PricingSection />
    </>
  );
};

export default HomePage;
