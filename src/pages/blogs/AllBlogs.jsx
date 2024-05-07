import React from 'react';

// img import
import BlogImg from '../../assets/img/blogs/blog-dg-3.jpg';

export default function AllBlogs() {
  return (
    <section className='lg:py-20 py-8'>
      <div className="container max-w-6xl mx-auto px-3">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="shadow rounded-xl overflow-hidden">
            <div className='w-full h-48'>
              <a href="#details">
                <img src={BlogImg} alt="blog img" className="w-full h-full object-cover" />
              </a>
            </div>

            <div className='grid grid-cols-2 gap-2 bg-[linear-gradient(to_right,#ff0048_0,#c300c3_100%)] rounded-3xl mx-4 -mt-4 px-4 py-2 z-10 relative'>
              <div>
                <p className='text-sm text-white flex gap-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                  Web Application
                </p>
              </div>
              <div>
                <p className='text-sm text-white flex gap-1 justify-end'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  May 1 2023
                </p>
              </div>
            </div>

            <div className='px-6 pt-5 pb-7'>
              <h4 className='text-blue font-semibold text-2xl font-poppins mb-3'>
                <a href="#details">Best technology for Web Development</a>
              </h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
