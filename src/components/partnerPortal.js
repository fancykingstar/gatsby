import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from "gatsby";

const PartnerPortal = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="partnerPopup">
				<div className="d-flex flex-column align-item-center justify-content-center">
					<div className="heading_bg">
						<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
						</button>
						<h3>PartnerPortal</h3>
					</div>
					<div className="modal_content">
						<div className="modal_banner banner_bg" style={{background:"url(http://devgb.enerbank.com/wp-content/themes/enerbank/img/partner-portal.jpg) no-repeat"}}>
							<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/PartnerPortal_Icon-Wht.svg" alt="partner portal" /></span>
						</div>
						<div className="p-5 py-sm-5">
							<div className="small line-height-normal">                      
								<p className="mb-5">Our online dashboard, PartnerPortal, lets you track performance results through customizable reports, access loan codes and dealer fees, check application statuses, and work with electronic loan documents. Our secure PartnerPortal provides you with 24/7 access to track your results and performance quickly and easily! And, it also gives you the ability to:</p>
							</div>						
						</div>
						<div className="bg-blue start_drc start_drc2">
							<div className="container">
							<div className="row">
								<div className="col-md-4">
									<ul className="portal_list">
										<li>View approvals</li>
										<li>Review dashboard</li>
										<li>Run custom reports</li>
									</ul>
							</div>
							<div className="col-md-4">
									<ul className="portal_list">
										<li>Check application status</li>
										<li>Access loan codes</li>
										<li>Access dealer fees</li>
									</ul>
							</div>
							<div className="col-md-4">
									<ul className="portal_list">
										<li>Request loan documents</li>
										<li>Sign loan documents</li>
									</ul>
							</div>
							</div>
							<div className="row">
								<div className="col-md-10 m-auto">
									<Link to={'#'}>Current Contractors Click Here to Access Partner Portal</Link>
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
export default PartnerPortal
