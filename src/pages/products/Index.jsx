import React from 'react';

// section components
import Banner from './BannerSection';
import ProductsShow from './ProductsShow';
import BottomBannerSection from './BottomBannerSection';

export default function Index() {
  return (
    <>
      <Banner />
      <ProductsShow />
      <BottomBannerSection />
    </>
  )
}
