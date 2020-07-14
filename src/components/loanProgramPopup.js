import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const LoanProgramPopup = (props) => {
	const [show, setShow] = useState(true);
	if (props.popData.length === 0) {
		return (
			<div className="modal fade show" style={{ display: props.visiblity }}>s
			</div>
		)
	} else {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full">
				<div class="d-flex flex-column align-item-center justify-content-center">
					<div class="heading_bg">
						<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src="http://devbwp.enerbank.com/dev/wp-content/themes/enerbank/img/closed_icon.svg" width="25"></img>
						</button>
						<h3>Application Methods</h3>
					</div>
					<div class="modal_content">
						<div class="modal_banner"></div>
						<div class="p-5 py-sm-5">
							<div class="small line-height-normal" >
								<h4 class="mb-5 text-center">Applying for loans is fast and convenient using our paperless methods:</h4>
							</div>
							<div class="row">
								<div class="col-md-6 col-lg-3 d-flex flex-column mb-md-5 mb-lg-0">
									<div class="border appMethod rounded">
										<img src="http://devbwp.enerbank.com/dev/wp-content/themes/enerbank/img/mobile-app.svg"></img>
										<div class="text-blue text-center">Mobile Loan App</div>
										<p>With the EnerBank Mobile Loan App, you can work with your customers to apply for a loan right from their home. You can close the sale and have the loan application done before you leave their home. Available on both iOS and Android devices.</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-3 d-flex flex-column mb-md-5 mb-lg-0">
									<div class="border appMethod rounded">
										<img src="http://devbwp.enerbank.com/dev/wp-content/themes/enerbank/img/online-applications.svg"></img>
										<div class="text-blue text-center">Online Applications</div>
										<p>Your customers can submit a loan application online, making the application convenient no matter where and when they want to apply.</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-3 d-flex flex-column">
									<div class="border appMethod rounded">
										<img src="http://devbwp.enerbank.com/dev/wp-content/themes/enerbank/img/loan-by-phone.svg"></img>
										<div class="text-blue text-center">Loan-By-Phone</div>
										<p>Our helpful lending department is ready to assist at any point in the application process, whether it’s from the very beginning, partway through the application, or answering questions after the application is submitted.</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-3 d-flex flex-column">
									<div class="border appMethod rounded">
										<img src="http://devbwp.enerbank.com/dev/wp-content/themes/enerbank/img/contractor-management-system.svg"></img>
										<div class="text-blue text-center">Contractor Management Systems</div>
										<p>We work with several partners to integrate the loan application right into your sales tool.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		)
	}
}
export default LoanProgramPopup