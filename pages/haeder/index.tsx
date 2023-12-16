import Image from "next/image";
import React, { useState } from "react";
import { Button, Collapse, Dropdown, Modal, Offcanvas } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { HiOutlineHeart, HiOutlineMenu } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../assest/image/logo.png";
import Link from "next/link";
import Modals from "../modal";
import product1 from "../../assest/image/wishlist/product-01.png";
import product2 from "../../assest/image/wishlist/product-02.png";
import product3 from "../../assest/image/wishlist/product-03.png";

import { FaStar, FaTimes } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [count, setCount] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{display:'flex',justifyContent:'space-between',width:'100%',alignItems:'center',padding:'10px 20px'}}>
      <div className=" d-flex justify-content-start-50">
        <Image src={logo} alt="logo" className="logo w-25 h-25"  />
      </div>
      <div className="container navs">
        <ul className="nav justify-content-end p-2">
          <li className="navbar_item">
            <Link href="" className="navbar_links">
              <b>Home</b>
            </Link>
          </li>

          <li className="navbar_item">
            <Link href="" className="navbar_links">
              <b>Shop</b>
            </Link>
          </li>
          <li className="navbar_item">
            <Link href="" className="navbar_links">
              <b>Pages</b>
            </Link>
          </li>
          <li className="navbar_item">
            <Link href="" className="navbar_links">
              <b>About</b>
            </Link>
          </li>
          <li className="navbar_item">
            <div className="drop_menu">
              <Link href="" className="navbar_links">
                <b>Blog</b>
              </Link>
            </div>
          </li>
          <li className="navbar_item">
            <Link href="" className="navbar_links">
              <b>Contect</b>
            </Link>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-end">
        <div onClick={handleShow}>
          <HiOutlineMenu className="hum_burger" />
        </div>

        <div className="mt-3">
          <Offcanvas
            show={show}
            onHide={handleClose}
            style={{ width: "17rem" }}
            placement={"end"}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Image src={logo} alt="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="nav d-block">
                <li className="mb-3">
                  <div className="drop_menu">
                    <Link
                      href=""
                      className="navbar_links text-secondary fw-normal text-white	"
                      aria-controls="example-collapse-text"
                    >
                      Home
                    </Link>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="drop_menu">
                    <Link
                      href=""
                      className="navbar_links text-secondary fw-normal text-white	"
                      onClick={() => setOpen1(!open1)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open1}
                    >
                      <b>Shop</b>
                    </Link>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="drop_menu">
                    <Link
                      href=""
                      className="navbar_links text-secondary fw-bold text-white	"
                    >
                      Pages
                    </Link>
                  </div>
                </li>
                <li className="  mb-3">
                  <Link
                    href=""
                    className="navbar_links text-secondary fw-bold text-white	"
                  >
                    About
                  </Link>
                </li>
                <li className="  mb-3">
                  <div className="drop_menu">
                    <Link
                      href=""
                      className="navbar_links text-secondary fw-bold text-white	"
                    >
                      bold
                    </Link>
                  </div>
                </li>
                <li className="  mb-3">
                  <Link
                    href=""
                    className="navbar_links text-secondary fw-bold text-white	"
                  >
                    Contect
                  </Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
      <Offcanvas
        className="back_drop_canvas"
        show={show1}
        onHide={() => setShow1(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="canvas_title">
            Cart Review
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="border border-1 border-secondary" />
        <Offcanvas.Body>
          <ul className="cart_item_list">
            <li className="cart_item">
              <div className="item_content">
                <span className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="rating_number">(64)</span>
                <h3 className="item_title">Wireless PS Handler</h3>
                <span className="item_price">$155.00</span>
                <div className="item_qty">
                  <span
                    onClick={() => setCount(count - 1)}
                    className="qtys rounded-circle"
                  >
                    -
                  </span>
                  <span className="count">{count}</span>
                  <span
                    onClick={() => setCount(count + 1)}
                    className="qtys rounded-circle"
                  >
                    +
                  </span>
                </div>
              </div>
            </li>
            <li className="cart_item">
              <div className="item_img">
                <Image src={product2} alt="game" />
                <button className="cls_btn">
                  <FaTimes />
                </button>
              </div>
              <div className="item_content">
                <span className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="rating_number">(4)</span>
                <h3 className="item_title">Gradient Light Keyboard</h3>
                <span className="item_price">$255.00</span>
                <div className="item_qty">
                  <span
                    onClick={() => setCount(count - 1)}
                    className="qtys rounded-circle"
                  >
                    -
                  </span>
                  <span className="count">{count}</span>
                  <span
                    onClick={() => setCount(count + 1)}
                    className="qtys rounded-circle"
                  >
                    +
                  </span>
                </div>
              </div>
            </li>
            <li className="cart_item">
              <div className="item_img">
                <Image src={product3} alt="game" />
                <button className="cls_btn">
                  <FaTimes />
                </button>
              </div>
              <div className="item_content">
                <span className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="rating_number">(6)</span>
                <h3 className="item_title">HD CD Camera</h3>
                <span className="item_price">$200.00</span>
                <div className="item_qty">
                  <span
                    onClick={() => setCount(count - 1)}
                    className="qtys rounded-circle"
                  >
                    -
                  </span>
                  <span className="count">{count}</span>
                  <span
                    onClick={() => setCount(count + 1)}
                    className="qtys rounded-circle"
                  >
                    +
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div className="cart_footer">
            <h3 className="cart_total">
              <span>Subtotal:</span>
              <span>$610.00</span>
            </h3>
            <div className="group-btn text-center">
              <Link href="/cart" className="cart_btn">
                View Cart
              </Link>
              <Link href="/checkout" className="cart_btn_1">
                Checkout
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
