import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import product1 from '../../assest/image/wishlist/product-01.png'
import product2 from '../../assest/image/wishlist/product-02.png'
import product3 from '../../assest/image/wishlist/product-03.png'
import Footer from '../footer'
import Header from '../haeder'
import Service from '../service'

const Cart = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="d-flex justify-content-between">
                    <h4 className='cart_title'>Your Cart</h4>
                    <Link href='' className='cart_clear'>Clear Shoping Cart</Link>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead className='table-light'>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th></th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='remove_wishlist'> <i><FaTimes /></i></td>
                                <td className='pro_img'>
                                    <Image src={product1} alt='' className='img_pro' />
                                </td>
                                <td><Link href='' className='pro_title'>Wireless PS Handler</Link></td>
                                <td>$124.00</td>
                                <td>
                                    <span onClick={() => setCount(count - 1)} className='qty rounded-circle'>-</span>
                                    <span className='count'>{count}</span>
                                    <span onClick={() => setCount(count + 1)} className='qty rounded-circle'>+</span>
                                </td>
                                <td>
                                    $275.00
                                </td>
                            </tr>
                            <tr>
                                <td className='remove_wishlist'> <i><FaTimes /></i></td>
                                <td className='pro_img'>
                                    <Image src={product2} alt='' className='img_pro' />
                                </td>
                                <td><Link href='' className='pro_title'>Gradient Light Keyboard</Link></td>
                                <td>$124.00</td>
                                <td>
                                    <span onClick={() => setCount(count - 1)} className='qty rounded-circle'>-</span>
                                    <span className='count'>{count}</span>
                                    <span onClick={() => setCount(count + 1)} className='qty rounded-circle'>+</span>
                                </td>
                                <td>
                                    $275.00
                                </td>
                            </tr>
                            <tr>
                                <td className='remove_wishlist'> <i><FaTimes /></i></td>
                                <td className='pro_img'>
                                    <Image src={product3} alt='' className='img_pro' />
                                </td>
                                <td><Link href='' className='pro_title'>HD CC Camera</Link></td>
                                <td>$124.00</td>
                                <td>
                                    <span onClick={() => setCount(count - 1)} className='qty rounded-circle'>-</span>
                                    <span className='count'>{count}</span>
                                    <span onClick={() => setCount(count + 1)} className='qty rounded-circle'>+</span>
                                </td>
                                <td>
                                    $275.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="update_btn">
                    <div className="input_group1">
                        <input placeholder="Enter coupon code" type="text" />
                        <button type="submit" className="axil_btn">Apply</button>

                    </div>
                    <div className="update_cart">
                        <button>Update Cart</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-7 offset-xl-7 offset-lg-10">
                        <div className="order_summery table-responsive" >
                            <h5 className='mb-3'>Order Summary</h5>
                            <table className='table '>
                                <tbody>
                                    <tr className="order_subtotal">
                                        <td>Subtotal</td>
                                        <td>$117.00</td>
                                    </tr>
                                    <tr className="order_shipping">
                                        <td>Shipping</td>
                                        <td>
                                            <div className="input-group">
                                                <input type="radio" id="radio1" name="shipping" checked />
                                                <label htmlFor="radio1" className='ps-3'>Free Shippping</label>
                                            </div>
                                            <div className="input-group">
                                                <input type="radio" id="radio2" name="shipping" />
                                                <label htmlFor="radio2" className='ps-3'>Local: $35.00</label>
                                            </div>
                                            <div className="input-group">
                                                <input type="radio" id="radio3" name="shipping" />
                                                <label htmlFor="radio3" className='ps-3'>Flat rate: $12.00</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="order_tax">
                                        <td>State Tax</td>
                                        <td>$8.00</td>
                                    </tr>
                                    <tr className="order_total">
                                        <td>Total</td>
                                        <td className="text-primary">$125.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link href='/checkout'>
                                <button className='checkout'>Process to Checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Service />
            <Footer />
        </>
    )
}

export default Cart