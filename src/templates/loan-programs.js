import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
import GetPersonalizedService from '../components/getPersonalizedService'
import States from "../components/states"
import BenefitsLoanProgram from "../components/benefitsLoanProgram"
import GrowthCalc from "../components/growthCalc"
import ViewFile from "../components/viewFile"
import CustomizedPaymentOptionsProgram from "../components/customizePaymentOption"
import ToolsHelpYourProgram from "../components/toolsHelpYourProgram"
import CustomizedLaunchPlan from "../components/customizedLaunchPlan"
import WhatsInItForYou from "../components/whatsinitforyou"
import WhatsInItForYourDealers from "../components/whatsinitforyourdealers"
import pdffile from "../images/pdf.svg"
import { any } from "prop-types";

const LoanProgramPage = ({ data }) => {
	const node = data.wpgraphql.page;

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
		setVisible(false);
	}	
	
	const popup = () => {
		switch(popType){
			case "payment_options":
				return <PaymentBenefitsPopup visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "application-methods":
				return <AppMethod visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "partner-portal":
				return <PartnerPortal visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "dealer-resource-center":
				return <DealerResource visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "training":
				return <Training visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "loan-types":
				return <LoanType visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "nationwide-presence":
				return <States visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "unparalleled-support":
				return <Support visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "get-personalized-service":
				return <GetPersonalizedService visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "benefitsLoanProgram":
				return <BenefitsLoanProgram visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "growthCalc":
				return <GrowthCalc visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "viewFile":
				return <ViewFile visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break;
			case "customized-payment-options-program":
				return <CustomizedPaymentOptionsProgram visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break
			case "customized-launch-plan-and-support":
				return <CustomizedLaunchPlan visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break
			case "tools-help-your-program":
				return <ToolsHelpYourProgram visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break
			case "whats-in-it-for-you":
				return <WhatsInItForYou visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break
			case "whats-in-it-for-your-dealers":
				return <WhatsInItForYourDealers visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />;
				break
			default:
				return "";
				break;
		}
	}

	const DownloadFile = (url) => {
		window.open(url, '_blank');
	}
	const services = []
	const programMethod = []
	const onlineApp = []
	const rightChoice = []
	const createProgram = []
	let viewLoanProviderPDF = any
	let viewLoanPartnerPDF = ''

	return (
		<Layout>
			<SEO title={node.title} description={node.excerpt} />
			<style dangerouslySetInnerHTML={{
				__html: [
					'body{',
						'font-weight:400',
					'}'
				].join('\n')
			}}></style>

			{node.video_section.video.videoUrl && (
				<section className="banner-area pos_relative fullscreen" id="home">
					{node.top_banner.banner.backgroundImage && (
						<img src={node.top_banner.banner.backgroundImage.sourceUrl} alt={node.top_banner.banner.backgroundImage.altText} />
					)}
					<div className="background-holder">
						<Video videoSrcURL={node.video_section.video.videoUrl} allow="autoplay" videoTitle="EnnerBank improvement lender of choice" videoWidth="100%" videoHeight="500" />
						{node.top_banner.banner.bannerLinks && (
							<div className="container d-flex align-items-end p-0 pb-md-5 position-absolute banner-btn-container">
								{node.top_banner.banner.bannerLinks.map((item, i) =>(
									<div className="col-md-4" key={item.fieldGroupName + i}>
										<div className="header-btn mr-3 ml-3"><Link to={item.links.url} dangerouslySetInnerHTML={{ __html: item.links.title }} /></div>
									</div>
								))}
							</div>
						)}
					</div>
				</section>
			)}

			<section className="container">
				<div className="row">
					<div className="mx-auto col-12 col-md-11 py-md-5 mt-md-4 mb-md-3">
						<div className="payment-program" dangerouslySetInnerHTML={{__html:node.content}} />
					</div>
				</div>

				<div className="row video-section">
					<div className="m-auto col-12 col-md-11 embed-container">
						<Video videoSrcURL="https://www.youtube.com/embed/PKnMxIz4FWw?byline=0&title=0" videoTitle="EnerBank Atmospheric Video" videoWidth="100%" videoHeight="500" />
						<p className="text-center font-weight-bold mt-2 mb-4">Watch: Discover the key to unlocking business growth</p>
					</div>      
				</div>
			</section>
			
			{node.loan_program.paymentOptionsBenefits.paymentOptionHeading && (
				<div className="bg-blue mt-5" id="paymentoptbenefits">
					<h2 className="text-center py-4 h1 font-weight-bold text-white">
						{node.loan_program.paymentOptionsBenefits.paymentOptionHeading}
					</h2>
				</div>
			)}

			<div className="container">
				{node.loan_program.paymentOptionsBenefits.paymentOptionBrif && (
					<div className="row">
						<div className="mx-auto col-12 col-md-11 my-3 my-lg-5 py-3">
							<div className="font-weight-bold" dangerouslySetInnerHTML={{ __html: node.loan_program.paymentOptionsBenefits.paymentOptionBrif }} />
						</div>
					</div>
				)}
				{node.loan_program.paymentOptionsBenefits.paymentOptions && (
					<div className="payment-option row">
						<ul className="col-12 px-3">
							{node.loan_program.paymentOptionsBenefits.paymentOptions.map((item, i) =>
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

				{node.loan_program.offeringPaymentOption && (
					<div className="my-3 my-md-5 py-4 row">
						{node.loan_program.offeringPaymentOption.map((item, i) => (
							(i === 0) 
								?
									<div key={item.fieldGroupName + i} className="box-shadow bg-white rounded text-center col-12 col-md-6 p-0 mb-3 mx-auto">
										<Link to={'/'} onClick={showbenefitpopup(item, 'growthCalc')}>
											<div className="bg-blue p-5 rounded-top">
												<img className="img-fluid" src={item.offeringPaymentIcon.sourceUrl} alt="Growth Calculator icon" />
											</div>
											<div className="p-4 text-black" dangerouslySetInnerHTML={{ __html: item.offeringPaymentBrif }} />
										</Link>
									</div>
								: ""
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
						))}
					</div>
				)}
			</div>

			{node.loan_program.joinLoanProgram && (
				<section className="joinLoanProgram" id="joinloanprogram">
					{node.loan_program.joinLoanProgram.loanProgramMethodHeading && (
						<div className="bg-blue">
							<h3 className="text-center py-4 h1 f-bold text-white">
								{node.loan_program.joinLoanProgram.loanProgramMethodHeading}
							</h3>
						</div>
					)}
					<div className="container">						
						<div className="row pb-4">
							<h3 className="mx-auto col-12 col-md-11 my-5 pt-md-3" dangerouslySetInnerHTML={{ __html: node.loan_program.joinLoanProgram.loanProgramIntro }} />
							<Link to={'/contact-us'} className="m-auto px-5 btn btn-primary">Join Now</Link>
						</div>
						<h3 className="h2 text-center f-bold color-blue border-heading mt-5 mb-3"><span>{node.loan_program.joinLoanProgram.sectionTitle}</span></h3>
						{node.loan_program.joinLoanProgram.loanProgramMethods && (
							<div className="row mt-4 mb-5 justify-content-center">
								{data.wpgraphql.popupplural.edges.map(cate => {
									(cate.node.slug === "loanprogrammethods") && (
										cate.node.popupPost.edges.map(post => {
											node.loan_program.joinLoanProgram.loanProgramMethods.map((item, i) => 
												(item.popSlug === post.node.slug) && (programMethod[i] = post.node)
											)
										})
									)
								})}
								
								{node.loan_program.joinLoanProgram.loanProgramMethods.map((item, i) => (
									<div className="col-md-6 col-lg-4 mb-4 mb-lg-0 justify-content-center" key={item.fieldGroupName + i}>
										<div className="card wygbox box-shadow loan-program-method">
											<style dangerouslySetInnerHTML={{
												__html: [
													'.'+item.popSlug+':after {',
														'background: rgba(77, 77, 77, 0.3) url(' + item.programMethodIcon.sourceUrl + ') no-repeat center',
													'}'
												].join('\n')
											}}></style>											
											<div className={'wygthumb ' + item.popSlug}>
												<img src={item.programMethodsBgImage.sourceUrl} className="card-img-top" alt="Dealer Resource Center" />
											</div>
											<div className="card-body">
												<h3 className="card-title" dangerouslySetInnerHTML={{ __html: item.programMethodTitle }} />
												<p className="card-text mb-3 mt-auto" dangerouslySetInnerHTML={{ __html: item.programMethodBrif }} />
											</div>
											{(() => (
												!item.popSlug ? 
													<button className="border-0 rounded-bottom bg-blue text-white text-lg py-3" onClick={showbenefitpopup(programMethod[i], item.popSlug)}>Coming Soon</button>
												:
													<button className="btn-link text-lg py-3" onClick={showbenefitpopup(programMethod[i], item.popSlug)}>Learn More</button>
											))()}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</section>
			)}

			{node.loan_program.onlineAppIntegration && (
				<>
					<div className="container pt-1">
						{node.loan_program.onlineAppIntegration.appIntegrationBrif && (
							<div className="mt-5 pt-4 pb-3 px-4 px-lg-5 box-shadow">
								<h3 className="h1 text-blue text-center mb-4 ">{node.loan_program.onlineAppIntegration.appIntegrationHeading}</h3>
								<p dangerouslySetInnerHTML={{__html: node.loan_program.onlineAppIntegration.appIntegrationBrif}} />
							</div>
						)}

						{node.loan_program.onlineAppIntegration.appIntegrationStep && (
							<div className="p-3 p-sm-4 p-lg-5 mb-5" style={{ backgroundColor: '#e6e7e8' }}>
								<img src={node.loan_program.onlineAppIntegration.appIntegrationStep.sourceUrl} alt="app integration step" />
							</div>
						)}

						{node.loan_program.onlineAppIntegration.appIntegrationOption && (
							<div className="row pt-5">
								{data.wpgraphql.popupplural.edges.map(cate => {
									(cate.node.slug === "appintegrationoptions") && (
										cate.node.popupPost.edges.map((post) => {
											node.loan_program.onlineAppIntegration.appIntegrationOption.map((item, i) => 
												(item.popSlug === post.node.slug) && (onlineApp[i] = post.node)
											)
										})
									)
								})}

								{node.loan_program.onlineAppIntegration.appIntegrationOption.map((item, i) => {
									const appIntOpt = ['loantype', 'training']
									return(
										<div key={item.fieldGroupName + i} className={'card box-shadow bg-white rounded text-center payment-option-box col-12 col-md-6 mb-3 mb-lg-0 p-0 ml-md-3 ml-lg-5 ' + appIntOpt[i]}>
											<div className="wygthumb">
												<img src={item.integrationOptionBgImage.sourceUrl} className="card-img-top" alt={item.integrationOptionBgImage.altText} />
											</div>
											<div className="p-4 card-body">
												<h3 className="mb-1 flex-fill" dangerouslySetInnerHTML={{__html: item.integrationOptionHeading}} />
												<p className="card-text mb-3 flex-fill" dangerouslySetInnerHTML={{ __html: item.integrationOptionBrif }} />
												<button className="btn-link text-lg mt-auto" onClick={showbenefitpopup(onlineApp[i], item.popSlug)}>Learn More</button>
											</div>
										</div>
									)
								})}
							</div>
						)}
					</div>
				</>
			)}

			{node.loan_program && (
				<div className="container">					
					<div className="row">
						<div className="mx-auto col-12 col-md-11">
							<div className="mt-5 py-md-4 pb-0 payment-program">
								<h3 className="h2 text-center font-weight-bold mb-3">What’s Your Specialty? We’ve Got Loans for Whatever You Do!</h3>
								<p>We offer loans for a ton of different home improvement project types. From the foundation all the way up to the roof — inside, outside, large or small — our loans are tailored to meet virtually any home improvement need. Contact us to discover which loans will best suit your business model.</p>
							</div>
							<div className="text-center pb-5"><a className="m-auto px-5 btn btn-primary font-weight-bold" href="/contact-us">Contact Us</a></div>
							<div className="py-md-5 pb-0 payment-program">
								<h3 className="h2 text-center font-weight-bold mb-3">Our Contractor Support is Second to None</h3>
								<p>We built our whole business around working with home improvement contractors across the nation. Because we only do home improvement loans, we can provide specialized and unparalleled service, starting with your dedicated relationship manager.</p>
							</div>
						</div>
					</div>

					<div className="row justify-content-center pt-4">
						{data.wpgraphql.popupplural.edges.map((cate) => {
							return(
								(cate.node.slug === "loanservices") && (
									cate.node.popupPost.edges.map((post) => {
										node.loan_program.loanServices.map((item, i) => 
											(item.popSlug === post.node.slug) && (
												services[i] = post.node
											)
										)
									}
								))
							)
						})}
						{node.loan_program.loanServices.map((item, i) => {
							console.log('service', services[i])
							return(
								<div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={item.fieldGroupName+i}>
									<div className="single-offer card-body rounded">
										<i className="icon_circil">
											<img className="img-fluid" src={item.serviceIcon.sourceUrl} alt="News" />
										</i>
										<h4>{item.serviceHeading}</h4>
										<p className="flex-fill">{item.serviceText}</p>
										<Link to={'/'} onClick={showbenefitpopup(services[i], item.popSlug)} className="btn btn-primary f-bold">Learn More</Link>
									</div>
								</div>
							)
						})}
					</div>

					<div className="p-4 m-lg-5">
						<h3 className="h2 text-center font-weight-bold">{node.loan_program.loanProvider.sectionHeading}</h3>
						<p className="text-center py-2">{node.loan_program.loanProvider.sectionBrif}</p>
						<div className="d-flex justify-content-center howselectloan">
							{data.wpgraphql.popupplural.edges.map((cate) => {
								(cate.node.slug === "selectloanprogram") && (
									cate.node.popupPost.edges.map((post) => {
										(post.node.slug === "select-loan-provider-question") && (
											viewLoanProviderPDF = post.node
										)
									})
								)
							})}
							<button className="btn-link" onClick={showbenefitpopup(viewLoanProviderPDF, 'viewFile')}>VIEW</button>
							<div className="display-inline-block box-20" dangerouslySetInnerHTML={{__html: node.loan_program.loanProvider.yearBlock}} />    
							<button className="pdffile" onClick={() => DownloadFile(node.loan_program.loanProvider.downloadDoc.mediaItemUrl)}><img src={pdffile} alt="download PDF file icon" /> PDF</button>
						</div>
					</div>
				</div>
			)}

			<div className="bg-blue mt-5" id="createloanprogram">
				<h3 className="text-center py-4 h1 f-bold text-white">{node.loan_program.createLoanOption.sectionHeading}</h3>
			</div>

			<div className="container">
				<div className="py-5 px-md-5 pb-0 payment-program">					
					<h3 className="h2 text-center mb-3 font-weight-bold">What’s a Loan Program?</h3>
					<p>At its core, a payment options program is a way for you and your authorized dealers to achieve sales goals and overcome sales-related challenges. Your customized, private-label loan program is designed to achieve your organization’s goals while building brand recognition.</p>
				</div>

				<div className="p-md-5 pb-0 mb-5 payment-program">					
					<h3 className="h2 text-center mb-3 font-weight-bold">Who Should Create a Loan Program?</h3>
					<p>If your organization works with a network of contractors, installers, dealers, or other authorized clients who work in the home improvement business, you should create a loan program. It’s a smart and easy way to boost your growth and gain brand loyalty.</p>
				</div>
				
				<h3 className="h2 text-center mb-4 mb-md-3 font-weight-bold">Why Should You Create a Loan Program?</h3>
				<div className="row flex-wrap my-4 my-lg-5">						
					{data.wpgraphql.popupplural.edges.map((cate) => {
						(cate.node.slug === "createloanprogram") && (
							cate.node.popupPost.edges.map((post) => {
								node.loan_program.createLoanOption.sectionOption.map((item, i) => {
									(item.popSlug === post.node.slug) && (createProgram[i] = post.node)
								})
							})
						)
					})}
					{node.loan_program.createLoanOption.sectionOption.map((item, i) => {
						const appIntOpt = ['whatsinit', 'whatsinitdealers']
						return (
							<div key={item.fieldGroupName + i}  className={'box-shadow bg-white rounded text-center payment-option-box col-12 col-md-12 col-md mb-3 mb-lg-0 p-0 mr-md-3 mr-lg-5 '+ appIntOpt[i]}>
								<div className="wygthumb benefitloan">
									<img src={item.integrationOptionBgImage.sourceUrl} className="card-img-top" alt={item.integrationOptionBgImage.altText} />
								</div>
								<div className="p-4">
									<div dangerouslySetInnerHTML={{__html: item.integrationOptionBrif}}></div>
									<button onClick={showbenefitpopup(createProgram[i], item.popSlug)} className="btn-link text-lg">Learn More</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>

			<h3 className="h2 text-center px-3 p-md-5 mt-4 mb-2 font-weight-bold">Why EnerBank is the Right Choice as Your Loan Program Partner</h3>

			<div className="container">
				<div className="row justify-content-center">
					{data.wpgraphql.popupplural.edges.map((cate) => {
						(cate.node.slug === "rightchoiceloanprogram") && (
							cate.node.popupPost.edges.map((post) => {
								node.loan_program.rightChoice.map((item, i) => {
									(item.popSlug === post.node.slug) && (rightChoice[i] = post.node)
								})
							})
						)
					})}
					
					{node.loan_program.rightChoice.map((item, i) => {
						return(
							<div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={item.fieldGroupName+i}>
								<div className="single-offer card-body">
									<i className="icon_circil">
										<img className="img-fluid" src={item.rightChoiceIcon.sourceUrl} alt="item.serviceIcon.altText" />
									</i>
									<div className="py-4 flex-fill" dangerouslySetInnerHTML={{__html: item.rightChoiceDesc}} />
									<button onClick={showbenefitpopup(rightChoice[i], item.popSlug)} className="btn btn-primary f-bold">Learn More</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>

			<div className="easyApp bg-blue my-5 py-5">
				<style dangerouslySetInnerHTML={{
					__html: [
						'.easyApp:after {',
							'background: #0077C8 url(' + node.loan_program.easyApplication.easyApplicationBanner.sourceUrl + ') no-repeat left/cover',
						'}'
					].join('\n')
				}}></style>
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-5"></div>
						<div className="col-12 col-sm-7">
							<h3 className="text-white mb-4">{node.loan_program.easyApplication.easyApplicationHeading}</h3>
							<ul>
								{node.loan_program.easyApplication.easyApplicationProcess.map((item, i) => {
									return(										
										<li key={item.fieldGroupName + i}>{item.easyApplicationSteps}</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		
			<div className="m-md-4 m-lg-5">
				<h3 className="h2 px-3 f-bold text-center font-weight-bold">{node.loan_program.selectPartner.sectionHeading}</h3>
				<p className="text-center py-2">{node.loan_program.selectPartner.sectionBrif}</p>
				<div className="d-flex justify-content-center howselectloan">
					{data.wpgraphql.popupplural.edges.map((cate) => {
						(cate.node.slug === "selectloanprogram") && (
							cate.node.popupPost.edges.map((post) => {
								(post.node.slug === "selecting-a-loan-program-partner") && (
									viewLoanPartnerPDF = post.node
								)
							})
						)
					})}
					<button className="btn-link" onClick={showbenefitpopup(viewLoanPartnerPDF, 'viewFile')}>VIEW</button>
					<div className="display-inline-block box-20" dangerouslySetInnerHTML={{__html: node.loan_program.selectPartner.yearBlock}} />    
					<button className="pdffile" onClick={() => DownloadFile(node.loan_program.selectPartner.downloadDoc.mediaItemUrl)}><img src={pdffile} alt="download PDF file icon" /> PDF</button>
				</div>
			</div>

			{node.loan_program.partnerSays && (
				<>
					<div className="container">
						<h3 className="h2 text-center mx-md-5 mb-3 my-5 my-md-2 p-md-5 font-weight-bold">
							<span>What Our Partners Say</span>
							<hr style={{ height: '2px', background: '#444', marginTop: '1.5rem' }}></hr>
						</h3>
					</div>

					<Carousel showArrows={true} centerMode infiniteLoop>
						{node.loan_program.partnerSays.map((item, i) =>
							(
								<div key={item.fieldGroupName + i}>
									<img src={item.partnerLogo.sourceUrl} alt={item.partnerLogo.altText} className="img-fluid mb-4" />
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
		popupplural {
			edges {
				node {
					id
					slug
					popupPost {
						edges {
							node {
								id
								slug
								title
								content
								appmethod {
									paperlessmethod {
										fieldGroupName
										sectionicon {
											sourceUrl
											altText
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
											altText
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
								popupchecklist {
									fieldGroupName
									checklistGroup {
										checklistName
										fieldGroupName
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
								bannerrepeater {
									bannerGroup {
										fieldGroupName
										banner {
											altText
											sourceUrl
										}
									}
								}
							}
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
						popSlug
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
						popSlug
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
					fieldGroupName
					sectionHeading
					sectionBrif
					yearBlock
					downloadDoc {
					  altText
					  mediaItemUrl
					  mediaType
					}
				}

				selectPartner {
					fieldGroupName
					sectionBrif
					sectionHeading
					yearBlock
					downloadDoc {
					  altText
					  mediaItemUrl
					  mediaType
					}
				}

				createLoanOption {
					sectionHeading
					sectionBrif
					sectionOption {
						fieldGroupName
						popSlug
						integrationOptionBrif
						integrationOptionBgImage {
							altText
							sourceUrl
						}
						integrationOptionIcon {
							sourceUrl
							altText
						}
					}
				}
				rightChoice {
					fieldGroupName
					rightChoiceDesc
					rightChoiceIcon {
					  sourceUrl
					  altText
					}
					rightChoiceLink {
					  target
					  title
					  url
					}
					popSlug
				}
				easyApplication {
					easyApplicationHeading
					fieldGroupName
					easyApplicationBanner {
					  sourceUrl
					  altText
					}
					easyApplicationProcess {
					  easyApplicationSteps
					  fieldGroupName
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