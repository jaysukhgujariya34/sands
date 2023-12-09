import Image from 'next/image'
import React, { useState } from 'react'
import { Button, Collapse, Dropdown, Modal, Offcanvas } from 'react-bootstrap'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineHeart, HiOutlineMenu } from 'react-icons/hi'
import { BsCart2 } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import logo from '../../assest/image/logo.png'
import Link from 'next/link'
import Modals from '../modal'
import product1 from '../../assest/image/wishlist/product-01.png'
import product2 from '../../assest/image/wishlist/product-02.png'
import product3 from '../../assest/image/wishlist/product-03.png'

import { FaStar, FaTimes } from 'react-icons/fa'

const Header = () => {
	const [show, setShow] = useState(false);
	const [show1, setShow1] = useState(false)
	const [open, setOpen] = useState(false);
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [count, setCount] = useState(0)


	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div className="container w-100">
				<div className="row d-flex align-items-center header">
					<div className="col-md-4 col-12 d-flex header_drop">
						<Dropdown>
							<Dropdown.Toggle variant="" className='border border-1' id="dropdown-basic">
								USD
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href="">USD</Dropdown.Item>
								<Dropdown.Item href="">AUD</Dropdown.Item>
								<Dropdown.Item href="">EUR</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown>
							<Dropdown.Toggle variant="" className='border border-1 ms-3' id="dropdown-basic">
								EN
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href="">EN</Dropdown.Item>
								<Dropdown.Item href="">ARB</Dropdown.Item>
								<Dropdown.Item href="">SPN</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="col-md-4 col-5 d-flex justify-content-center">
						<Image src={logo} alt='logo' className='logo' />
					</div>
					<div className="col-md-4 col-7 ">
						<ul className='d-flex action_list'>
							<li data-bs-toggle="modal" data-bs-target="#exampleModal">
								<CiSearch />
							</li>
							<li><Link href='/wishlist'><HiOutlineHeart /></Link></li>
							<li onClick={() => setShow1(true)} className="me-2 position-relative"><BsCart2 />
								<span className="position-absolute badge rounded-circle bg-primary">
									3
								</span>
							</li>
							<li className='ps-0 ms-0'><BiUser /></li>
							<li onClick={handleShow}> <HiOutlineMenu className='hum_burger' /> </li>

							<div className='mt-3'>


								<Offcanvas show={show} onHide={handleClose} style={{ width: '17rem' }} placement={'end'}>
									<Offcanvas.Header closeButton>
										<Offcanvas.Title>
											<Image src={logo} alt='logo'></Image>

										</Offcanvas.Title>
									</Offcanvas.Header>
									<Offcanvas.Body>
										<ul className="nav d-block">
											<li className="mb-3">
												<div className="drop_menu">
													<Link href='' className='navbar_links text-secondary fw-normal' onClick={() => setOpen(!open)}
														aria-controls="example-collapse-text"
														aria-expanded={open}><b>Home<MdOutlineKeyboardArrowDown /></b></Link>
													<Collapse in={open}>
														<div id="example-collapse-text">
															<Link className="links" href="#">Home - Electronics</Link>
															<Link className="links" href="#">Home - NFT</Link>
															<Link className="links" href="#">Home - Fashion</Link>
															<Link className="links" href="#">Home - Jewellery</Link>
															<Link className="links" href="#">Home - Furniture</Link>
															<Link className="links" href="#">Home - Multipurpose</Link>
															<Link className="links" href="#">RTL Version</Link>
														</div>
													</Collapse>
												</div>
											</li>
											<li className="mb-3">
												<div className="drop_menu">
													<Link href='' className='navbar_links text-secondary fw-normal' onClick={() => setOpen1(!open1)}
														aria-controls="example-collapse-text"
														aria-expanded={open1}><b>Shop<MdOutlineKeyboardArrowDown /></b></Link>
													<Collapse in={open1}>
														<div>
															<Link className="links" href="#">Shop With Sidebar</Link>
															<Link className="links" href="#">Shop no Sidebar</Link>
															<Link className="links" href="#">Product Variation 1</Link>
															<Link className="links" href="#">Product Variation 2</Link>
															<Link className="links" href="#">Product Variation 3</Link>
															<Link className="links" href="#">Product Variation 4</Link>
															<Link className="links" href="#">Product Variation 5</Link>
															<Link className="links" href="#">Product Variation 6</Link>
															<Link className="links" href="#">Product Variation 7</Link>
														</div>
													</Collapse>
												</div>
											</li>
											<li className="mb-3">
												<div className="drop_menu">
													<Link href='' className='navbar_links text-secondary fw-bold' onClick={() => setOpen2(!open2)}
														aria-controls="example-collapse-text"
														aria-expanded={open2}>Pages <MdOutlineKeyboardArrowDown /></Link>
													<Collapse in={open2} >
														<div >
															<Link className="links" href="#">Wishlist</Link>
															<Link className="links" href="#">Cart</Link>
															<Link className="links" href="#">Checkout</Link>
															<Link className="links" href="#">Account</Link>
															<Link className="links" href="#">Sign Up</Link>
															<Link className="links" href="#">Sign In</Link>
															<Link className="links" href="#">Forgot Password</Link>
															<Link className="links" href="#">Reset Password</Link>
															<Link className="links" href="#">Privacy Policy</Link>
															<Link className="links" href="#">Coming Soon</Link>
															<Link className="links" href="#">404 Error</Link>
															<Link className="links" href="#">Typography   </Link>
														</div>
													</Collapse>
												</div>
											</li>
											<li className="  mb-3">
												<Link href='' className='navbar_links text-secondary fw-bold'>About</Link>
											</li>
											<li className="  mb-3">
												<div className="drop_menu">
													<Link href='' className='navbar_links text-secondary fw-bold' onClick={() => setOpen3(!open3)}
														aria-controls="example-collapse-text"
														aria-expanded={open3}>bold <MdOutlineKeyboardArrowDown /></Link>
													<Collapse in={open3}>
														<div >
															<Link className="links" href="#">Blog List</Link>
															<Link className="links" href="#">Blog Grid</Link>
															<Link className="links" href="#">Standard Post</Link>
															<Link className="links" href="#">Gallery Post</Link>
															<Link className="links" href="#">Video Post</Link>
															<Link className="links" href="#">Audio Post</Link>
															<Link className="links" href="#">Quote Post</Link>
														</div>
													</Collapse>
												</div>

											</li>
											<li className="  mb-3">
												<Link href='' className='navbar_links text-secondary fw-bold'>Contect</Link>
											</li>
										</ul>
									</Offcanvas.Body>
								</Offcanvas>
							</div>
						</ul>
					</div>
				</div>
			</div >
			<Modals />

			<hr className='border border-1 m-0 p-0' />
			<div className="container navs">
				<ul className="nav justify-content-center p-2">
					<li className="navbar_item">
						<div className="drop_menu">
							<Link href='' className='navbar_links'><b>Home<MdOutlineKeyboardArrowDown color='gray' /></b></Link>
							<div className="menu_content">
								<Link className="links" href="#">Home - Electronics</Link>
								<Link className="links" href="#">Home - NFT</Link>
								<Link className="links" href="#">Home - Fashion</Link>
								<Link className="links" href="#">Home - Jewellery</Link>
								<Link className="links" href="#">Home - Furniture</Link>
								<Link className="links" href="#">Home - Multipurpose</Link>
								<Link className="links" href="#">RTL Version</Link>
							</div>
						</div>
					</li>

					<li className="navbar_item">
						<div className="drop_menu">
							<Link href='' className='navbar_links'><b>Shop<MdOutlineKeyboardArrowDown color='gray' /></b></Link>
							<div className="menu_content">
								<Link className="links" href="#">Shop With Sidebar</Link>
								<Link className="links" href="#">Shop no Sidebar</Link>
								<Link className="links" href="#">Product Variation 1</Link>
								<Link className="links" href="#">Product Variation 2</Link>
								<Link className="links" href="#">Product Variation 3</Link>
								<Link className="links" href="#">Product Variation 4</Link>
								<Link className="links" href="#">Product Variation 5</Link>
								<Link className="links" href="#">Product Variation 6</Link>
								<Link className="links" href="#">Product Variation 7</Link>
							</div>
						</div>

					</li>
					<li className="navbar_item">
						<div className="drop_menu">
							<Link href='' className='navbar_links'><b>Pages<MdOutlineKeyboardArrowDown color='gray' /></b></Link>
							<div className="menu_content">
								<Link className="links" href="#">Wishlist</Link>
								<Link className="links" href="#">Cart</Link>
								<Link className="links" href="#">Checkout</Link>
								<Link className="links" href="#">Account</Link>
								<Link className="links" href="#">Sign Up</Link>
								<Link className="links" href="#">Sign In</Link>
								<Link className="links" href="#">Forgot Password</Link>
								<Link className="links" href="#">Reset Password</Link>
								<Link className="links" href="#">Privacy Policy</Link>
								<Link className="links" href="#">Coming Soon</Link>
								<Link className="links" href="#">404 Error</Link>
								<Link className="links" href="#">Typography   </Link>
							</div>
						</div>
					</li>
					<li className="navbar_item">
						<Link href='' className='navbar_links'><b>About</b></Link>
					</li>
					<li className="navbar_item">
						<div className="drop_menu">
							<Link href='' className='navbar_links'><b>Blog<MdOutlineKeyboardArrowDown color='gray' /></b></Link>
							<div className="menu_content">
								<Link className="links" href="#">Blog List</Link>
								<Link className="links" href="#">Blog Grid</Link>
								<Link className="links" href="#">Standard Post</Link>
								<Link className="links" href="#">Gallery Post</Link>
								<Link className="links" href="#">Video Post</Link>
								<Link className="links" href="#">Audio Post</Link>
								<Link className="links" href="#">Quote Post</Link>

							</div>
						</div>

					</li>
					<li className="navbar_item">
						<Link href='' className='navbar_links'><b>Contect</b></Link>
					</li>
				</ul>
			</div>
			<Offcanvas className='back_drop_canvas' show={show1} onHide={() => setShow1(false)} placement='end'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title className='canvas_title'>Cart Review</Offcanvas.Title>
				</Offcanvas.Header>
				<hr className='border border-1 border-secondary' />
				<Offcanvas.Body>
					<ul className='cart_item_list'>
						<li className='cart_item'>
							<div className="item_img">
								<Image src={product1} alt='game' />
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
								<span className='rating_number'>(64)</span>
								<h3 className="item_title">Wireless PS Handler</h3>
								<span className='item_price'>$155.00</span>
								<div className="item_qty">
									<span onClick={() => setCount(count - 1)} className='qtys rounded-circle'>-</span>
									<span className='count'>{count}</span>
									<span onClick={() => setCount(count + 1)} className='qtys rounded-circle'>+</span>
								</div>
							</div>
						</li>
						<li className='cart_item'>
							<div className="item_img">
								<Image src={product2} alt='game' />
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
								<span className='rating_number'>(4)</span>
								<h3 className="item_title">Gradient Light Keyboard</h3>
								<span className='item_price'>$255.00</span>
								<div className="item_qty">
									<span onClick={() => setCount(count - 1)} className='qtys rounded-circle'>-</span>
									<span className='count'>{count}</span>
									<span onClick={() => setCount(count + 1)} className='qtys rounded-circle'>+</span>
								</div>
							</div>
						</li>
						<li className='cart_item'>
							<div className="item_img">
								<Image src={product3} alt='game' />
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
								<span className='rating_number'>(6)</span>
								<h3 className="item_title">HD CD Camera</h3>
								<span className='item_price'>$200.00</span>
								<div className="item_qty">
									<span onClick={() => setCount(count - 1)} className='qtys rounded-circle'>-</span>
									<span className='count'>{count}</span>
									<span onClick={() => setCount(count + 1)} className='qtys rounded-circle'>+</span>
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
							<Link href='/cart' className='cart_btn'>View Cart</Link>
							<Link href='/checkout' className='cart_btn_1'>Checkout</Link>

						</div>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	)
}

export default Header