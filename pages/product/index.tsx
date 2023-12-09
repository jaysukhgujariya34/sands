import React, { useEffect } from 'react'
import { BsFillBasket2Fill } from 'react-icons/bs'
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import product1 from '../../assest/image/product-1.png'
import product2 from '../../assest/image/product-2.png'
import product3 from '../../assest/image/product-3.png'
import product5 from '../../assest/image/product-5.png'
import product6 from '../../assest/image/product-6.png'
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlineEye, HiOutlineHeart } from 'react-icons/hi';
import Link from 'next/link';



const Product = () => {
	let data = [
		{
			id: 1,
			thumbnail: product1,
			title: 'Diamond Locket',
			old_price: '$60',
			currunt_price: '$50',
		},
		{
			id: 2,
			thumbnail: product2,
			old_price: '$30',
			title: 'Diamond Ring',
			currunt_price: '$24',
			discount: '15% OFF'
		},
		{
			id: 3,
			thumbnail: product3,
			title: 'Diamond Ring',
			old_price: '$50',
			currunt_price: '$40 ',
			discount: '30% OFF'
		},
		{
			id: 4,
			thumbnail: product1,
			title: 'Diamond Locket',
			old_price: '$60',
			currunt_price: '$50',
		},
		{
			id: 5,
			thumbnail: product5,
			title: 'Diamond Locket',
			old_price: '$80',
			currunt_price: '$60',
			discount: "20% OFF"
		},
		{
			id: 6,
			thumbnail: product6,
			title: 'Diamond Locket',
			old_price: '$40',
			currunt_price: '$40',
			discount: "20% OFF"
		},
	]
	const settings = {
		dots: false,
		infinite: true,
		arrow: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1760,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					infinite: true,
					dots: false
				}
			},

			{
				breakpoint: 1440,
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

	return (
		<>

			<div className='product_style mt-5'>
				<p className='product_week'>
					<small><BsFillBasket2Fill size={25} className='cart_icon' /> </small>		This Week’s
				</p>
				<div className='d-flex justify-content-between'>
					<h2 className='product_title'>New Arrivals</h2>
					<p className='arrow_btn'>
						<button className=''><HiOutlineArrowLeft /></button>
						<button className=' ms-2'><HiOutlineArrowRight /></button>
					</p>
				</div>
				<Slider {...settings}>

					{data.map((item, i) => (
						<div className='p-2 mt-4' key={i}>
							<div className="thumbnail">
								<Image src={item.thumbnail} alt='' className='thumbnail_img' />
								{item.discount ? <p className='product_budget'>{item.discount} </p> : null}

								<div className="product_action">
									<HiOutlineHeart className='whislist' />
									<button className='product_cart'><Link href='/cart'>Add To Cart</Link></button>
									<HiOutlineEye className='view' />
								</div>


							</div>

							<div className="thumbnail_content">
								<h5 className='thumbnail_title'>{item.title}</h5>
								<div className='product_price'>
									<span className='product_old_price'>{item.old_price}</span>
									<span className='product_currunt_price'>{item.currunt_price}	</span>
								</div>
							</div>
						</div>

					))}



				</Slider>
				<hr className='border border-1 mt-5' style={{ marginRight: '19rem' }} />
			</div>
		</>
	)
}

export default Product