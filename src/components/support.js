import React from 'react';
import { Modal } from 'react-bootstrap';
import close_icon from '../images/closed_icon.svg'

const Support = (props) => {	
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
					<div className="heading_bg">
						<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src={close_icon} width="25" alt="close icon" />
						</button>
						<h3 className="h2 font-weight-bold">Support</h3>
					</div>
					<div className="modal_content">
						<div className="p-5">
							<div className="line-height-normal" dangerouslySetInnerHTML={{__html: props.popData.content}} />
							<div className="row">
								<div className="col-lg-12">
									<ul className="left-icon-list">
										{props.popData.appmethod.paperlessmethod.map((item, i) => 
											<li key={item.fieldGroupName + i}>
												<span><img src={item.sectionicon.sourceUrl} alt={item.sectionicon.altText} /></span>
												<h4 dangerouslySetInnerHTML={{__html: item.sectiontitle}} />
												<div dangerouslySetInnerHTML={{__html: item.sectionContent}} />
											</li>
										)}
									</ul>
								</div>                    
							</div>
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
export default Support