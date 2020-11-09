import React from 'react';
import { Modal } from 'react-bootstrap';
import close_icon from '../../images/closed_icon-blue.svg'

const DirectorOne = (props) => {
		const {title, image} = props.popData
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="dealerPopup">
				<div className="modal_content p-4">
					<div className="card">
						<div className="row no-gutters">
							<div className="col-lg-6">
								<img src={image} className="card-img w-100 h-100 position-relative" style={{objectFit: 'cover'}} alt="..." />
							</div>
							<div className="col-lg-6">
									<div className="card-body px-4">
										<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
											<img src={close_icon} width="20" alt="close icon" />
										</button>
									<h5 className="card-title border-bottom text-blue pb-1 mb-0">{title}</h5>
									<p className="small mb-10 font-italic">President & CEO</p>
									<p className="small">Charles E. Knadler is responsible for the overall management of
										EnerBank. He was named to the position on January 1, 2016.
										Prior to his current position, Charlie was Executive Vice President
										and Chief Financial Officer from 2010 through the end of 2015
										and Senior Vice President and Chief Credit Officer from 2005 to
										2010. His career in financial services started in 1994 and includes
										experience in sales, credit, compliance and finance. Prior to
										joining EnerBank, he managed the home improvement credit
										department at Associates First Capital Corporation.
										Charlie previously served as president of the Utah Association
										of Financial Services and vice-president of the National
										Association of Industrial Banks. Both organizations have a
										mission to advocate for policies that expand access to credit,
										guarantee consumer choice, and provide unique banking
										services.
										Charlie has donated his time and expertise to NeighborWorks
										Salt Lake for over five years. NeighborWorks Salt Lake works to
										revitalize neighborhoods house by house, block by block by
										building on the strength of neighborhoods, creating opportunities
										through housing and resident leadership, and contributing to the
										development of the youth and local economy. He has served on
										their finance committee since 2013, was added to their board
										of directors in 2017 and currently serves on their executive
										committee.
										Born in Baltimore, Maryland, Charlie earned his undergraduate
										degree from Brigham Young University and MBA from the
										University of Utah.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		)
		
}
export default DirectorOne