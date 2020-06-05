import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Paymentbenefitoption = (props) => {
	console.log('props=', props.popData);
	const [show, setShow] = useState(true);
	if (props.popData.length === 0) {
		return (
			<div className="modal fade show" style={{ display: props.visiblity }}>s
			</div>
		)
	} else {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="lg">
				<div className="d-sm-flex">
					<div className="bg-blue p-5 d-flex align-items-center justify-content-center">
						<img src={props.popData.paymentOptionIcon.sourceUrl} id="modalIcon" width="150" alt={props.popData.fieldGroupName} />
					</div>
					<div className="p-4 py-sm-5 d-flex flex-column align-item-center justify-content-center">
						<button type="button" className="close text-blue" onClick={props.handleClose}>×</button>
						<h4 className="modal-title text-blue mb-2" id="modalTitle">{props.popData.paymentOptionPopupTitle}</h4>
						<div id="modalContent" className="small line-height-normal" style={{ lineHeight: '22px' }}>{props.popData.paymentOptionPopupContent}</div>
					</div>
				</div>
			</Modal>
		)
	}
}
export default Paymentbenefitoption