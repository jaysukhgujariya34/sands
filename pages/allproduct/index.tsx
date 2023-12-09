import Image from 'next/image'
import React from 'react'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlineEye, HiOutlineHeart } from 'react-icons/hi'
import product1 from '../../assest/image/product-11.png'
import product2 from '../../assest/image/product-12.png'
import product3 from '../../assest/image/product-13.png'
import product4 from '../../assest/image/product-14.png'
import product5 from '../../assest/image/product-15.png'
import product6 from '../../assest/image/product-5.png'
import product7 from '../../assest/image/product-6.png'
import product8 from '../../assest/image/product-2.png'
import product9 from '../../assest/image/product-3.png'
import product10 from '../../assest/image/product-1.png'
import product11 from '../../assest/image/product-6.1.png'
import product12 from '../../assest/image/product-8.png'
import Link from 'next/link'


const AllProduct = () => {
	const data = [
		{
			id: 1,
			thumbnail: product1,
			title: 'Diamond Locket',
			old_price: '$50',
			currunt_price: '$40',
			discount: '20% 0FF'
		},
		{
			id: 2,
			thumbnail: product2,
			title: 'Diamond Bracelet',
			old_price: '$40',
			currunt_price: '$30',
		}, {
			id: 3,
			thumbnail: product3,
			title: 'Diamond Ring',
			old_price: '$60',
			currunt_price: '$45',
			discount: '30% 0FF'
		}, {
			id: 4,
			thumbnail: product4,
			title: 'Diamond Ring',
			old_price: '$80',
			currunt_price: '$60',
		}, {
			id: 5,
			thumbnail: product5,
			title: 'Diamond Earring',
			old_price: '$50',
			currunt_price: '$38',
			discount: '50% 0FF'
		}, {
			id: 6,
			thumbnail: product6,
			title: 'Diamond Locket',
			old_price: '$40',
			currunt_price: '$25',
		}, {
			id: 7,
			thumbnail: product7,
			title: 'Diamond Locket',
			old_price: '$30',
			currunt_price: '$25',
			discount: '40% 0FF'
		}, {
			id: 8,
			thumbnail: product8,
			title: 'Diamond Ring',
			old_price: '$60',
			currunt_price: '$40',
		}, {
			id: 9,
			thumbnail: product9,
			title: 'Diamond Bracelet',
			old_price: '$50',
			currunt_price: '$40',
		}, {
			id: 10,
			thumbnail: product10,
			title: 'Diamond Locket',
			old_price: '$40',
			currunt_price: '$30',
			discount: '15% 0FF'
		}, {
			id: 11,
			thumbnail: product11,
			title: 'Diamond Necklece',
			old_price: '$60',
			currunt_price: '$45',
		},
		{
			id: 12,
			thumbnail: product12,
			title: 'Diamond Necklece',
			old_price: '$80',
			currunt_price: '$60',
		},
	]
	return (
		<>
			<div className="container mt-5">
				<div className="row">
					<p className='product_week'>
						<small><BsFillBasket2Fill size={25} className='cart_icon' /> </small>	 Our Products
					</p>
					<div className='d-flex justify-content-between'>
						<h2 className='product_title'>Explore our Products</h2>

					</div>
				</div>
				<div className="row">
					{data.map((item: any, i: any) => (

						<div className='col-xxl-3 col-lg-4 col-md-6 col-sm-6 p-2 mt-4' key={i}>
							<div className="thumbnail2">
								<Image src={item.thumbnail} alt='' className='thumbnail_img2' />
								{item.discount ? <p className='product_budget1'>{item.discount} </p> : null}

								<div className="product_action">
									<HiOutlineHeart className='whislist' />
									<button className='product_cart'><Link href='/cart'>Add To Cart</Link></button>
									<HiOutlineEye className='view' />
								</div>
							</div>


							<div className="thumbnail_content float-start">
								<h5 className='thumbnail_title'>{item.title}</h5>
								<div className='product_price float-start'>
									<span className='product_old_price'>{item.old_price}</span>
									<span className='product_currunt_price'>{item.currunt_price}</span>
								</div> <br />



								<div className='d-flex mt-4'>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="flexRadioDefault" checked />
									</div>
									<div className="form-check">
										<input className="form-check-input color1" type="radio" name="flexRadioDefault" />
									</div>
									<div className="form-check">
										<input className="form-check-input color2" type="radio" name="flexRadioDefault" />
									</div>
								</div>

							</div>
						</div>
					))}
				</div>
				<div className='text-center'>

					<button className='view_btn mt-5'>View All Product</button>
				</div>

				<hr className='border border-1' />
			</div>
		</>

	)
}

export default AllProduct