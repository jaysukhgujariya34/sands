
import React from 'react'
import { FaEnvelopeOpen } from 'react-icons/fa'

const Newsletter = () => {
	return (
		<div className="container">
			<div className=" bg_image bg_image_1">
				<div className="news_content">
					<span className='news_title'><i><FaEnvelopeOpen className='mt-1' /></i> Newsletter</span>
					<h2 className='news_head'>Get weekly update</h2>
					<div className="input_group mb-3 news_form">
						<div className='news_inner mt-3'>
							<input type="text" className="form-control" placeholder="example@gmail.com" />
						</div>
						<button className="mt-3" type="button" id="button-addon2">Subscribe</button>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Newsletter