import Image from 'next/image'
import React from 'react'
import service1 from '../../assest/image/service/service1.png'
import service2 from '../../assest/image/service/service2.png'
import service3 from '../../assest/image/service/service3.png'
import service4 from '../../assest/image/service/service4.png'


const Service = () => {
	return (
		<>
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-3 col-md-6  d-flex">
						<div className="icon">
							<Image src={service1} alt='' className='icon_img' />
						</div>
						<div className="content">
							<h6>Fast & Secure Delivery</h6>
							<p>Tell about your service.</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 d-flex">
						<div className="icon">
							<Image src={service2} alt='' className='icon_img' />
						</div>
						<div className="content">
							<h6>Money Back Guarantee
							</h6>
							<p>Within 10 days.</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6  d-flex">
						<div className="icon">
							<Image src={service3} alt='' className='icon_img' />
						</div>
						<div className="content">
							<h6>24 Hour Return Policy
							</h6>
							<p>No question ask.</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 d-flex">
						<div className="icon">
							<Image src={service4} alt='' className='icon_img' />
						</div>
						<div className="content">
							<h6>Pro Quality Support
							</h6>
							<p>24/7 Live support</p>
						</div>
					</div>

				</div>
				<hr className='border border-2' />
			</div>
		</>

	)
}

export default Service