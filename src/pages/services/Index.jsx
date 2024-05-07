import React from 'react';

// components
import Banner from "./BannerSection";
import BottomBanner from "./BottomBannerSection";
import ServiceOverview from "./ServiceOverview";
import TechnologyUsed from "./TechnologyUsed";
import AllServices from "./AllServices";

export default function Index() {
  return (
    <>
      <Banner />
      <ServiceOverview />
      <TechnologyUsed />
      <AllServices />
      <BottomBanner />
    </>
  )
}
