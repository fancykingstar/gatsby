import React from 'react';
import { Modal } from 'react-bootstrap';
import close_icon from '../images/closed_icon.svg'

const GetPersonalizedService = (props) => {	
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full">
				<div className="heading_bg">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
						<img src={close_icon} width="25" alt="close icon" />
					</button>
					<h3 className="h2 font-weight-bold">Dedicated Relationship Managers</h3>
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
							<div className="modal_banner banner_bg" style={{ backgroundImage: "url(" + props.popData.innerpagebanner.pagebanner.bannner.sourceUrl + ")" }}></div>
						</>
					)}
					<div className="p-5">
						<div className="line-height-normal" dangerouslySetInnerHTML={{__html: props.popData.content}} />
						<div className="row mt-sm-5">
							<div className="col-lg-12">
								<ul className="testimonial-list">
									{props.popData.appmethod.paperlessmethod.map((item, i) => {
										if(i<3){
											return (
												<li key={item.fieldGroupName + i}>
													<div className="user-icon"><img src={item.sectionicon.sourceUrl} alt={item.sectionicon.altText} /></div>
													<div className="ballon">
														<h4 dangerouslySetInnerHTML={{__html: item.sectiontitle}} />
														<div dangerouslySetInnerHTML={{__html: item.sectionContent}} />
													</div>
												</li>
											)
										}
									})}
									{props.popData.bannerrepeater.bannerGroup.map((item, i) => {
										if(i === 0){
											return (
												<div className="my-5 pt-5" key={item.fieldGroupName + i}>
													<img src={item.banner.sourceUrl} alt={'banner' + i} />
													<p className="mb-5"></p>
												</div>
											)
										}
									})}
									{props.popData.appmethod.paperlessmethod.map((item, i) => {
										if(i>2){
											return (
												<li key={item.fieldGroupName + i}>
													<div className="user-icon"><img src={item.sectionicon.sourceUrl} alt={item.sectionicon.altText} /></div>
													<div className="ballon">
														<h4 dangerouslySetInnerHTML={{__html: item.sectiontitle}} />
														<div dangerouslySetInnerHTML={{__html: item.sectionContent}} />
													</div>
												</li>
											)
										}
									})}
									{props.popData.bannerrepeater.bannerGroup.map((item, i) => {
										if(i === 1){
											return (
												<div className="mt-5 pt-5" key={item.fieldGroupName + i}>
													<img src={item.banner.sourceUrl} alt={'banner' + i} />
												</div>
											)
										}
									})}
								</ul>
							</div>                    
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
export default GetPersonalizedService