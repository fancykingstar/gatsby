import React from 'react';
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
	console.log(props)
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				<div className="heading_bg">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
						<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
					</button>
					<h2 className="text-white font-weight-bold">Loan Types</h2>
				</div>
				<div className="modal_content">
					{props.popData.innerpagebanner.pagebanner.bannner && (
						<>
							{/* <style dangerouslySetInnerHTML={{
								__html: [
									'.modal_banner:before {',
										'background: url(' + props.popData.innerpagebanner.pagebanner.bannericon.sourceUrl + ') no-repeat center',
									'}'
								].join('\n')
							}}></style> */}
							{/* <div className="modal_banner banner_bg" style={{ backgroundImage: "url(" + props.popData.innerpagebanner.pagebanner.bannner.sourceUrl + ")" }}></div> */}
						</>
					)}

					<div className="p-4 pb-0 pt-sm-4">					
						{/* Start Careers Area */}
						<section className="service-area">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-12 header-text mb-4" dangerouslySetInnerHTML={{__html:props.popData.content}} />
								</div>
								<div className="p-4 py-sm-3">									
									{/* Collapsed List */}
									<Tabbordion blockElements={blockElements} animateContent={'height'} mode={'toggle'} className="accordion loan_offer mx-4 mx-lg-5" name="accordion">
										{props.popData.accordion.tabpanel.map((item, i) => {
											return (
												<TabPanel key={item.fieldGroupName + i}>
													<TabLabel className="d-block w-100 text-left btn btn-link collapsed" dangerouslySetInnerHTML={{__html:item.tablabel}} />
													<TabContent>
														<div className="card-body" dangerouslySetInnerHTML={{__html:item.tabcontent}} />
													</TabContent>
												</TabPanel>
											)
										})}
									</Tabbordion>
									{/* End Collapsed List Area */}
								</div>
								<div className="mt-5 text-center mb-4"><img src={props.popData.innerpagebanner.pagebanner.bannner.sourceUrl} alt={props.popData.innerpagebanner.pagebanner.bannner.altText} /></div>
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