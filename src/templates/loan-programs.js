import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion';
import "react-tabbordion/demo/accordion.css";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video";
// popup components
import PaymentBenefitsPopup from "../components/paymentBenefitsPopup"
import AppMethod from "../components/appMethod"
import PartnerPortal from "../components/partnerPortal"
import DealerResource from "../components/dealerResource"
import Training from "../components/training";
import LoanType from "../components/loanType"
import Support from "../components/support"
import States from "../components/states"
import BenefitsLoanProgram from "../components/benefitsLoanProgram"
import GrowthCalc from "../components/growthCalc"

// accordian
const blockElements = {
    animator: 'accordion-animator',
    content: 'accordion-content',
    panel: 'accordion-panel',
    label: 'accordion-title',
}

const LoanProgramPage = ({ data }) => {
	const content = data.wpgraphql.page;

	const [visible, setVisible] = useState(false);
	const [popType, setPopType] = useState('payment_options');
	const [popData, setPopData] = useState('');
	
	const showbenefitpopup = (param, type) => event => {
		event.preventDefault();
		setPopData(param);
		setVisible(true);
		setPopType(type);		
	}

	const hidebenefitpopup = () => {
		// console.log('hidebenefitpopup');
		setVisible(false);
	}
	
	const popup = () => {
		switch(popType){
			case "payment_options":
				return <PaymentBenefitsPopup visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "apps":
				return <AppMethod visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "partner":
				return <PartnerPortal visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "dealer":
				return <DealerResource visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "training":
				return <Training visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "loantype":
				return <LoanType visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "all50states":
				return <States visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "support":
				return <Support visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "benefitsLoanProgram":
				return <BenefitsLoanProgram visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "growthCalc":
				return <GrowthCalc visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			default:
				return "";
				break;
		}
	}
	
	return (
		<Layout>
			<SEO title={content.title} description={content.excerpt} />

			{content.top_banner.banner.backgroundImage && (
				<section className="banner-area pos_relative" id="home" style={{ backgroundImage: "url(" + content.top_banner.banner.backgroundImage.sourceUrl + ")" }}>
					<div className="background-holder">
						<Video videoSrcURL={data.wpgraphql.page.video_section.video.videoUrl} allow="autoplay" videoTitle="loan program page video" videoWidth="100%" videoHeight="500" />
					</div>
					<div className="container">
						<div className="row h-half d-flex align-items-end pb-5">
							{content.top_banner.banner.bannerLinks.map((item, i) =>
								(
									<div className="col-md-4" key={item.fieldGroupName + i}>
										<div className="header-btn mr-3 ml-3"><Link to={item.links.url} dangerouslySetInnerHTML={{ __html: item.links.title }} /></div>
									</div>
								)
							)}
						</div>
					</div>
				</section>
			)}

			<section className="container px-5">
				<div className="p-5 pb-0 payment-program" dangerouslySetInnerHTML={{__html:content.content}} />
			</section>

			<section className="video-section">
				<div className="container">
					<div className="row">
					<div className="m-auto col-md-10">
						<Video videoSrcURL="https://www.youtube.com/embed/PKnMxIz4FWw?byline=0&title=0" videoTitle="EnerBank Atmospheric Video" videoWidth="100%" videoHeight="500" />
						<p className="text-center font-weight-bold mt-2 mb-4">WATCH: Discover the key to unlocking business growth</p>
					</div>      
					</div>
				</div>
				</section>
			{content.loan_program.paymentOptionsBenefits.paymentOptionHeading && (
				<div className="bg-blue" id="paymentoptbenefits">
					<h1 className="container text-center py-4 h2 text-white">
						{content.loan_program.paymentOptionsBenefits.paymentOptionHeading}
					</h1>
				</div>
			)}

			<div className="container">
				{content.loan_program.paymentOptionsBenefits.paymentOptionBrif && (
					<div className="row justify-content-center">
						<div className="m-3 m-lg-5 pb-3" dangerouslySetInnerHTML={{ __html: content.loan_program.paymentOptionsBenefits.paymentOptionBrif }} />
					</div>
				)}
				{content.loan_program.paymentOptionsBenefits.paymentOptions && (
					<div className="payment-option">
						<ul>
							{content.loan_program.paymentOptionsBenefits.paymentOptions.map((item, i) =>
								(
									<li key={item.fieldGroupName + i}>
										<Link to={'/'} onClick={showbenefitpopup(item, 'payment_options')} data-title={item.paymentOptionTitle} data-content="Advertising payment options is a great way to set you apart from your competitors and produce more leads for your business.">
											<div className="box-circle icon bg-blue content-center">
												<img src={item.paymentOptionIcon.sourceUrl} alt={item.paymentOptionIcon.altText} />
											</div>
											<p dangerouslySetInnerHTML={{ __html: item.paymentOptionTitle }} />
										</Link>
									</li>
								)
							)}
						</ul>
					</div>
				)}

				{content.loan_program.offeringPaymentOption && (
					<div className="my-3 my-md-5 row">
						{content.loan_program.offeringPaymentOption.map((item, i) =>
							{
								if(i === 0){
									return (
										<div key={item.fieldGroupName + i} className="box-shadow bg-white rounded text-center payment-option-box col-xs-12 col-md p-0 mb-3 mx-sm-3 mx-lg-5">
											<Link to={'/'} onClick={showbenefitpopup(item, 'growthCalc')}>
												<div className="bg-blue p-5 rounded-top">
													<img className="img-fluid" src={item.offeringPaymentIcon.sourceUrl} alt="Growth Calculator icon" />
												</div>
												<div className="p-4" dangerouslySetInnerHTML={{ __html: item.offeringPaymentBrif }} />
											</Link>
										</div>
									)
							}
								// else{
								// 	return (
								// 		<div key={item.fieldGroupName + i} className="box-shadow bg-white rounded text-center payment-option-box col-xs-12 col-md p-0 mb-3 mx-sm-3 mx-lg-5">
											
								// 				<div className="bg-blue p-5 rounded-top">
								// 					<img className="img-fluid" src={item.offeringPaymentIcon.sourceUrl} alt="View our loan types icon" />
								// 				</div>
								// 				<div className="p-4" dangerouslySetInnerHTML={{ __html: item.offeringPaymentBrif }} />
											
								// 		</div>
								// 	)
								// }
							}
						)}
					</div>
				)}
			</div>

			{content.loan_program.joinLoanProgram && (
				<section className="joinLoanProgram" id="joinloanprogram">
					{content.loan_program.joinLoanProgram.loanProgramMethodHeading && (
						<div className="bg-blue">
							<h1 className="container text-center py-4 h2 text-white">
								{content.loan_program.joinLoanProgram.loanProgramMethodHeading}
							</h1>
						</div>
					)}
					<div className="container">						
						<div className="brif" dangerouslySetInnerHTML={{ __html: content.loan_program.joinLoanProgram.loanProgramIntro }} />
						<div className="text-center mb-5 pb-4">
							<Link to={'/'} className="m-auto px-5 btn btn-primary">Join Now</Link>
						</div>
						<h2 className="text-center color-blue border-heading"><span>{content.loan_program.joinLoanProgram.sectionTitle}</span></h2>
						{content.loan_program.joinLoanProgram.loanProgramMethods && (
							<div className="row mt-4 mb-5">
								{content.loan_program.joinLoanProgram.loanProgramMethods.map((item, i) => {
									const methodNames = ['apps', 'partner', 'dealer']
									
									const nodes = data.wpgraphql.posts.edges.map((nodes) => {
											if(item.programMethodTitle === nodes.node.title){
												return (
													<div className="col-sm-4 mb-4 mb-lg-0" key={item.fieldGroupName + i}>
														<div className="card wygbox box-shadow">
															<style dangerouslySetInnerHTML={{
																__html: [
																	'.'+methodNames[i]+':after {',
																		'background: rgba(77, 77, 77, 0.6) url(' + item.programMethodIcon.sourceUrl + ') no-repeat center',
																	'}'
																].join('\n')
															}}></style>
															<div className={'wygthumb ' + methodNames[i]}>
																<img src={item.programMethodsBgImage.sourceUrl} className="card-img-top" alt="Dealer Resource Center" />
															</div>
															<div className="card-body">
																<h3 className="card-title" dangerouslySetInnerHTML={{ __html: item.programMethodTitle }} />
																<p className="card-text" dangerouslySetInnerHTML={{ __html: item.programMethodBrif }} />
																<button className="btn mt-3" onClick={showbenefitpopup(nodes.node, methodNames[i])}>Learn More</button>
															</div>
														</div>
													</div>
												)
											}
									})
									return nodes
								})}
							</div>
						)}
					</div>
				</section>
			)}

			{content.loan_program.onlineAppIntegration && (
				<>
					<div className="container pt-1">
						{content.loan_program.onlineAppIntegration.appIntegrationBrif && (
							<div className="mt-5 py-3 px-4 px-lg-5 box-shadow">
								<h2 className="h1 text-blue text-center mb-4 font-weight-normal">{content.loan_program.onlineAppIntegration.appIntegrationHeading}</h2>
								<p dangerouslySetInnerHTML={{__html: content.loan_program.onlineAppIntegration.appIntegrationBrif}} />
							</div>
						)}

						{content.loan_program.onlineAppIntegration.appIntegrationStep && (
							<div className="p-3 p-sm-4 p-lg-5 mb-5" style={{ backgroundColor: '#e6e7e8' }}>
								<img src={content.loan_program.onlineAppIntegration.appIntegrationStep.sourceUrl} alt="app integration step" />
							</div>
						)}

						{content.loan_program.onlineAppIntegration.appIntegrationOption && (
							<div className="d-flex flex-wrap pt-5">
								{content.loan_program.onlineAppIntegration.appIntegrationOption.map((item, i) => {
									const appIntOpt = ['loantype', 'training']
									const nodes = data.wpgraphql.posts.edges.map((nodes) => {
										if(item.integrationOptionPopslug === nodes.node.title){
											return (
												<div key={item.fieldGroupName + i} className="box-shadow bg-white rounded text-center payment-option-box col-xs-12 col-md mb-3 mb-lg-0 p-0 ml-md-3 ml-lg-5">
													{/* <style dangerouslySetInnerHTML={{
														__html: [
															'.'+appIntOpt[i]+':after {',
																'background: rgba(77, 77, 77, 0.6) url(' + item.integrationOptionIcon.sourceUrl + ') no-repeat center',
															'}'
														].join('\n')
													}}></style> */}
													<div className={'wygthumb ' + appIntOpt[i]}>
														<img src={item.integrationOptionBgImage.sourceUrl} className="card-img-top" alt={item.integrationOptionBgImage.altText} />
													</div>
													<div className="p-4 d-flex flex-column">
														<h3 className="mb-10" dangerouslySetInnerHTML={{__html: item.integrationOptionHeading}} />
														<p dangerouslySetInnerHTML={{ __html: item.integrationOptionBrif }} />
														<button className="btn-link" onClick={showbenefitpopup(nodes.node, appIntOpt[i])}>Learn More</button>
													</div>
												</div>
											)
										}
									})
									return nodes
								})}
							</div>
						)}
					</div>
				</>
			)}

			{content.loan_program && (
				<div className="container">					
					<div className="p-5 pb-0 payment-program">
						<h2>What’s Your Specialty? We’ve Got Loans for Whatever You Do!</h2>
						<p>We offer loans for a ton of different home improvement project types. From the foundation all the way up to the roof — inside, outside, large or small — our loans are tailored to meet virtually any home improvement need. Contact us to discover which loans will best suit your business model.</p>
					</div>

                    {/* <Tabbordion blockElements={blockElements} animateContent={'height'} mode={'toggle'} className="accordion loan_offer mx-4 mx-lg-5" name="accordion">
                        {content.accordion.tabpanel.map((item, i) =>
                            (
                                <TabPanel key={item.fieldGroupName + i}>
                                    <TabLabel className="w-100 text-left btn btn-link">{item.tablabel}</TabLabel>
                                    <TabContent>
                                        <p>{item.tabcontent}</p>
                                    </TabContent>
                                </TabPanel>
                            )
                        )}
                    </Tabbordion> */}

					<div className="p-5 pb-0 payment-program">					
						<h2 className="text-center">Our Contractor Support is Second to None</h2>
						<p>We built our whole business around working with home improvement contractors across the nation. Because we only do home improvement loans, we can provide specialized and unparalleled service, starting with your dedicated relationship manager.</p>
					</div>

					<div className="row">
						{content.loan_program.loanServices.map((item, i) => {
							// const nodes = data.wpgraphql.posts.edges.map((nodes) => {
								// console.log(item, nodes)
								// if(item.serviceHeading === nodes.node.title){
									return (
										<div className="col-sm-4 mb-4 mb-lg-0" key={item.fieldGroupName+i}>
											<div className="single-offer card-body">
												<i className="icon_circil">
													<img className="img-fluid" src={item.serviceIcon.sourceUrl} alt="item.serviceIcon.altText" />
												</i>
												<h4>{item.serviceHeading}</h4>
												<p>{item.serviceText}</p>
												<button onClick={showbenefitpopup(item, item.popSlug)} className="btn btn-primary f-bold">Learn More</button>
											</div>
										</div>
									)
							// 	}
							// })
							// return nodes
						})}
					</div>
					
					{/*content.loan_program.loanServices.map((item, i) => {
						let services = [];
						data.wpgraphql.categories.edges.map((cate, j) => {
							(cate.node.slug === "loanservices") && (
								cate.node.posts.edges.map((post) => {//console.log(item.indexOf(post.node.title))									
									if(item.serviceHeading === post.node.title){
										console.log(item.serviceHeading, i)
										// return (services.indexOf(post.node.title) === -1) ? services.push(post.node) : ''
									}
								}
							))
						})
						// console.log(services)
						return (
							<div className="col-lg-4 mb-4 mb-lg-0" key={item.fieldGroupName+i}>
								<div className="single-offer card-body">
									<i className="icon_circil">
										<img className="img-fluid" src={item.serviceIcon.sourceUrl} alt="News" />
									</i>
									<h4>{item.serviceHeading}</h4>
									<p>{item.serviceText}</p>
									<Link to={'/'} onClick={showbenefitpopup(item, item.popSlug)} className="btn btn-primary f-bold">Learn More</Link>
								</div>
							</div>
						)
						
					})*/}

					<div className="m-4 m-lg-5">
						<h2 className="text-center">{content.loan_program.loanProvider.sectionHeading}</h2>
						<p className="text-center py-2">{content.loan_program.loanProvider.sectionBrif}</p>
						<div className="d-flex justify-content-center howselectloan">
							<button className="btn-link">VIEW</button>
							<div className="display-inline-block box-20" dangerouslySetInnerHTML={{__html: content.loan_program.loanProvider.yearBlock}} />    
							<Link to={'/'}><i className="fa fa-pdf"></i>PDF</Link>
						</div>
					</div>

				</div>
			)}

			<div className="bg-blue mt-5" id="createloanprogram">
				<h2 className="container text-center py-4 h2 text-white">{content.loan_program.createLoanOption.sectionHeading}</h2>
			</div>

			<div className="bg-grey createLoanProgram">
				<div className="container">
					<div dangerouslySetInnerHTML={{__html: content.loan_program.createLoanOption.sectionBrif}}></div>

					<div className="d-flex flex-wrap my-4 my-lg-5">
						{content.loan_program.createLoanOption.sectionOption.map((item, i) => {
							if(i === 0){
								return (
									<div key={item.fieldGroupName + i}  className="box-shadow bg-white rounded text-center payment-option-box col-xs-12 col-md mb-3 mb-lg-0 p-0 mr-md-3 mr-lg-5">
										<style dangerouslySetInnerHTML={{
											__html: [
												'.benefitloan:after {',
													'background: rgba(77, 77, 77, 0.6) url(' + item.integrationOptionIcon.sourceUrl + ') no-repeat center',
												'}'
											].join('\n')
										}}></style>
										<div className="wygthumb benefitloan">
											<img src={item.integrationOptionBgImage.sourceUrl} className="card-img-top" alt={item.integrationOptionBgImage.altText} />
										</div>
										<div className="p-4" dangerouslySetInnerHTML={{__html: item.integrationOptionBrif}}></div>
									</div>
								)
							}else {
								return (
									<div key={item.fieldGroupName + i} className="box-shadow bg-white rounded text-center payment-option-box col-xs-12 col-md mb-3 mb-lg-0 p-0 mr-md-3 mr-lg-5">
										<style dangerouslySetInnerHTML={{
											__html: [
												'.programfeature:after {',
													'background: rgba(77, 77, 77, 0.6) url(' + item.integrationOptionIcon.sourceUrl + ') no-repeat center',
												'}'
											].join('\n')
										}}></style>
										<div className="wygthumb programfeature">
											<img src={item.integrationOptionBgImage.sourceUrl} className="card-img-top" alt={item.integrationOptionBgImage.altText} />
										</div>
										<div className="p-4" dangerouslySetInnerHTML={{__html: item.integrationOptionBrif}}></div>
									</div>
								)
							}
							
						})}

					</div>
				</div>
			
				<div className="m-4 m-lg-5">
					<h2 className="text-center">{content.loan_program.selectPartner.sectionHeading}</h2>
					<p className="text-center py-2">{content.loan_program.selectPartner.sectionBrif}</p>
					<div className="d-flex justify-content-center howselectloan">
						<button className="btn-link">View / Read</button>
						<div className="display-inline-block box-20" dangerouslySetInnerHTML={{__html: content.loan_program.selectPartner.yearBlock}} />    
						<Link to={'/'}>Download</Link>
					</div>
				</div>
			</div>

			{content.loan_program.partnerSays && (
				<>
					<div className="container">
						<h3 className="text-center mx-5 mb-3 my-2 p-5">
							<span>What Our Partners Say</span>
							<hr style={{ height: '2px', background: '#444', marginTop: '1.5rem' }}></hr>
						</h3>
					</div>

					<Carousel showArrows={true} centerMode infiniteLoop>
						{content.loan_program.partnerSays.map((item, i) =>
							(
								<div key={item.fieldGroupName + i}>
									<img src={item.partnerLogo.sourceUrl} alt={item.partnerLogo.altText} className="img-fluid" />
									<div dangerouslySetInnerHTML={{ __html: item.partnerComment }} />
								</div>
							)
						)}
					</Carousel>
				</>
			)}
			
			{
				popup()
			}
		</Layout>

	)
}

export default LoanProgramPage

export const query = graphql`
query($databaseId: ID!) {
    wpgraphql {
		categories {
			edges {
			  node {
				id
				slug
				posts{
					edges{
						node {
						  id
						  title
						  content
						  appmethod {
							paperlessmethod {
								fieldGroupName
								sectionicon {
								  sourceUrl
								}
								sectiontitle
								sectionContent
							}
						  }
						  dealerresourcecenter {
							drcnow {
								sectiondesc
								sectionheading
								sectionlink {
								  target
								  title
								  url
								}
							}
							powerfulltool {
								fieldGroupName
								sectioncontent
								sectiontitle
								sectionicon {
									  sourceUrl
								}
								sectionlink {
								  target
								  title
								  url
								}
							}
						  }
						  innerpagebanner {
							pagebanner {
							  bannericon {
								sourceUrl
							  }
							  bannner {
								sourceUrl
							  }
							  bannertext
							}
						  }
						  partnerportal {
							portalservice {
							  accessportallink {
								target
								title
								url
							  }
							  servicegroup {
								fieldGroupName
								servicetitle
							  }
							}
						  }
						  accordion {
							fieldGroupName
							tabpanel {
							  fieldGroupName
							  tabcontent
							  tablabel
							}
						  }
						}
					}
				}
			  }
			}
		}		
		posts{
			edges{
				node {
				  id
				  title
				  content
				  appmethod {
					paperlessmethod {
						fieldGroupName
						sectionicon {
						  sourceUrl
						}
						sectiontitle
						sectionContent
					}
				  }
				  dealerresourcecenter {
					drcnow {
						sectiondesc
						sectionheading
						sectionlink {
						  target
						  title
						  url
						}
					}
					powerfulltool {
						fieldGroupName
						sectioncontent
						sectiontitle
						sectionicon {
						  	sourceUrl
						}
						sectionlink {
						  target
						  title
						  url
						}
					}
				  }
				  innerpagebanner {
					pagebanner {
					  bannericon {
						sourceUrl
					  }
					  bannner {
						sourceUrl
					  }
					  bannertext
					}
				  }
				  partnerportal {
					portalservice {
					  accessportallink {
						target
						title
						url
					  }
					  servicegroup {
						fieldGroupName
						servicetitle
					  }
					}
				  }
				  accordion {
					fieldGroupName
					tabpanel {
					  fieldGroupName
					  tabcontent
					  tablabel
					}
				  }
				}
			}
		}
      	page(id: $databaseId, idType: DATABASE_ID) {
			title
			date
			content(format: RENDERED)
			featuredImage {
				altText
				title(format: RENDERED)
				mediaItemUrl
				slug
			}

			top_banner {
				banner {
					backgroundImage {
						sourceUrl
					}
					bannerLinks {
						fieldGroupName
						links {
							title
							url
						}
					}
				}
			}

			loan_program {
				partnerSays {
					fieldGroupName
					partnerComment
					partnerLogo {
						sourceUrl
						altText
					}
				}
				paymentOptionsBenefits {
					paymentOptionHeading
					paymentOptionBrif
					paymentOptions {
						fieldGroupName
						paymentOptionTitle
						paymentOptionPopupTitle
						paymentOptionPopupContent
						paymentOptionIcon {
							sourceUrl
							altText
							title
						}
					}
				}
				offeringPaymentOption {
					fieldGroupName
					offeringPaymentBrif
					offeringPaymentIcon {
						sourceUrl
					}
				}
				joinLoanProgram {
					loanProgramMethodHeading
					loanProgramIntro
					sectionTitle
					loanProgramMethods {
						fieldGroupName
						programMethodBrif
						programMethodIcon {
							sourceUrl
						}
						programMethodsBgImage {
							sourceUrl
						}
						programMethodTitle
						programMethodLink {
							target
							title
							url
						}
					}
				}
				onlineAppIntegration {
					appIntegrationBrif
					appIntegrationHeading
					appIntegrationOption {
						fieldGroupName
						integrationOptionBrif
						integrationOptionBgImage {
							altText
							sourceUrl
						}
						integrationOptionIcon {
							sourceUrl
						}
						integrationOptionHeading
						integrationOptionPopslug
					}
					appIntegrationStep {
						sourceUrl
					}
				}

				loanServices {
					fieldGroupName
					serviceHeading
					serviceText
					popSlug
					serviceLink {
						target
						title
						url
					}
					serviceIcon {
						sourceUrl
						altText
					}    
				}
			
				loanProvider {
					sectionHeading
					sectionBrif
					yearBlock
				}

				selectPartner {
					sectionBrif
					sectionHeading
					yearBlock
				}

				createLoanOption {
					sectionHeading
					sectionBrif
					sectionOption {
						fieldGroupName
						integrationOptionBrif
						integrationOptionBgImage {
							altText
							sourceUrl
						}
						integrationOptionIcon {
							sourceUrl
						}
					}
				}

			}
			accordion {
				tabpanel {
					fieldGroupName
					tabcontent
					tablabel
				}
			}

			video_section {
				video {
					videoUrl
					videoBanner {
						sourceUrl
					}
				}
			}
		}	  	
    }
}`