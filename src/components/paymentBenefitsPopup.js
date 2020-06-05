import React, { useState } from 'react';

const Paymentbenefitoption = (props) => {
	console.log('props=', props.popData);
	if (props.popData.length === 0) {
		return (
			<div className="modal fade show" style={{ display: props.visiblity }}>s
			</div>
		)
	} else {
		return (
			<div className="modal fade show" style={{ display: props.visiblity }}>
				<div className="modal-dialog modal-lg modal-dialog-centered" role="document">
					<div className="modal-content">
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
					</div>
				</div>
			</div>
		)
	}
}
export default Paymentbenefitoption