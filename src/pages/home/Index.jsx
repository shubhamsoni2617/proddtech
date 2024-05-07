import React from "react";

// section components
import Banner from "./BannerSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import CounterSection from "./CounterSection";
import ProductSection from "./ProductSection";
import IndustriesSection from "./IndustriesSection";
import Testimonial from "./Testimonial";
import BottomBannerSection from "./BottomBannerSection";

export default function Index() {
  return (
    <>
      <Banner />
      <AboutSection />
      <ServiceSection />
      <CounterSection />
      {/* <ProductSection /> */}
      <IndustriesSection />
      {/* <Testimonial /> */}
      <BottomBannerSection />
    </>
  );
}
