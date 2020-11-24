import React from 'react';
import { Modal } from 'react-bootstrap';
import close_icon from '../../images/closed_icon-blue.svg'

const MemberPopup = (props) => {
		const data = props.popData
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="dealerPopup">
				<div className="modal_content p-4 position-relative">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose} style={{zIndex:1, opacity:1,}}>
						<img src={close_icon} width="20" alt="close icon" />
					</button>
					<div className="card border-0">
						<div className="row no-gutters">
							<div className="col-lg-6">
								<img src={data.memberThumb.sourceUrl} className="card-img w-100 h-100 position-relative" style={{objectFit: 'cover'}} alt={data.memberThumb.altText} />
							</div>
							<div className="col-lg-6">
									<div className="card-body px-4">
									<h5 className="card-title text-blue pb-1 mb-0" style={{borderBottom: '2px solid #0077C8',}}>{data.memberName}</h5>
									<p className="small mb-10 font-italic">{data.memberPosition}</p>
									<div className="small" dangerouslySetInnerHTML={{__html: data.memberDescription}}></div> 
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		)
		
}
export default MemberPopup