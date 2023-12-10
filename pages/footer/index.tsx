import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelopeOpen,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import qr from "../../assest/image/footer/qr.jpg";
import playstore from "../../assest/image/footer/play-store.png";
import appstroe from "../../assest/image/footer/app-store.png";
import cart1 from "../../assest/image/footer/cart-1.png";
import cart2 from "../../assest/image/footer/cart-2.png";
import cart3 from "../../assest/image/footer/cart-5.png";

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="footer_width">
              <h5 className="width_title">Support</h5>

              <p>
                South End Circle,
                <br /> near Ramakrishna Hospital, Jayanagar, <br />
                Bengaluru, Karnataka 560011
              </p>
              <ul>
                <li>
                  {" "}
                  <FaRegEnvelopeOpen className="footer_icon" />{" "}
                  ssjewelleryandexport@gmail.com
                </li>
                <li>
                  <FiPhone className="footer_icon" />
                  (+91) 97253-40526
                </li>
                <li>
                  <FaWhatsapp className="footer_icon" />
                  (+91) 9825464055
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-3 col-sm-6">
            <div className="footer_width">
              <h5 className="width_title">Account</h5>
              <ul>
                <li className="navbar_item1">
                  <Link href="" className="navbar_links1">
                    My Account
                  </Link>
                </li>

                <li className="navbar_item1">
                  <Link href="" className="navbar_links1">
                    Login / Register
                  </Link>
                </li>

                <li className="navbar_item1">
                  <Link href="" className="navbar_links1">
                    Cart
                  </Link>
                </li>

                <li className="navbar_item1">
                  <Link href="" className="navbar_links1">
                    Wishlist
                  </Link>
                </li>
                <li className="navbar_item1">
                  <Link href="" className="navbar_links1">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          {/* <div className="col-lg-3 col-sm-6">
            <div className="footer_width">
              <h5 className="width_title">Quick Link</h5>
              <ul>
                <li className="navbar_item1">
                  <Link href="" className="navbar_links1">
                    Privacy Policy
                  </Link>
                </li>

                <li className="navbar_item1">
                  <Link href="" className="navbar_links1">
                    Terms Of Use
                  </Link>
                </li>

                <li className="navbar_item1">
                  <Link href="" className="navbar_links1">
                    FAQ
                  </Link>
                </li>

                <li className="navbar_item1">
                  <Link href="" className="navbar_links1">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer_width">
              <h5 className="width_title">Chat with whatsapp</h5>
              <span>scan qr code </span>
              <div className="btn_group">
                <div className="qr">
                  <Image src={qr} alt="" />
                </div>
                {/* <div className="app_link">
                  <Image src={playstore} alt="" className="app" />
                  <Image src={appstroe} alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-1" />
        <div className="row align-item-center copy_right">
          <div className="col-lg-4 col-md-12">
            <p className="social">
              <Link href="">
                <FaFacebookF />
              </Link>
              <Link href="">
                <FaInstagram />
              </Link>
              <Link href="">
                <FaTwitter />
              </Link>
              <Link href="">
                <FaLinkedinIn />
              </Link>
              <Link href="">
                <IoLogoDiscord />
              </Link>
            </p>
          </div>
          <div className="col-lg-4 col-md-12 d-flex justify-content-center">
            <p className="quick_link">
              © {new Date().getFullYear()}. All rights reserved by Axilthemes.
            </p>
          </div>
          <div className="col-lg-4 col-md-12 ">
            <div className="paymant_img">
              <span className="quick_link">Accept For</span>
              <Image src={cart1} alt="" />
              <Image src={cart2} alt="" />
              <Image src={cart3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
