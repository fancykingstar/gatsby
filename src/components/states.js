import React from 'react';
import { Modal } from 'react-bootstrap';

const States = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				<div className="d-flex flex-column align-item-center justify-content-center">
					<div className="heading_bg">
						<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
						</button>
						<h3>All 50 States</h3>
					</div>
					<div className="modal_content p-5 py-sm-5">
						<div className="small line-height-normal" style={{'lineHeight': '22px'}}>
                          	<h4 className="text-blue mb-3">EnerBank USA Operates in All 50 States</h4>
                          	<p>EnerBank USA works closely with home improvement professionals in all 50 states. All our customer support and lending experts are based in the United States to provide you top-notch service.</p>
                      	</div>
						<img className="img-fluid p-5 pb-0" src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/EB-50-States.svg" alt="All 50 States" />
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
export default States