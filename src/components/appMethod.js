import React from 'react';
import { Modal } from 'react-bootstrap';
import close_icon from '../images/closed_icon.svg'

const AppMethod = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				<div className="heading_bg">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
						<img src={close_icon} width="25" alt="close icon" />
					</button>
					<h3 className="h2 font-weight-bold">Application Methods</h3>
				</div>
				<div className="modal_content">
					{props.popData.innerpagebanner.pagebanner.bannner && (
						<>
							<style dangerouslySetInnerHTML={{
								__html: [
									'.modal_banner:before {',
										'background: url(' + props.popData.innerpagebanner.pagebanner.bannericon.sourceUrl + ') no-repeat center',
									'}'
								].join('\n')
							}}></style>
							<div className="modal_banner banner_bg" >
								<img src={props.popData.innerpagebanner.pagebanner.bannner.sourceUrl} className="object-fit-cover" alt={props.popData.innerpagebanner.pagebanner.bannner.altText} />
							</div>
						</>						
					)}

					<div className="p-5 py-sm-5">
						<div className="small line-height-normal">
							<p dangerouslySetInnerHTML={{__html:props.popData.content}}></p>
						</div>

						<div className="row">
							{props.popData.appmethod.paperlessmethod.map((item, i) => (
								<div className="col-md-6 col-lg-3 d-flex flex-column mb-md-5 mb-lg-0" key={item.fieldGroupName + i}>
									<div className="border appMethod rounded">                
										<img src={item.sectionicon.sourceUrl} alt={item.sectionicon.slug} />
										<div className="text-blue text-center">{item.sectiontitle}</div>
										<p>{item.sectionContent}</p>
									</div>
								</div>
							))}
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
export default AppMethod
