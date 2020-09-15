import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from "gatsby";

const DealerResource = (props) => {
	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="dealerPopup">
					<div className="heading_bg">
						<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
						</button>
						<h3>Dealer Resource Center</h3>
					</div>
					<div className="modal_content">
						{props.popData.innerpagebanner.pagebanner.bannner && (
							<>
								<style dangerouslySetInnerHTML={{
									__html: [
										'.modal_banner:before {',
											'background-image: url(' + props.popData.innerpagebanner.pagebanner.bannericon.sourceUrl + ');',
											'background-repeat: no-repeat;',
											'background-position: 50% calc(50% - 30px);',
										'}'
									].join('\n')
								}}></style>
								<div className="modal_banner banner_bg" style={{ backgroundImage: "url(" + props.popData.innerpagebanner.pagebanner.bannner.sourceUrl + ")" }}>
									<p dangerouslySetInnerHTML={{__html:props.popData.innerpagebanner.pagebanner.bannertext}}></p>
								</div>
							</>
						)}
											
						<div className="p-5 py-sm-5">
							<div className="small line-height-normal">
								<p dangerouslySetInnerHTML={{__html:props.popData.content}} />
							</div>
							<div className="row">
								{props.popData.dealerresourcecenter.powerfulltool.map((item, i) => (
									<div className="col-lg-4 d-flex flex-column mb-md-5 mb-lg-0" key={item.fieldGroupName + i} >
										<div className="border dealerResource rounded">                
											<img src={item.sectionicon.sourceUrl} alt={item.sectionicon.slug} />
											<div className="text-blue text-center">{item.sectiontitle}</div>
											<p>{item.sectioncontent}</p>
											<Link to={item.sectionlink.url}>{item.sectionlink.title}</Link>
										</div>
									</div>
								))}
							</div>
						</div>
						{/* <div className="bg-blue start_drc p-4">
							<div>{props.popData.dealerresourcecenter.drcnow.sectionheading}</div>
							<p className="text-center">{props.popData.dealerresourcecenter.drcnow.sectiondesc}</p>
							<Link to={props.popData.dealerresourcecenter.drcnow.sectionlink.url}>{props.popData.dealerresourcecenter.drcnow.sectionlink.title}</Link>
						</div> */}
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
export default DealerResource