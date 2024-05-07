import React from 'react';

// img import
import icon1 from '../../assets/img/home/industries/icon-2.png';
import icon2 from '../../assets/img/home/industries/icon-3.png';
import icon3 from '../../assets/img/home/industries/icon-5.png';
import icon4 from '../../assets/img/home/industries/icon-6.png';
import icon5 from '../../assets/img/home/industries/icon-7.png';
import icon6 from '../../assets/img/home/industries/icon-8.png';
import icon7 from '../../assets/img/home/industries/icon-9.png';
import icon8 from '../../assets/img/home/industries/icon-10.png';
import icon9 from '../../assets/img/home/industries/icon-11.png';
import icon10 from '../../assets/img/home/industries/icon-12.png';

export default function IndustriesSection() {
  return (
    <section className='lg:py-24 py-16 bg-[linear-gradient(to_bottom,#fbf9ed_0,#fbeaf8_100%)]'>
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-[2fr_4fr] grid-cols-1 gap-6 items-center">
          <div className='lg:pr-6'>
            <p className="uppercase text-pink mb-3">industries we work for</p>
            <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">Helping Businesses in All Domains</h2>
            <p className='mb-8'>
              We are here for help all domains business. Just tell us which industries application you needs.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap justify-center -mx-2">
              <div className="lg:w-1/4 w-1/2 px-2 mb-4">
                <div className='w-full bg-teal-300 rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4 h-40 flex flex-col 
                  items-center justify-center hover:shadow-lg'>
                  <img src={ icon1 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="text-blue">Digital Marketing</p>
                </div>
              </div>
              <div className="lg:w-1/4 w-1/2 px-2 mb-4">
                <div className='w-full bg-amber-100 rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4 h-40 flex flex-col 
                  items-center justify-center hover:shadow-lg'>
                  <img src={ icon2 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="text-blue">Ecommerce Development</p>
                </div>
              </div>
              <div className="lg:w-1/4 w-1/2 px-2 mb-4">
                <div className='w-full bg-green-200 rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4 h-40 flex flex-col 
                  items-center justify-center hover:shadow-lg'>
                  <img src={ icon3 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="text-blue">Banking Service</p>
                </div>
              </div>
              <div className="lg:w-1/4 w-1/2 px-2 mb-4">
                <div className='w-full bg-orange-300 rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4 h-40 flex flex-col 
                  items-center justify-center hover:shadow-lg'>
                  <img src={ icon4 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="text-blue">Enterprise Service</p>
                </div>
              </div>
              <div className="lg:w-1/4 w-1/2 px-2 mb-4">
                <div className='w-full bg-lime-200 rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4 h-40 flex flex-col 
                  items-center justify-center hover:shadow-lg'>
                  <img src={ icon5 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="text-blue">Education Service</p>
                </div>
              </div>
              <div className="lg:w-1/4 w-1/2 px-2 mb-4">
                <div className='w-full bg-pink-300 rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4 h-40 flex flex-col 
                  items-center justify-center hover:shadow-lg'>
                  <img src={ icon6 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="text-blue">Tour and Travels</p>
                </div>
              </div>
              <div className="lg:w-1/4 w-1/2 px-2 mb-4">
                <div className='w-full bg-fuchsia-300 rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4 h-40 flex flex-col 
                  items-center justify-center hover:shadow-lg'>
                  <img src={ icon7 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="text-blue">Health Service</p>
                </div>
              </div>
              <div className="lg:w-1/4 w-1/2 px-2 mb-4">
                <div className='w-full bg-green-300 rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4 h-40 flex flex-col 
                  items-center justify-center hover:shadow-lg'>
                  <img src={ icon8 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="text-blue">Event & Ticket</p>
                </div>
              </div>
              <div className="lg:w-1/4 w-1/2 px-2 mb-4">
                <div className='w-full bg-cyan-300 rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4 h-40 flex flex-col 
                  items-center justify-center hover:shadow-lg'>
                  <img src={ icon9 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="text-blue">Restaurant Service</p>
                </div>
              </div>
              <div className="lg:w-1/4 w-1/2 px-2 mb-4">
                <div className='w-full bg-amber-100 rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4 h-40 flex flex-col 
                  items-center justify-center hover:shadow-lg'>
                  <img src={ icon10 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="text-blue">Business Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
