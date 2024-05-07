import React from 'react';
import AllBlogs from './AllBlogs';
import BannerSection from './BannerSection';
import BottomBannerSection from './BottomBannerSection';

export default function Index() {
  return (
    <>
      <BannerSection />
      <AllBlogs />
      <BottomBannerSection />
    </>
  )
}
