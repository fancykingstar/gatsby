import React from 'react';
import { Modal } from 'react-bootstrap';
import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion';
import close_icon from '../images/closed_icon.svg'

// accordian
const blockElements = {
    animator: 'accordion-animator',
    content: 'accordion-content',
    panel: 'accordion-panel',
    label: 'accordion-title',
}

const ViewFile = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				<div className="heading_bg">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
						<img src={close_icon} width="25" alt="close icon" />
					</button>
					<h2 className="h2 text-white font-weight-bold">{props.popData.accordion.tabpanel.length} Questions</h2>
				</div>
				<div className="modal_content">		

					<div className="p-4 pb-0 pt-sm-4">
						<div className="col-md-12 header-text mb-4 px-md-5 text-center" dangerouslySetInnerHTML={{__html:props.popData.content}} />
						<div className="py-sm-3">									
							{/* Collapsed List */}
							<Tabbordion blockElements={blockElements} animateContent={'height'} mode={'toggle'} className="accordion loan_offer mx-4 mx-lg-5" name="accordion">
								{props.popData.accordion.tabpanel.map((item, i) => {
									return (
										<TabPanel key={item.fieldGroupName + i}>
											<TabLabel className="d-block w-100 text-left btn btn-link collapsed" dangerouslySetInnerHTML={{__html:item.tablabel}} />
											<TabContent>
												<div className="card-body" dangerouslySetInnerHTML={{__html:item.tabcontent}} />
											</TabContent>
										</TabPanel>
									)
								})}
							</Tabbordion>
							{/* End Collapsed List Area */}
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
export default ViewFile