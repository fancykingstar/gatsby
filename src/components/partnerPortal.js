import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from "gatsby";
import close_icon from '../images/closed_icon.svg'

const PartnerPortal = (props) => {
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
								<img src={props.popData.innerpagebanner.pagebanner.bannner.sourceUrl} className="object-fit-cover" />
							</div>
						</>
					)}
										
					<div className="p-5 py-sm-5">
						<div className="line-height-normal">
							<div dangerouslySetInnerHTML={{__html:props.popData.content}} />
						</div>
					</div>
					<div className="bg-blue start_drc start_drc2">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<ul className="portal_list py-5">
										{props.popData.partnerportal.portalservice.servicegroup.map((item, i) => (
											<li key={item.fieldGroupName + i}>{item.servicetitle}</li>                
										))}
									</ul>
								</div>							
							</div>							
							<div className="row">
								<div className="mx-auto text-center my-5">
									<Link to={'/'}>{props.popData.partnerportal.portalservice.accessportallink.title}</Link>
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