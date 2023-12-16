import React, { useState } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product_1 from "../../assest/image/product-6.1.png";
import product2 from "../../assest/image/product-8.png";
import product3 from "../../assest/image/product-9.png";
import product_4 from "../../assest/image/product-9.1.png";
import product5 from "../../assest/image/product-10.1.png";
import product6 from "../../assest/image/product-11.png";
import product7 from "../../assest/image/product-12.png";
import product8 from "../../assest/image/product-13.png";
import product9 from "../../assest/image/product-14.png";
import StarRatings from "react-star-ratings";
import dynamic from "next/dynamic";

import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineEye,
  HiOutlineHeart,
} from "react-icons/hi";
import Link from "next/link";

const ProductMonth = () => {
  let data = [
    {
      id: 1,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20231011/7HJh/6525ad38ddf779151931fb8f/-473Wx593H-466695757-red-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/L2Jn/6525ad38ddf779151931fb0a/-473Wx593H-466695757-red-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/9bTX/6525ad38ddf779151931faff/-473Wx593H-466695757-red-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/lp6o/6525ad38ddf779151931fb13/-473Wx593H-466695757-red-MODEL4.jpg",
      ],
      title: "Diamond Necklece",
      currunt_price: "$30",
      old_price: "$50",
      rating: 5,
    },
    {
      id: 2,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20231006/4PuJ/651f2173afa4cf41f52b6501/-473Wx593H-466678625-pink-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231006/qVcX/651f2173afa4cf41f52b6487/-473Wx593H-466678625-pink-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231006/NOeI/651f2173afa4cf41f52b6485/-473Wx593H-466678625-pink-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231006/RvvV/651f2173afa4cf41f52b648b/-473Wx593H-466678625-pink-MODEL5.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231006/Th8m/651f2173afa4cf41f52b6482/-473Wx593H-466678625-pink-MODEL6.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231006/gkPB/651f2173afa4cf41f52b648a/-473Wx593H-466678625-pink-MODEL7.jpg",
      ],
      title: "Diamond Necklece",
      currunt_price: "$80",
      old_price: "$100",
      rating: 4,
    },
    {
      id: 3,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20230922/H2JZ/650ca4f2afa4cf41f5fae01a/-473Wx593H-466614755-seagreen-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/ymsJ/650ca4f2afa4cf41f5fadfa7/-473Wx593H-466614755-seagreen-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/b6zL/650ca4f2afa4cf41f5fadf9c/-473Wx593H-466614755-seagreen-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/1xnN/650ca4f2afa4cf41f5fadfa2/-473Wx593H-466614755-seagreen-MODEL5.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/4Vld/650ca4f2afa4cf41f5fadfa0/-473Wx593H-466614755-seagreen-MODEL6.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/QJsm/650ca4f2afa4cf41f5fadf9a/-473Wx593H-466614755-seagreen-MODEL7.jpg",
      ],
      title: "Diamond Necklece Earring",
      currunt_price: "$40",
      rating: 4,
    },
    {
      id: 4,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20230922/lTqs/650ca759afa4cf41f5fafc45/-473Wx593H-466614950-seagreen-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/UVEE/650ca759afa4cf41f5fafbca/-473Wx593H-466614950-seagreen-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/4QgK/650ca759afa4cf41f5fafbd2/-473Wx593H-466614950-seagreen-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/DkJh/650ca759afa4cf41f5fafbd4/-473Wx593H-466614950-seagreen-MODEL5.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/fUR3/650ca759afa4cf41f5fafbd5/-473Wx593H-466614950-seagreen-MODEL6.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/qLfP/650ca759afa4cf41f5fafbc9/-473Wx593H-466614950-seagreen-MODEL7.jpg",
      ],
      title: "Diamond  Earring",
      currunt_price: "$30",
      old_price: "$35",
      rating: 5,
    },
    {
      id: 5,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20230922/lTqs/650ca759afa4cf41f5fafc45/-473Wx593H-466614950-seagreen-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/UVEE/650ca759afa4cf41f5fafbca/-473Wx593H-466614950-seagreen-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/4QgK/650ca759afa4cf41f5fafbd2/-473Wx593H-466614950-seagreen-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/DkJh/650ca759afa4cf41f5fafbd4/-473Wx593H-466614950-seagreen-MODEL5.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/fUR3/650ca759afa4cf41f5fafbd5/-473Wx593H-466614950-seagreen-MODEL6.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230922/qLfP/650ca759afa4cf41f5fafbc9/-473Wx593H-466614950-seagreen-MODEL7.jpg",
      ],
      title: "Diamond  Bracelet",
      currunt_price: "$40",
      rating: 5,
    },

    {
      id: 6,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20231011/7HJh/6525ad38ddf779151931fb8f/-473Wx593H-466695757-red-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/L2Jn/6525ad38ddf779151931fb0a/-473Wx593H-466695757-red-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/9bTX/6525ad38ddf779151931faff/-473Wx593H-466695757-red-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/lp6o/6525ad38ddf779151931fb13/-473Wx593H-466695757-red-MODEL4.jpg",
      ],
      title: "Diamond  LOCKET",
      currunt_price: "$80",
      rating: 4,
    },
    {
      id: 7,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20231011/7HJh/6525ad38ddf779151931fb8f/-473Wx593H-466695757-red-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/L2Jn/6525ad38ddf779151931fb0a/-473Wx593H-466695757-red-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/9bTX/6525ad38ddf779151931faff/-473Wx593H-466695757-red-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/lp6o/6525ad38ddf779151931fb13/-473Wx593H-466695757-red-MODEL4.jpg",
      ],
      title: "Denim Black Jacket ",
      currunt_price: "$20",
      old_price: "$40",
      rating: 4,
    },
    {
      id: 8,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20231011/7HJh/6525ad38ddf779151931fb8f/-473Wx593H-466695757-red-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/L2Jn/6525ad38ddf779151931fb0a/-473Wx593H-466695757-red-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/9bTX/6525ad38ddf779151931faff/-473Wx593H-466695757-red-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/lp6o/6525ad38ddf779151931fb13/-473Wx593H-466695757-red-MODEL4.jpg",
      ],
      title: "Diamond  Bracelet",
      currunt_price: "$30",
      rating: 4,
    },
    {
      id: 9,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20231011/7HJh/6525ad38ddf779151931fb8f/-473Wx593H-466695757-red-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/L2Jn/6525ad38ddf779151931fb0a/-473Wx593H-466695757-red-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/9bTX/6525ad38ddf779151931faff/-473Wx593H-466695757-red-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20231011/lp6o/6525ad38ddf779151931fb13/-473Wx593H-466695757-red-MODEL4.jpg",
      ],
      title: "Diamond  Ring",
      currunt_price: "$40",
      old_price: "$60",
      rating: 5,
    },
  ];
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
          dots: false,
        },
      },

      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const StarRatings = dynamic(() => import("react-star-ratings"), {
    ssr: false,
  });

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Remove the default arrow icons
    // prevArrow: null,
    // nextArrow: null,
  };

  return (
    <>
      <div className="container mt-5">
        <p className="product_week">
          <small>
            <BsFillBasket2Fill size={25} className="cart_icon" />{" "}
          </small>{" "}
          This Month
        </p>
        <div className="d-flex justify-content-between">
          <h2 className="product_title">Best Sellers</h2>
          <p className="arrow_btn">
            <button className="">
              <HiOutlineArrowLeft />
            </button>
            <button className=" ms-2">
              <HiOutlineArrowRight />
            </button>
          </p>
        </div>
        <Slider {...settings}>
          {data.map((item, n) => {
            const { thumbnail } = item;

            return (
              <Slider {...settings2} key={n}>
                {thumbnail?.map((item, i) => (
                  <div className="p-2 mt-4 " key={i}>
                    <div className="thumbnail">
                      <img src={item}  width="100%" />

                      <div className="product_action">
                        <HiOutlineHeart className="whislist" />
                        <button className="product_cart">
                          <Link href="/cart">Add To Cart</Link>
                        </button>
                        <HiOutlineEye className="view" />
                      </div>
                    </div>

                    {/* <div className="thumbnail_content">
                <h5 className="thumbnail_title">{item.title}</h5>
                <div className="product_price">
                  <span className="product_old_price">{item.old_price}</span>
                  <span className="product_currunt_price">
                    {item.currunt_price}{" "}
                  </span>
                </div>
              </div> */}
                  </div>
                ))}
              </Slider>
            );
          })}
        </Slider>
        <hr className="border border-1 mt-5" />
      </div>
    </>
  );
};

export default ProductMonth;
