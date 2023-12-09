import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import Slider from 'react-slick'
import user1 from '../../assest/image/user/user1.png'
import user2 from '../../assest/image/user/user2.png'
import user3 from '../../assest/image/user/user3.png'


const FeedBack = () => {
	const settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1760,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},

			{
				breakpoint: 1160,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<>
			<div className='feedback_bg feed_section mt-5'>
				<div className="container">
					<div className="section_wrraper">
						<p className='heading_wrraper'><FaQuoteLeft className='fire_icon' />Testimonials</p>
						<div className='d-flex justify-content-between'>
							<h3 className='sec_title'>Users Feedback</h3>
							<p className='arrow_btn1'>
								<button className=''><HiOutlineArrowLeft /></button>
								<button className='ms-2'><HiOutlineArrowRight /></button>
							</p>

						</div>

					</div>
				</div>
				<div className="container">

					<Slider {...settings}>


						<div className='tool_tip mt-1'>
							<div className='review_speech'>
								<p className='des'>“ It’s amazing how much easier it has been to
									meet new people and create instantly non
									connections. I have the exact same personal
									the only thing that has changed is my mind
									set and a few behaviors. “</p>
							</div>
							<div className='media'>
								<div className="media_img">
									<Image src={user1} alt='' />
								</div>
								<div className="media_body flex-1">
									<span>Head Of Idea</span>
									<h6>James C. Anderson</h6>
								</div>
							</div>
						</div>
						<div className='tool_tip'>
							<div className='review_speech'>
								<p className='des'>“ It’s amazing how much easier it has been to
									meet new people and create instantly non
									connections. I have the exact same personal
									the only thing that has changed is my mind
									set and a few behaviors. “</p>
							</div>
							<div className='media'>
								<div className="media_img">
									<Image src={user2} alt='' />
								</div>
								<div className="media_body flex-1">
									<span>Head Of Idea</span>
									<h6>James C. Anderson</h6>
								</div>
							</div>
						</div>
						<div className='tool_tip  mt-1'>
							<div className='review_speech'>
								<p className='des'>“ It’s amazing how much easier it has been to
									meet new people and create instantly non
									connections. I have the exact same personal
									the only thing that has changed is my mind
									set and a few behaviors. “</p>
							</div>
							<div className='media'>
								<div className="media_img">
									<Image src={user3} alt='' />
								</div>
								<div className="media_body flex-1">
									<span>Head Of Idea</span>
									<h6>James C. Anderson</h6>
								</div>
							</div>
						</div>
						<div className='tool_tip'>
							<div className='review_speech'>
								<p className='des'>“ It’s amazing how much easier it has been to
									meet new people and create instantly non
									connections. I have the exact same personal
									the only thing that has changed is my mind
									set and a few behaviors. “</p>
							</div>
							<div className='media'>
								<div className="media_img">
									<Image src={user1} alt='' />
								</div>
								<div className="media_body flex-1">
									<span>Head Of Idea</span>
									<h6>James C. Anderson</h6>
								</div>
							</div>
						</div>
					</Slider>

				</div>
			</div>

		</>
	)
}

export default FeedBack