import React from "react";
import HeroSection from "./sections/hero";
import PricingSection from "./sections/pricing";
import AboutSection from "./sections/about";
import WhyChooseUsSection from "./sections/whycu";
import FaqsSection from "./sections/faqs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <PricingSection />
      <FaqsSection />
    </>
  );
};

export default HomePage;
