import React from 'react'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlineEye, HiOutlineHeart } from 'react-icons/hi'
import product1 from '../../assest/image/product-14.png'
import product2 from '../../assest/image/product-15.png'
import product3 from '../../assest/image/product-3.png'
import product4 from '../../assest/image/product-1.png'
import product5 from '../../assest/image/product-10.1.png'
import product6 from '../../assest/image/product-11.png'
import product7 from '../../assest/image/product-12.png'
import product8 from '../../assest/image/product-13.png'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'








const NewProduct = () => {
	let data = [
		{
			id: 1,
			thumbnail: product1,
			title: 'Diamond Ring',
			currunt_price: '$25',
			old_price: '$50',
			discount: 50
		},
		{
			id: 2,
			thumbnail: product2,
			title: 'Diamond Earring',
			currunt_price: '$45',
			old_price: '$60',
			discount: 15

		},
		{
			id: 3,
			thumbnail: product3,
			title: 'Diamond Bracelet',
			currunt_price: '$20',
			old_price: '$30',
			discount: 30

		},
		{
			id: 4,
			thumbnail: product4,
			title: 'Diamond  Nacklace',
			currunt_price: '$50',
			old_price: '$25',
			discount: 50
		},
		{
			id: 5,
			thumbnail: product5,
			title: 'Diamond  Bracelet',
			currunt_price: '$40',
			old_price: '$30',
			discount: 10
		},

		{
			id: 6,
			thumbnail: product6,
			title: 'Diamond  LOCKET',
			currunt_price: '$40',
			old_price: '$50',
			discount: 25
		},
		{
			id: 7,
			thumbnail: product7,
			title: 'Diamond Bracelet ',
			currunt_price: '$45',
			old_price: '$60	',
			discount: 15
		},
		{
			id: 8,
			thumbnail: product8,
			title: 'Diamond  Ring',
			currunt_price: '$20',
			old_price: '$30	',
			discount: 30
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
	return (
    <div className="container mt-5">
      <div className="row">
        <p className="product_week">
          <small>
            <BsFillBasket2Fill className="cart_icon" />{" "}
          </small>{" "}
          This Week’s
        </p>
        <div className="d-flex justify-content-between">
          <h2 className="product_title">New Arrivals</h2>
          <p className="arrow_btn">
            <button className="">
              <HiOutlineArrowLeft />
            </button>
            <button className=" ms-2">
              <HiOutlineArrowRight />
            </button>
          </p>
        </div>
      </div>
      <div className="row">
        <Slider {...settings}>
          {/* {data.map((item, i) => (
            <div className="p-2 mt-4" key={i}>
              <div className="thumbnail_image">
                <Image
                  src={item.thumbnail}
                  alt=""
                  className="thumbnail_photo"
                />
                {item.discount ? (
                  <p className="product_budget">{item.discount}% OFF </p>
                ) : null}
              </div>

              <div className="thumbnail_content mt-5">
                <div className="d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked
                    />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input color1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input color2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </div>
                </div>
                <h5 className="thumbnail_title">{item.title}</h5>
                <div className="product_price">
                  <span className="product_old_price">{item.old_price}</span>
                  <span className="product_currunt_price">
                    {item.currunt_price}{" "}
                  </span>
                </div>
                <div className="product_actions">
                  <HiOutlineHeart className="like" />
                  <button className="product_cart1">
                    <Link href="/cart">Add To Cart</Link>
                  </button>
                  <HiOutlineEye className="eye" />
                </div>
              </div>
            </div>
          ))} */}

          <div className="p-2 mt-4">
            <div className="thumbnail_image">
              {/* <Image
                src="https://assets.ajio.com/medias/sys_master/root/20230925/g0Yt/65119255afa4cf41f506b767/-473Wx593H-466630819-pink-MODEL4.jpg"
                alt=""
                className="thumbnail_photo"
              /> */}
              <img src="https://assets.ajio.com/medias/sys_master/root/20230925/g0Yt/65119255afa4cf41f506b767/-473Wx593H-466630819-pink-MODEL4.jpg" width='100%' />
            </div>

            <div className="thumbnail_content mt-5">
              <div className="d-flex justify-content-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input color1"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input color2"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                </div>
              </div>
              <h5 className="thumbnail_title">jewellery</h5>
              {/* <div className="product_price">
                <span className="product_old_price">{item.old_price}</span>
                <span className="product_currunt_price">
                  {item.currunt_price}{" "}
                </span>
              </div> */}
              <div className="product_actions">
                <HiOutlineHeart className="like" />
                <button className="product_cart1">
                  <Link href="/cart">Add To Cart</Link>
                </button>
                <HiOutlineEye className="eye" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default NewProduct