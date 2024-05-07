import React from 'react';

// img import
import prod1 from '../../assets/img/home/prod-1.jpg';
import prod2 from '../../assets/img/home/prod-2.jpg';

export default function ProductSection() {
  return (
    <section className="home-product lg:py-24 py-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[380px]
       before:z-[-1]">
      <div className="container max-w-6xl mx-auto px-2">
        <div className='mb-14'>
          <p className="uppercase text-pink text-center mb-3">our work</p>
          <h2 className="text-blue font-semibold text-4xl font-poppins text-center">Our Latest Creative Work</h2>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] grid-1 gap-6 mb-8">
          <div>
            <a href="#ed">
              <img src={ prod1 } alt="product img" className="w-full h-auto rounded-xl shadow-lg mb-6" />
            </a>
            <h5 className="text-blue font-poppins font-semibold text-2xl mb-2">
              <a href="#e">Creative Website</a>
            </h5>
            <p>Web App</p>
          </div>
          <div>
            <a href="#ed">
              <img src={ prod2 } alt="product img" className="w-full h-auto rounded-xl shadow-lg mb-6" />
            </a>
            <h5 className="text-blue font-poppins font-semibold text-2xl mb-2">
              <a href="#e">Creative App</a>
            </h5>
            <p>Mobile App</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] grid-cols gap-6 mb-6">
          <div>
            <a href="#ed">
              <img src={ prod2 } alt="product img" className="w-full h-auto rounded-xl shadow-lg mb-6" />
            </a>
            <h5 className="text-blue font-poppins font-semibold text-2xl mb-2">
              <a href="#e">Creative App</a>
            </h5>
            <p>Mobile App</p>
          </div>
          <div>
            <a href="#ed">
              <img src={ prod1 } alt="product img" className="w-full h-auto rounded-xl shadow-lg mb-6" />
            </a>
            <h5 className="text-blue font-poppins font-semibold text-2xl mb-2">
              <a href="#e">Creative Website</a>
            </h5>
            <p>Web App</p>
          </div>
        </div>
      </div>
    </section>
  )
}
