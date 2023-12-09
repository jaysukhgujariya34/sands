import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import product1 from '../../assest/image/wishlist/product-01.png'
import product2 from '../../assest/image/wishlist/product-02.png'
import product3 from '../../assest/image/wishlist/product-03.png'
import Footer from '../footer'
import Header from '../haeder'
import Service from '../service'


const WhisList = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="d-flex justify-content-between">
                    <h4 className='whis_title'>My Whis List on eTrade</h4>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead className='table-light'>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th></th>
                                <th>Unit Price</th>
                                <th>Stock Status</th>
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
                                <td>Stock In</td>
                                <td className='text-right'>
                                    <button className='cart'>Add To Cart</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='remove_wishlist'> <i><FaTimes /></i></td>
                                <td className='pro_img'>
                                    <Image src={product2} alt='' className='img_pro' />
                                </td>
                                <td><Link href='' className='pro_title'>Gradient Light Keyboard</Link></td>
                                <td>$124.00</td>
                                <td>Stock In</td>
                                <td className='text-right'>
                                    <button className='cart'>Add To Cart</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='remove_wishlist'> <i><FaTimes /></i></td>
                                <td className='pro_img'>
                                    <Image src={product3} alt='' className='img_pro' />
                                </td>
                                <td><Link href='' className='pro_title'>HD CC Camera</Link></td>
                                <td>$124.00</td>
                                <td>Stock In</td>
                                <td className='text-right'>
                                    <button className='cart'>Add To Cart</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Service />
            <Footer />

        </>
    )
}

export default WhisList