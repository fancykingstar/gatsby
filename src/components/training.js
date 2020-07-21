import React from 'react';
import { Modal } from 'react-bootstrap';

const Training = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				<div class="d-flex flex-column align-item-center justify-content-center">
					<div class="heading_bg">
						<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
						</button>
						<h3>Training</h3>
					</div>
					<div class="modal_content">
						<div class="modal_banner" style={{ background: "url('http://devgb.enerbank.com/wp-content/themes/enerbank/img/training_hero.jpg') no-repeat" }}>
							<span><img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/svg/Training-Wht.svg" alt="training wht" /></span>
						</div>

						<div class="p-8 py-sm-5">
							<div class="small line-height-normal">
								<p class="mb-5 text-md">As an exclusive home improvement lender, EnerBank provides you unique products and personalized service you won't find anywhere else.</p>
								<h4 class="text-blue">Owner:</h4>
								<p class="mb-4">Designed for business owners, this course includes how to leverage EnerBank's payment options program to increase project size, close rate, and ultimately exceed annual sales goals.</p>
								<h4 class="text-blue">Admin:</h4>
								<p class="mb-4">Designed for office administrators, this course demonstrates how contractors get paid by using EnerBank's quick and easy funding process! </p>
								<h4 class="text-blue">Sales:</h4>
								<p class="mb-4">Designed for sales professionals, this course highlights the proven methodology that will lead to a significant increase in individual sales revenue.</p> 
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
export default Training