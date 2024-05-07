import React from "react";

// image import
import OverviewImg from "../../assets/img/services/overview.jpg";
import RoundShapeImg from "../../assets/img/services/overview-round-shape.png";
import SquareShapeImg from "../../assets/img/services/overview-square-shape.png";

export default function ServiceOverview() {
  return (
    <section className="lg:py-20 py-12">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-[2fr_3fr] grid-cols-1 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src={OverviewImg}
                alt="overview img"
                className="w-100 h-auto rounded-2xl shadow-lg"
              />
              <img
                src={RoundShapeImg}
                alt="shape img"
                className="absolute -bottom-14 lg:-right-14 -z-10"
              />
              <img
                src={SquareShapeImg}
                alt="shape img"
                className="absolute -left-14 -top-14 -z-10"
              />
            </div>
          </div>
          <div>
            <p className="uppercase text-pink mb-3">overview</p>
            <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
              Premium Product Development Service
            </h2>
            <p>
              Our primary goal is to provide our clients with high-quality
              Product development services that are tailored to meet their
              specific needs. Our service overview includes a wide range of
              services that are designed to help businesses achieve their online
              goals and reach their target audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
