import React, { useState } from 'react'
import { BsFillBasket2Fill } from 'react-icons/bs'
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import product_1 from '../../assest/image/product-6.1.png';
import product2 from '../../assest/image/product-8.png'
import product3 from '../../assest/image/product-9.png'
import product_4 from '../../assest/image/product-9.1.png'
import product5 from '../../assest/image/product-10.1.png'
import product6 from '../../assest/image/product-11.png'
import product7 from '../../assest/image/product-12.png'
import product8 from '../../assest/image/product-13.png'
import product9 from '../../assest/image/product-14.png'
import StarRatings from 'react-star-ratings';
import dynamic from "next/dynamic";





import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlineEye, HiOutlineHeart } from 'react-icons/hi';
import Link from 'next/link';



const ProductMonth = () => {

	let data = [
		{
			id: 1,
			thumbnail: product_1,
			title: 'Diamond Necklece',
			currunt_price: '$30',
			old_price: '$50',
			rating: 5
		},
		{
			id: 2,
			thumbnail: product2,
			title: 'Diamond Necklece',
			currunt_price: '$80',
			old_price: '$100',
			rating: 4
		},
		{
			id: 3,
			thumbnail: product3,
			title: 'Diamond Necklece Earring',
			currunt_price: '$40',
			rating: 4
		},
		{
			id: 4,
			thumbnail: product_4,
			title: 'Diamond  Earring',
			currunt_price: '$30',
			old_price: '$35',
			rating: 5

		},
		{
			id: 5,
			thumbnail: product5,
			title: 'Diamond  Bracelet',
			currunt_price: '$40',
			rating: 5

		},

		{
			id: 6,
			thumbnail: product6,
			title: 'Diamond  LOCKET',
			currunt_price: '$80',
			rating: 4

		},
		{
			id: 7,
			thumbnail: product7,
			title: 'Denim Black Jacket ',
			currunt_price: '$20',
			old_price: '$40',
			rating: 4


		},
		{
			id: 8,
			thumbnail: product8,
			title: 'Diamond  Bracelet',
			currunt_price: '$30',
			rating: 4


		},
		{
			id: 9,
			thumbnail: product9,
			title: 'Diamond  Ring',
			currunt_price: '$40',
			old_price: '$60',
			rating: 5


		},
	]
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1760,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: false
				}
			},

			{
				breakpoint: 1160,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
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
	const StarRatings = dynamic(() => import("react-star-ratings"), {
		ssr: false,
	});
	return (
		<>

			<div className='container mt-5'>
				<p className='product_week'>
					<small><BsFillBasket2Fill size={25} className='cart_icon' /> </small>		This Month
				</p>
				<div className='d-flex justify-content-between'>
					<h2 className='product_title'>Best Sellers</h2>
					<p className='arrow_btn'>
						<button className=''><HiOutlineArrowLeft /></button>
						<button className=' ms-2'><HiOutlineArrowRight /></button>
					</p>
				</div>
				<Slider {...settings}>

					{data.map((item, i) => (
						<div className='p-2' key={i}>
							<div className="thumbnail1 mt-5">
								<Image src={item.thumbnail} alt='product' className='thumbnail_img1' />
								<div className="product_action">
									<HiOutlineHeart className='whislist' />
									<button className='product_cart'><Link href='/cart'>Add To Cart</Link></button>
									<HiOutlineEye className='view' />
								</div>
							</div>

							<div className="thumbnail_content  float-start">
								<StarRatings starRatedColor="#FFF333" starDimension='18px' starSpacing='4px' rating={item.rating} />
								<h5 className='thumbnail_title'>{item.title}</h5>
								<div className='product_price float-start'>
									<span className='product_old_price'>{item.old_price}</span>
									<span className='product_currunt_price'>{item.currunt_price}	</span>
								</div>
							</div>
						</div>

					))}



				</Slider>
				<hr className='border border-1 mt-5' />
			</div>
		</>
	)
}

export default ProductMonth