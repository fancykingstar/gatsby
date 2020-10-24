import React from 'react';
import { Modal } from 'react-bootstrap';
import close_icon from '../images/closed_icon.svg'

const CustomizedPaymentOptionsProgram = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				<div className="heading_bg">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
						<img src={close_icon} width="25" alt="close icon" />
					</button>
					<h2 className="h2 text-white font-weight-bold">{props.popData.title} Questions</h2>
				</div>
				<div className="modal_content">
					<div className="p-5 mx-5 my-3">
						<ul className="popupchecklist">
							{props.popData.popupchecklist.checklistGroup.map(((item, i) => {
								return(
									<li key={item.fieldGroupName + i}>{item.checklistName}</li>
								)}
							))}
						</ul>
						<div className="p5"><img className="img-fluid p-5 pb-0 mx-auto d-block" src={props.popData.innerpagebanner.pagebanner.bannner.sourceUrl} alt={props.popData.innerpagebanner.pagebanner.bannner.altText} /></div>
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
export default CustomizedPaymentOptionsProgram