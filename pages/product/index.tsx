import React, { useEffect } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product1 from "../../assest/image/product-1.png";
import product2 from "../../assest/image/product-2.png";
import product3 from "../../assest/image/product-3.png";
import product5 from "../../assest/image/product-5.png";
import product6 from "../../assest/image/product-6.png";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineEye,
  HiOutlineHeart,
} from "react-icons/hi";
import Link from "next/link";

const Product = () => {
  let data = [
    {
      id: 1,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20230925/EBeq/65119255afa4cf41f506b7e4/-473Wx593H-466630819-pink-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230925/IRDy/65119255afa4cf41f506b770/-473Wx593H-466630819-pink-MODEL6.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230925/dRkI/65119255afa4cf41f506b764/-473Wx593H-466630819-pink-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230925/D5xd/65119255afa4cf41f506b76a/-473Wx593H-466630819-pink-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230925/pCD3/65119255afa4cf41f506b76b/-473Wx593H-466630819-pink-MODEL5.jpg",
      ],
      title: "Diamond Locket",
      old_price: "$60",
      currunt_price: "$50",
    },
    {
      id: 2,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20230925/7KS1/65118efeafa4cf41f5065239/-473Wx593H-466630557-blue-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230925/yrjp/65118efeafa4cf41f50651c5/-473Wx593H-466630557-blue-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230925/vRnR/65118efeafa4cf41f50651c2/-473Wx593H-466630557-blue-MODEL6.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230925/E2wL/65118efeafa4cf41f50651c6/-473Wx593H-466630557-blue-MODEL4.jpg",
      ],
      old_price: "$30",
      title: "Diamond Ring",
      currunt_price: "$24",
      discount: "15% OFF",
    },
    {
      id: 3,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20230421/BrsC/64428791907deb497af936f3/-473Wx593H-466082784-lime-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230421/iVui/64428791907deb497af93682/-473Wx593H-466082784-lime-MODEL6.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230421/bgUo/64428791907deb497af93680/-473Wx593H-466082784-lime-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230421/iVui/64428791907deb497af93682/-473Wx593H-466082784-lime-MODEL6.jpg",
      ],
      title: "Diamond Ring",
      old_price: "$50",
      currunt_price: "$40 ",
      discount: "30% OFF",
    },
    {
      id: 4,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20230421/mAI9/64428590711cf97ba73d1a93/-473Wx593H-466082716-lime-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230421/g41I/64428590711cf97ba73d1a1b/-473Wx593H-466082716-lime-MODEL6.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230421/sKw4/64428590711cf97ba73d1a20/-473Wx593H-466082716-lime-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230421/3Th9/64428590711cf97ba73d1a21/-473Wx593H-466082716-lime-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230421/XaTL/64428590711cf97ba73d1a18/-473Wx593H-466082716-lime-MODEL5.jpg",
      ],
      title: "Diamond Locket",
      old_price: "$60",
      currunt_price: "$50",
    },
    {
      id: 5,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20230519/HfCY/646780e942f9e729d79c9617/-473Wx593H-466170428-multi-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230519/OnBu/646780e942f9e729d79c959c/-473Wx593H-466170428-multi-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230519/zdIl/646780e942f9e729d79c9595/-473Wx593H-466170428-multi-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230519/genA/646780e942f9e729d79c9594/-473Wx593H-466170428-multi-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230519/Iuiy/646780ef42f9e729d79c966d/-473Wx593H-466170428-multi-MODEL5.jpg",
      ],
      title: "Diamond Locket",
      old_price: "$80",
      currunt_price: "$60",
      discount: "20% OFF",
    },
    {
      id: 6,
      thumbnail: [
        "https://assets.ajio.com/medias/sys_master/root/20230628/c52z/649b9eb4a9b42d15c904d0ef/-473Wx593H-465695326-green-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230628/UxOw/649b9eb4a9b42d15c904d069/-473Wx593H-465695326-green-MODEL5.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230628/vXSY/649b9eb4a9b42d15c904d064/-473Wx593H-465695326-green-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230628/5PJF/649b9eb4a9b42d15c904d067/-473Wx593H-465695326-green-MODEL3.jpg",
      ],
      title: "Diamond Locket",
      old_price: "$40",
      currunt_price: "$40",
      discount: "20% OFF",
    },
  ];
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
          dots: false,
        },
      },

      {
        breakpoint: 1440,
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
  //   const maltipaleImg = [
  //     {
  //       imgLink: [
  //         "https://assets.ajio.com/medias/sys_master/root/20230925/dRkI/65119255afa4cf41f506b764/-473Wx593H-466630819-pink-MODEL2.jpg",
  //         "https://assets.ajio.com/medias/sys_master/root/20230925/IRDy/65119255afa4cf41f506b770/-473Wx593H-466630819-pink-MODEL6.jpg",
  //         "https://assets.ajio.com/medias/sys_master/root/20230925/D5xd/65119255afa4cf41f506b76a/-473Wx593H-466630819-pink-MODEL3.jpg",
  //         "https://assets.ajio.com/medias/sys_master/root/20230925/D5xd/65119255afa4cf41f506b76a/-473Wx593H-466630819-pink-MODEL3.jpg",
  //         "https://assets.ajio.com/medias/sys_master/root/20230925/pCD3/65119255afa4cf41f506b76b/-473Wx593H-466630819-pink-MODEL5.jpg",
  //         "https://assets.ajio.com/medias/sys_master/root/20230925/EBeq/65119255afa4cf41f506b7e4/-473Wx593H-466630819-pink-MODEL.jpg",
  //       ],
  //     },
  //   ];

  return (
    <>
      <div className="product_style mt-5">
        <p className="product_week">
          <small>
            <BsFillBasket2Fill size={25} className="cart_icon" />{" "}
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
        <Slider {...settings}>
          {data.map((item, n) => {
            const { thumbnail } = item;

            return (
              <Slider {...settings2} key={n}>
                {thumbnail?.map((item, i) => (
                  <div className="p-2 mt-4" key={i}>
                    <div className="thumbnail">
                      <img src={item} />

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
        <hr className="border border-1 mt-5" style={{ marginRight: "19rem" }} />
      </div>
    </>
  );
};

export default Product;
