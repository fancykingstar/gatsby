import React from 'react';
import { Modal } from 'react-bootstrap';
import close_icon from '../images/closed_icon.svg'

const CustomizedLaunchPlan = (props) => {
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
					<div className="p-4 px-md-5 mx-md-5 my-3">
						<div className="programtools" dangerouslySetInnerHTML={{__html: props.popData.content}} />
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
export default CustomizedLaunchPlan