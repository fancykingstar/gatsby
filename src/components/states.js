import React from 'react';
import { Modal } from 'react-bootstrap';

const States = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				<div className="heading_bg">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
						<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
					</button>
					<h3>All 50 States</h3>
				</div>
				<div className="modal_content p-5 py-sm-5">
					<div className="small line-height-normal" style={{'lineHeight': '22px'}} dangerouslySetInnerHTML={{__html:props.popData.content}} />
					<img className="img-fluid p-5 pb-0" src={props.popData.innerpagebanner.pagebanner.bannner.sourceUrl} alt={props.popData.innerpagebanner.pagebanner.bannner.altText} />
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