import React from 'react';
import { Modal } from 'react-bootstrap';
import close_icon from '../images/closed_icon.svg'

const BenefitsLoanProgram = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				{/* <div class="d-flex flex-column align-item-center justify-content-center"> */}
					<div class="heading_bg">
						<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src={close_icon} width="25" alt="close icon" />
						</button>
						<h3 className="h2 font-weight-bold">Benefits of Creating a Loan Program</h3>
					</div>
					<div className="modal_content">
						<div class="p-8 py-sm-5">
							<div class="small line-height-normal">
								<p class="mb-5 text-md">Manufacturers, distributors, and trade groups across the nation have realized a
			strategic partnership with EnerBank is a smart move. As your loan provider, we work with your corporate sales teams and their dealers to maximize results.</p>
								
							</div>
							<div className="row">
								<div className="col-lg-12">
									<ul className="left-icon-list">
										<li>
											<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Benefits_Artboard-01.svg" alt="Benefis Art Board" /></span>
											<h4>Unparalleled Service &amp; Support</h4>
											<p>We take good care of you. Our U.S.-based lending department and customer service professionals give you unparalleled service and support throughout the life of your loan.</p>
										</li>
										<li>
											<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Benefits-02.svg" alt="benefits 2" /></span>
											<h4>Access to Executive Leadership</h4>
											<p>Get direct access to our executive leadership team for calls, visits, and conference attendance and support.</p>                              
										</li>
										<li>
											<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Benefits-03.svg" alt="benefits 3" /></span>
											<h4>Exclusive Home Improvement Lender</h4>
											<p>We only do home improvement loans. In fact, we’ve funded nearly a million projects to the tune of over $9 billion since 2002, using our nation-wide contractor network.</p>                              
										</li>
										<li>
											<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Benefits-04.svg" alt="benefits 4" /></span>
											<h4>Member FDIC</h4>
											<p>We're dependable and secure — as a well-capitalized, Member-FDIC bank, you can count on us to have ready access to capital to lend to help you grow your business today and tomorrow.</p>                              
										</li>
										<li>
											<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Benefits-05.svg" alt="benefits 5" /></span>
											<h4>Private-Label Programs</h4>
											<p>Our private-label loan programs are customized to your market and customers. With EnerBank’s proven methods, your dealers will get more leads, close more sales, and get bigger jobs. We offer selling strategies and support programs that ensure your dealers are successful using your program immediately after training and activation, so you can start seeing results right away.</p>                              
										</li>
										<li>
											<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Benefits-06.svg" alt="benefits 6" /></span>
											<h4>Quick &amp; Easy Application Process</h4>
											<p>Funding the project is super-fast and convenient with our three paperless application methods: Mobile Loan App, Online Loan Application, &amp; Loan-by-Phone. Your customer can receive a credit decision in minutes.</p>                              
										</li>
										<li>
											<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Benefits-07.svg" alt="benefits 7" /></span>
											<h4>On-Demand Training and Marketing Tools</h4>
											<p>The robust EnerBank Dealer Resource Center provides you 24/7 access to high-quality, best-in-class, self-service marketing assets and other resources, including top-notch training designed to make offering payment options easier and more effective. Choose from live webinars or on-demand role-specific courses to meet your needs and schedule.</p>                              
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
export default BenefitsLoanProgram