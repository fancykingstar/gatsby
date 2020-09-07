import React from 'react';
import { Modal } from 'react-bootstrap';

const Support = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				{/* <div class="d-flex flex-column align-item-center justify-content-center"> */}
					<div class="heading_bg">
						<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
						</button>
						<h3>Support</h3>
					</div>
					<div className="modal_content">
						<div className="p-8 py-sm-5">
							<div className="small line-height-normal">
								<p className="mb-5 text-md">As an exclusive home improvement lender, EnerBank provides you unique
			products and personalized service you won't find anywhere else.</p>
								
							</div>
							<div className="row">
								<div className="col-lg-12">
									<ul className="left-icon-list">
										<li>
											<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Support_Icons_DRM.svg" alt="Support Icon DRM" /></span>
											<h4>Dedicated Relationship Manager</h4>
											<p>Like an extra team member on your crew, looking out for you and your business, your dedicated relationship manager is committed to the success of your business and will give you unparalleled support.</p>                              
										</li>
										<li>
											<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Support_Icons_Marketing_Tools.svg" alt="Marketing Tools" /></span>
											<h4>Marketing Tools</h4>
											<p>The robust EnerBank Dealer Resource Center provides you 24/7 access to high-quality, best-in-class, self-service marketing assets and other resources, including top-notch training designed to make offering payment options easier and more effective.</p>                              
										</li>
										<li>
											<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Support_Icons_On-Demand_Training.svg" alt="On-Demand Training" /></span>
											<h4>On-Demand Training</h4>
											<p>EnerBank USA provides a full suite of professionally-designed training that’s role-specific for owners, admins, and sales reps. Choose from live webinars or on-demand courses to meet your needs and schedule.</p>                              
										</li>
										<li>
											<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Support_Icons_US_Based_Lending.svg" alt="US Based Lending" /></span>
											<h4>U.S Based Lending &amp; Customer Service</h4>
											<p>EnerBank USA serves all 50 states and offers all U.S. based lending and customer service and support.</p>                   
										</li>
									</ul>
								</div>                    
							</div>
							</div>
					</div>
				{/* </div> */}
			</Modal>
		)
	} else {
		return (
			<div className="modal fade show" style={{ display: props.visiblity }}>&nbsp;</div>
		)
	} 
}
export default Support