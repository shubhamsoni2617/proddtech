import React from 'react';
import { Link } from 'react-router-dom';

export default function BottomBannerSection() {
	return (
		<section className='py-10 lg:py-24 bg-[linear-gradient(to_bottom,#fffdf2_0,#ffeff5_100%)]'>
			<div className="container max-w-6xl mx-auto px-2">
				<div className="grid md:grid-cols-[2fr_3fr] grid-cols-1 gap-6 items-center">
					<div>
						<h4 className='text-blue font-semibold text-3xl font-poppins mb-4'>Take Our Service Now</h4>
            			<p>We are waiting for giving you best IT Service. Just contact now and get premium quality service.</p>
					</div>
					<div>
						<p className="text-center md:text-right">
						<Link href="/contact" className="btn btn-pink px-12">Contact Us</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
