import React from "react";
import bannerImg from "../../assets/img/home/hero-image.png";
import { Link } from "react-router-dom";

export default function BannerSection() {
  return (
    <section
      className="home-banner py-20 bg-[linear-gradient(to_bottom,#c7ecff_0,#f9efff_100%)] min-h-screen relative
      before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-no-repeat before:bg-contain before:z-0"
    >
      <div className="container max-w-6xl mx-auto relative z-10 px-2">
        <div className="grid grid-cols-[1fr_1fr] items-center gap-5 min-h-[calc(100vh-160px)]">
          <div>
            <h2 className="text-blue font-bold font-poppins lg:text-[52px] text-4xl lg:leading-[60px] leading-10 lg:mb-8 mb-6">
              Creative Product <br /> Development <br /> Company
            </h2>
            <p className="lg:text-xl text-base leading-7 mb-8">
              We are a Product Development IT company in England who provides top
              quality service.
            </p>
            <p>
              <Link to="/contact" className="btn btn-pink">
                Contact Us
              </Link>
            </p>
          </div>
          <div className="lg:block hidden">
            <img
              src={bannerImg}
              alt="banner img"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
