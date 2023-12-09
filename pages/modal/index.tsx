import Image from 'next/image'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { BsCart2 } from 'react-icons/bs'
import { FaSearch, FaStar } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'
import { HiOutlineHeart } from 'react-icons/hi'
import { IoMdCloseCircle } from 'react-icons/io'
import product1 from '../../assest/image/product/product-09.png'
import Service from '../service'

const Modals = () => {
	return (
		<>

			<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered   modal-lg" >
					<div className="modal-content">

						<button type="button" className="btnclose" data-bs-dismiss="modal" aria-label="Close"><IoMdCloseCircle /></button>

						<div className="modal-body">
							<div className="mb-3 ">
								<input type="text" className="form-control position-relative ps-5" id="exampleInputPassword1" placeholder='Write Something....' />
								<FaSearch className='position-absolute  modal_search' />
							</div>
							<div className='d-flex justify-content-between'>
								<p className='modal_title'>24 Result Found</p>
								<p className='modal_title'>View All</p>
							</div>
							<hr className='border border-1' />
							<div className='product_list'>
								<div className='product_thumbnail'>
									<Image src={product1} alt='' />
								</div>
								<div className="product_content">
									<div className='mb-2'>
										<span className="product_rating"><FaStar />
											<FaStar />
											<FaStar />
											<FaStar />
											<FiStar />
										</span>
										<span className='product_review'>100+ Reviews</span>

									</div>
									<h6 className='product_media'>Media Remote</h6>
									<div className='product_price text-start'>
										<span className='product_currunt_price'>$29.99	</span>
										<span className='product_old_price'>$49.99</span>
									</div>
									<div className="product_carts">
										<BsCart2 className='carts' />
										<HiOutlineHeart className='carts' />
									</div>

								</div>
							</div>
							<div className='product_list'>
								<div className='product_thumbnail'>
									<Image src={product1} alt='' />
								</div>
								<div className="product_content">
									<div className='mb-2'>
										<span className="product_rating"><FaStar />
											<FaStar />
											<FaStar />
											<FaStar />
											<FiStar />
										</span>
										<span className='product_review'>100+ Reviews</span>

									</div>
									<h6 className='product_media'>Media Remote</h6>
									<div className='product_price text-start'>
										<span className='product_currunt_price'>$29.99	</span>
										<span className='product_old_price'>$49.99</span>
									</div>
									<div className="product_carts1">
										<BsCart2 className='carts1' />
										<HiOutlineHeart className='carts1' />
									</div>

								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}

export default Modals