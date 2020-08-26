import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion';
// accordian
const blockElements = {
    animator: 'accordion-animator',
    content: 'accordion-content',
    panel: 'accordion-panel',
    label: 'accordion-title',
}

const LoanType = (props) => {
	
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				<div className="heading_bg">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
						<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
					</button>
					<h2 className="text-white font-weight-bold">Business Growth Calculator</h2>
				</div>
				<div className="modal_content">
					<div className="p-4 pb-0 pt-sm-4">
					
						{/* Start Careers Area */}
						<section className="service-area">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-12 header-text mb-4">
										<h2 className="mb-20 text-center"><span>Loan Types</span></h2>
										<p className="text-md"> Research shows that 50% of home improvement projects above $5,000 are financed in some way. If you aren't offering your customers payment options, you could be leaving half of the business on the table — to be picked up by your competitors.</p>
										<p className="text-blue text-md">Offering payment options gives your customers greater spending power to get the project they want...when they want it!</p>
									</div>
								</div>
								<div className="p-4 py-sm-3">									
									{/* Collapsed List */}
									<Tabbordion blockElements={blockElements} animateContent={'height'} mode={'toggle'} className="accordion loan_offer mx-4 mx-lg-5" name="accordion">
										<TabPanel>
											<TabLabel className="d-block w-100 text-left btn btn-link collapsed">Same-As-Cash Loans</TabLabel>
											<TabContent>
												<div class="card-body">
													<h4>ONE OF YOUR MOST IMPORTANT TOOLS</h4>
													<p>The Same-As-Cash Loan (SAC) from EnerBank USA® makes closing deals, upselling, and delighting your customers an absolute breeze. We call it “Same as Cash,” but really, it’s better than cash, because it’s a short-term lending solution with no interest and no monthly payment required during the “same-as-cash” period — which means your customer can use the cash they have for other stuff.</p>
												</div>	
											</TabContent>
										</TabPanel>

										<TabPanel>
											<TabLabel className="d-block w-100 text-left btn btn-link collapsed">Reduced Interest Loans</TabLabel>
											<TabContent>
												<div class="card-body">
													<h4>WHO DOESN’T LIKE LOW PAYMENTS?</h4>
													<p>The Reduced Interest Loan (RIL) is half of your payment options one-two punch (the other half is the Same-As-Cash Loan). These two choices should always be offered together, like peanut butter and jelly. A RIL is just like it sounds — a lower interest rate loan that’s set up for a longer-term. Your customer pays back the RIL through easy monthly payments, helping them get the home improvement project they want right away.</p>
												</div>
											</TabContent>
										</TabPanel>

										<TabPanel>
											<TabLabel className="d-block w-100 text-left btn btn-link collapsed">Zero Interest Loans</TabLabel>
											<TabContent>
												<div class="card-body">
													<h4>BE A ZERO HERO</h4>
													<p>Zero interest is a mighty attractive offer. The EnerBank USA® Zero Interest Loan (ZIL) offers the unique features of equal monthly payments combined with a 0% fixed APR. If qualified for a ZIL through EnerBank, your customers will appreciate getting the home improvements they want with a 0% fixed APR throughout the full term of their loan.</p>
												</div>
											</TabContent>
										</TabPanel>

										<TabPanel>
											<TabLabel className="d-block w-100 text-left btn btn-link collapsed">Traditional Installment Loans</TabLabel>
											<TabContent>
												<div class="card-body">
													<h4>OFFERING PAYMENT OPTIONS MEANS MORE BUSINESS FOR YOU</h4>
													<p>The most basic plank in your payment options toolbox is the Traditional Installment Loan (TIL). This is a longer-term loan designed for your customers with lower-dollar projects. Customers pay off the loan through equal monthly installments. A TIL can be a good choice for a customer who wants to make payments and get a better interest rate than a credit card.</p>
												</div>
											</TabContent>
										</TabPanel>

										<TabPanel>
											<TabLabel className="d-block w-100 text-left btn btn-link collapsed">Combo EZ Loans</TabLabel>
											<TabContent>
												<div class="card-body">
													<h4>MAKE IT A COMBO</h4>
													<p>Got customers who are counting on government tax incentives to help pay for a solar PV project? The Combo EZ Loan is a convenient way to bridge that money gap and get your project rolling. A Combo combines a Same-As-Cash Loan with a low monthly payment loan — which means flexibility for you and your customers. Once the project is started, your customer will enjoy a no-payment, nointerest Same-As-Cash period while they await their tax incentives. Following the Same-As-Cash period, they’ll get a low interest rate and longer payment terms, enabling them to end up with a monthly payment that’s at or below their former energy bill.</p>
												</div>
											</TabContent>
										</TabPanel>

										<TabPanel>
											<TabLabel className="d-block w-100 text-left btn btn-link collapsed">Triple Option Loans</TabLabel>
											<TabContent>
												<div class="card-body">
													<h4>GOOD THINGS COME IN THREES</h4>
													<p>The Triple Option Loan is an effective long-term payment option designed for renewable energy projects. Customers love the idea of getting their monthly payment down to at or below their previous energy bill. The Triple Option is a multi-part loan that includes a no payment period, followed by a low monthly payment period that includes three re-amortizations — a great way to lower the payments even further.</p>
												</div>
											</TabContent>
										</TabPanel>

										<TabPanel>
											<TabLabel className="d-block w-100 text-left btn btn-link collapsed">YES Loans</TabLabel>
											<TabContent>
												<div class="card-body">
													<h4>GET FROM NO…TO YES!</h4>
													<p>Every customer you work with is unique, and so is their financial situation. That’s why EnerBank USA® developed the YES Loan, an integrated counter-offer payment option that can help your lesscreditworthy customers get funding for their home improvement projects.</p>
												</div>
											</TabContent>
										</TabPanel>
									</Tabbordion>
									{/* End Collapsed List Area */}
								</div>
							</div>
						</section>
					</div>
				</div>
			</Modal>
		)
	} else {
		return (
			<div className="modal fade show" style={{ display: props.visiblity }}>&nbsp;</div>
		)
	} 
}
export default LoanType