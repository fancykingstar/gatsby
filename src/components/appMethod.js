import React from 'react';
import { Modal } from 'react-bootstrap';

const AppMethod = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				<div className="d-flex flex-column align-item-center justify-content-center">
					<div className="heading_bg">
						<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
						</button>
						<h3>Application Methods</h3>
					</div>
					<div className="modal_content">
						<div className="modal_banner">
							<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/app-method-icon.svg" alt="application method" /></span>
						</div>
						<div className="p-5 py-sm-5">
							<div className="small line-height-normal" >
								<h4 className="mb-5 text-center">Applying for loans is fast and convenient using our paperless methods:</h4>
							</div>
							<div className="row">
								<div className="col-md-6 col-lg-3 d-flex flex-column mb-md-5 mb-lg-0">
									<div className="border appMethod rounded">
										<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/mobile-app.svg" alt="mobile application" />
										<div className="text-blue text-center">Mobile Loan App</div>
										<p>With the EnerBank Mobile Loan App, you can work with your customers to apply for a loan right from their home. You can close the sale and have the loan application done before you leave their home. Available on both iOS and Android devices.</p>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 d-flex flex-column mb-md-5 mb-lg-0">
									<div className="border appMethod rounded">
										<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/online-applications.svg" alt="online application" />
										<div className="text-blue text-center">Online Applications</div>
										<p>Your customers can submit a loan application online, making the application convenient no matter where and when they want to apply.</p>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 d-flex flex-column">
									<div className="border appMethod rounded">
										<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/loan-by-phone.svg" alt="loan by phone" />
										<div className="text-blue text-center">Loan-By-Phone</div>
										<p>Our helpful lending department is ready to assist at any point in the application process, whether it’s from the very beginning, partway through the application, or answering questions after the application is submitted.</p>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 d-flex flex-column">
									<div className="border appMethod rounded">
										<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/contractor-management-system.svg" alt="contracor management" />
										<div className="text-blue text-center">Contractor Management Systems</div>
										<p>We work with several partners to integrate the loan application right into your sales tool.</p>
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
export default AppMethod
