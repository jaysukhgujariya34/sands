import React from 'react'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlineEye, HiOutlineHeart } from 'react-icons/hi'
import Slider from 'react-slick'
import jewelry from '../../assest/image/category/jewelry-1.png'
import jewelry1 from '../../assest/image/category/jewelry-2.png'
import jewelry2 from '../../assest/image/category/jewelry-3.png'
import jewelry3 from '../../assest/image/category/jewelry-4.png'
import jewelry4 from '../../assest/image/category/jewelry-5.png'
import jewelry5 from '../../assest/image/category/jewelry-6.png'
import jewelry6 from '../../assest/image/category/jewelry-7.png'
import jewelry7 from '../../assest/image/category/jewelry-8.png'
import jewelry8 from '../../assest/image/category/jewelry-9.png'
import jewelry9 from '../../assest/image/category/jewelry-10.png'
import jewelry10 from '../../assest/image/category/jewelry-11.png'
import jewelry11 from '../../assest/image/category/jewelry-12.png'
import jewelry12 from '../../assest/image/category/jewelry-13.png'
import Image from 'next/image'
import Link from 'next/link'


const Category = () => {
	const data = [
		{
			id: 1,
			category: jewelry,
			title: 'Barrette'
		},
		{
			id: 2,
			category: jewelry1,
			title: 'Base metals	'
		},
		{
			id: 3,
			category: jewelry2,
			title: 'Estate Jewellery'
		}, {
			id: 4,
			category: jewelry3,
			title: 'Foilbacks'
		}, {
			id: 5,
			category: jewelry4,
			title: 'Kalabubu'
		}, {
			id: 6,
			category: jewelry5,
			title: 'Medallion'
		}, {
			id: 7,
			category: jewelry6,
			title: 'Nawarat ring'
		}, {
			id: 8,
			category: jewelry7,
			title: 'Anklet'
		}, {
			id: 9,
			category: jewelry8,
			title: 'Pledge Pins'
		}, {
			id: 10,
			category: jewelry9,
			title: 'Prayer Jewellery'
		}, {
			id: 11,
			category: jewelry10,
			title: 'Slave bracelet'
		}, {
			id: 12,
			category: jewelry11,
			title: 'Pledge Pins'
		},
		{
			id: 13,
			category: jewelry12,
			title: 'Medallion'
		},
	]


	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 3,
		responsive: [

			{
				breakpoint: 1550,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 7,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 1399,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					initialSlide: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 399,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 383,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div>
			<div className='container mt-5'>
				<p className='product_week'>
					<small><BsFillBasket2Fill size={25} className='cart_icon' /> </small>		Categories
				</p>
				<div className='d-flex justify-content-between'>
					<h2 className='product_title'>Browse by Category</h2>
					<p className='arrow_btn'>
						<button className=''><HiOutlineArrowLeft /></button>
						<button className=' ms-2'><HiOutlineArrowRight /></button>
					</p>
				</div>

				<Slider {...settings}>
					{data.map((item, i) => (
						<div className='cat_style mt-4' key={i}>
							<div className='category_product'>
								<Link href='' className='cat_category'>
									<Image src={item.category} alt='' className='cat_img' />
									<h6 className='cat_title'>{item.title}</h6>
								</Link>
							</div>
						</div>
					))}
				</Slider>

			</div>
		</div >
	)
}

export default Category