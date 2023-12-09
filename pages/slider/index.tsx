import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFire } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import poster1 from '../../assest/image/poster-08.png'
import poster2 from '../../assest/image/poster-09.png'

const index = () => {
	return (
		<>
			<main className='slider img_slider align-items-center'>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-sm-8 text">
							<p className='heading_wrraper'><FaFire className='fire_icon' />Hot Deal In Diamond </p>
							<h1 className='title'>Exclusive Design Collection</h1>
							<p className='text-secondary p_wrraper'>Casual line with short design in 100% suede Diamond</p>
							<button className='shop_btn'>Browse Item <HiOutlineArrowNarrowRight /></button>
						</div>
					</div>
				</div>
			</main>

			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-6 ">
						<div className='singal_poster'>
							<div className='imgs'>
								<Image src={poster1} alt='poster' className='rounded-1 img_poster' />
							</div>
							<div className='poster'>
								<h3 className='poster_title'>Premimum  <br />  Quality.</h3>
								<span className='sub_title'>
									Collections  <small> <HiOutlineArrowNarrowRight /></small>
								</span>
							</div>
						</div>
					</div>
					<div className="col-lg-6 ">
						<div className='singal_poster'>
							<div className="imgs">

								<Image src={poster2} alt='poster' className='rounded-1 img_poster' />
							</div>
							<div className='poster1'>
								<span className='sub_title'>
									50% Offer In Winter
								</span>
								<h3 className='poster_title'>Get Exclusive   <br />   Diamond.</h3>
							</div>
						</div>
					</div>
				</div></div>
		</>
	)
}

export default index