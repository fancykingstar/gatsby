import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DealerResource = (props) => {
	const [show, setShow] = useState(true);
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="dealerPopup">
				<div className="d-flex flex-column align-item-center justify-content-center">
					<div className="heading_bg">
						<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" />
						</button>
						<h3>Dealer Resource Center</h3>
					</div>
					<div className="modal_content">
						<div className="modal_banner"><p>A powerful tool for successfully growing your business.</p></div>
						<div className="p-5 py-sm-5">
							<div className="small line-height-normal" style={{lineHeight: '22px'}}>
								<h4 className="mb-3 text-center text-blue">Quick, Easy, and Always Available</h4>
								<p className="mb-5">The convenient Dealer Resource Center provides you 24/7 access to high-quality, best-in-class, self-service marketing assets and other resources, including top-notch training designed to make offering payment options easier and more effective.</p>
							</div>
							<div className="row">
								<div className="col-lg-4 d-flex flex-column mb-md-5 mb-lg-0">
									<div className="border dealerResource rounded">
										<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/mobile-app.svg" />
										<div className="text-blue text-center">Education</div>
										<p>Grab on-demand courses, tips ‘n’ tricks, and role-specific training to nail those best practices and strategies that’ll do wonders for your bottom line.</p>
										<a href="#">Learn More</a>
									</div>
								</div>
								<div className="col-lg-4 d-flex flex-column mb-md-5 mb-lg-0">
									<div className="border dealerResource rounded">
										<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/tools-icon.svg"/>
										<div className="text-blue text-center">Tools</div>
										<p>Find helpful reference guides, eligible improvement lists, business growth calculators, and other stuff you may need as you offer payment options that boost your business.</p>
										<a href="#">Learn More</a>  
									</div>
								</div>
								<div className="col-lg-4 d-flex flex-column">
									<div className="border dealerResource rounded">
										<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/education-icon.svg"/>
										<div className="text-blue text-center">Marketing</div>
										<p>Free, professionally-designed marketing templates for creating your own custom-branded customerfacing messaging with just a few clicks — including flyers, emails, showroom ads, and more!</p>
										<a href="#">Learn More</a>
									</div>
								</div>
							</div>
							</div>
					</div>
				</div>
			</Modal>
		)
	} else {
		return (
			<div className="modal fade show" style={{ display: props.visiblity }}>&nbsp;
			</div>
		)
	} 
}
export default DealerResource