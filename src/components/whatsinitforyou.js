import React from 'react';
import { Modal } from 'react-bootstrap';
import close_icon from '../images/closed_icon.svg'

const WhatsInItForYou = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				<div className="heading_bg">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
						<img src={close_icon} width="25" alt="close icon" />
					</button>
					<h2 className="h2 text-white font-weight-bold" dangerouslySetInnerHTML={{__html: props.popData.title}} />
				</div>
				<div className="modal_content">
					<div className="p-4 px-md-5 mx-md-5 my-3">
						<div className="programtools" dangerouslySetInnerHTML={{__html: props.popData.content}} />
						<div className="d-flex mt-5">
							<ul className="popupchecklist">
								{props.popData.popupchecklist.checklistGroup.map(((item, i) => {
									return(
										<li key={item.fieldGroupName + i}>{item.checklistName}</li>
									)}
								))}
							</ul>
							{/* <div className="toolsimage"><img className="img-fluid" src={props.popData.innerpagebanner.pagebanner.bannner.sourceUrl} alt={props.popData.innerpagebanner.pagebanner.bannner.altText} /></div> */}
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
export default WhatsInItForYou