import React from 'react';
import { Modal } from 'react-bootstrap';
import { navigate } from "gatsby"
import { Button } from 'react-bootstrap'
import close_icon from '../images/closed_icon.svg'
import apple_btn from '../images/apple-store-btn.png'
import google_btn from '../images/google-play-btn.png'

const PartnerPortal = (props) => {
	const externalLink = (url) => {
		window.open(url, '_blank');
    }
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="partnerPopup">
				<div className="heading_bg">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
						<img src={close_icon} width="25" alt="close icon" />
					</button>
					<h3 className="h2 font-weight-bold">Partner Portal</h3>
				</div>
				<div className="modal_content">
					{props.popData.innerpagebanner.pagebanner.bannner && (
						<>
							<style dangerouslySetInnerHTML={{
								__html: [
									'.modal_banner:before {',
										'background: url(' + props.popData.innerpagebanner.pagebanner.bannericon.sourceUrl + ') no-repeat center',
									'}'
								].join('\n')
							}}></style>
							<div className="modal_banner banner_bg">
								<img src={props.popData.innerpagebanner.pagebanner.bannner.sourceUrl} className="object-fit-cover" alt={props.popData.innerpagebanner.pagebanner.bannner.altText} />
							</div>
						</>
					)}
										
					<div className="p-4 p-sm-5">
						<div className="line-height-normal">
							<div dangerouslySetInnerHTML={{__html:props.popData.content}} />
							<div id="download text-center d-inline-block mx-auto">
								<Button variant="outline-light" className="border-0 p-0 my-4 mb-md-0" onClick={() => externalLink('https://apps.apple.com/us/app/enerbank-usa-partner-portal/id1501254896')}><img src={apple_btn} alt="apple-store-btn" width="120" /></Button> <br/>
				                <Button variant="outline-light" className="border-0 p-0 my-4 mb-md-0 googleplay-app" onClick={() => externalLink('https://play.google.com/store/apps/details?id=com.enerbank.partnerportal')}><img src={google_btn} alt="google-play-btn" width="120" /></Button>
				            </div>
						</div>
					</div>
					<div className="bg-blue start_drc start_drc2">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<ul className="portal_list pt-5 py-md-5">
										{props.popData.partnerportal.portalservice.servicegroup.map((item, i) => (
											<li key={item.fieldGroupName + i}>{item.servicetitle}</li>                
										))}
									</ul>
								</div>							
							</div>							
							<div className="row">
								<div className="mx-4 mx-md-auto text-center my-5">
									<Button variant="outline-light" onClick={() => externalLink('https://portal.enerbank.com/')} >{props.popData.partnerportal.portalservice.accessportallink.title}</Button>
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