import React from 'react';

// img import
import prod1 from '../../assets/img/home/prod-1.jpg';

export default function ProductsShow() {
  return (
    <section className="lg:py-16 py-8">
        <div className="container max-w-6xl mx-auto px-2">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                <div>
                    <a href="#live">
                        <img src={prod1} alt="product img" className="w-100 rounded-lg mb-4" />
                        <h4 className="text-blue font-semibold text-2xl font-poppins mb-4">Ecommerce Website</h4>
                    </a>
                </div>
                <div>
                    <a href="#live">
                        <img src={prod1} alt="product img" className="w-100 rounded-lg mb-4" />
                        <h4 className="text-blue font-semibold text-2xl font-poppins mb-4">Blog Website</h4>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
