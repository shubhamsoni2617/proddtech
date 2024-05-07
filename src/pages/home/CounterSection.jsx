import React from "react";

// img import
import icon1 from "../../assets/img/home/team.png";
import icon2 from "../../assets/img/home/deal.png";
import icon3 from "../../assets/img/home/computers.png";
import icon4 from "../../assets/img/home/customer-service.png";

export default function CounterSection() {
  return (
    <section className="lg:py-24 py-16 bg-[linear-gradient(to_bottom,#c7ecff_0,#f9efff_100%)]">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 gap-6">
          <div className="flex items-center">
            <div className="h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4">
              <img src={icon1} alt="icon" className="max-w-full h-auto" />
            </div>
            <div className="pl-5">
              <h3 className="font-poppins font-bold text-blue text-4xl mb-1">
                20
              </h3>
              <p className="text-xl">Team Members</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4">
              <img src={icon2} alt="icon" className="max-w-full h-auto" />
            </div>
            <div className="pl-5">
              <h3 className="font-poppins font-bold text-blue text-4xl mb-1">
                5+
              </h3>
              <p className="text-xl">Happy Clients</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4">
              <img src={icon3} alt="icon" className="max-w-full h-auto" />
            </div>
            <div className="pl-5">
              <h3 className="font-poppins font-bold text-blue text-4xl mb-1">
                10+
              </h3>
              <p className="text-xl">Projects Done</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4">
              <img src={icon4} alt="icon" className="max-w-full h-auto" />
            </div>
            <div className="pl-5">
              <h3 className="font-poppins font-bold text-blue text-4xl mb-1">
                24/7
              </h3>
              <p className="text-xl">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
