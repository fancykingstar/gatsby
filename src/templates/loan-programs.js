import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paymentbenefitoption from "../components/paymentBenefitsPopup"

const LoanProgramPage = ({ data }) => {

	const [visible, setVisible] = useState(false);
	const [popData, setPopData] = useState('');
	const showbenefitpopup = param => event => {
		event.preventDefault();
		setPopData(param)
		setVisible(true);
	}
	const hidebenefitpopup = () => {
		console.log('hidebenefitpopup');
		setVisible(false);
	}
	return (
		<Layout>
			<SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt} />

			{data.wpgraphql.page.top_banner.banner.backgroundImage && (
				<section className="banner-area" id="home" style={{ backgroundImage: "url(" + data.wpgraphql.page.top_banner.banner.backgroundImage.sourceUrl + ")" }}>
					<div className="container">
						<div className="row fullscreen d-flex align-items-end pb-5">
							{data.wpgraphql.page.top_banner.banner.bannerLinks.map((item, i) =>
								(
									<div className="col-md-4" key={item.fieldGroupName + i}>
										<div className="header-btn mr-3 ml-3"><Link to="#" dangerouslySetInnerHTML={{ __html: item.links.title }} /></div>
									</div>
								)
							)}
						</div>
					</div>
				</section>
			)}

			{data.wpgraphql.page.loan_program.paymentOptionsBenefits.paymentOptionHeading && (
				<div className="bg-blue">
					<h1 className="container text-center py-4 h2 text-white">
						{data.wpgraphql.page.loan_program.paymentOptionsBenefits.paymentOptionHeading}
					</h1>
				</div>
			)}

			<div className="container">
				{data.wpgraphql.page.loan_program.paymentOptionsBenefits.paymentOptionBrif && (
					<div className="row justify-content-center">
						<div className="m-3 m-lg-5 pb-3" dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.loan_program.paymentOptionsBenefits.paymentOptionBrif }} />
					</div>
				)}
				{data.wpgraphql.page.loan_program.paymentOptionsBenefits.paymentOptions && (
					<div className="payment-option">
						<ul>
							{data.wpgraphql.page.loan_program.paymentOptionsBenefits.paymentOptions.map((item, i) =>
								(
									<li key={item.fieldGroupName + i}>
										<a onClick={showbenefitpopup(item)} href="#" data-target="#paymentModal" data-title={item.paymentOptionTitle} data-content="Advertising payment options is a great way to set you apart from your competitors and produce more leads for your business.">
											<div className="box-circle icon bg-blue content-center">
												<img src={item.paymentOptionIcon.sourceUrl} alt={item.fieldGroupName} />
											</div>
											<p dangerouslySetInnerHTML={{ __html: item.paymentOptionTitle }} />
										</a>
									</li>
								)
							)}
						</ul>
					</div>
				)}

				{data.wpgraphql.page.loan_program.offeringPaymentOption && (
					<div className="my-3 my-md-5 row">
						{data.wpgraphql.page.loan_program.offeringPaymentOption.map((item, i) =>
							(
								<div key={item.fieldGroupName + i} className="box-shadow bg-white rounded text-center payment-option-box col-xs-12 col-md p-0 mb-3 mx-sm-3 mx-lg-5">
									<div className="bg-blue p-5 rounded-top">
										<img className="img-fluid" src={item.offeringPaymentIcon.sourceUrl} alt="News" />
									</div>
									<div className="p-4" dangerouslySetInnerHTML={{ __html: item.offeringPaymentBrif }} />
								</div>
							)
						)}
					</div>
				)}
			</div>

			{data.wpgraphql.page.loan_program.joinLoanProgram && (
				<section className="joinLoanProgram">
					{data.wpgraphql.page.loan_program.joinLoanProgram.loanProgramMethodHeading && (
						<div className="bg-blue">
							<h1 className="container text-center py-4 h2 text-white">
								{data.wpgraphql.page.loan_program.joinLoanProgram.loanProgramMethodHeading}
							</h1>
						</div>
					)}
					<div className="container">
						{data.wpgraphql.page.loan_program.joinLoanProgram.loanProgramIntro && (
							<div className="brif" dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.loan_program.joinLoanProgram.loanProgramIntro }} />
						)}
						{data.wpgraphql.page.loan_program.joinLoanProgram.loanProgramMethods && (
							<div className="row my-5">
								{data.wpgraphql.page.loan_program.joinLoanProgram.loanProgramMethods.map((item, i) =>
									(
										<div className="col-lg-4 mb-4 mb-lg-0" key={item.fieldGroupName + i}>
											<div className="card wygbox box-shadow">
												<div className="wygthumb apps">
													<img src={item.programMethodsBgImage.sourceUrl} className="card-img-top" alt="Dealer Resource Center" />
												</div>
												<div className="card-body" dangerouslySetInnerHTML={{ __html: item.programMethodBrif }} />
											</div>
										</div>
									)
								)}
							</div>
						)}
					</div>
				</section>
			)}

			{data.wpgraphql.page.loan_program.onlineAppIntegration && (
				<>
					<div className="container">
						{data.wpgraphql.page.loan_program.onlineAppIntegration.appIntegrationStep && (
							<div className="p-3 p-sm-4 p-lg-5" style={{ backgroundColor: '#e6e7e8' }}>
								<div className="h1 text-dark text-center mb-4 font-weight-normal">{data.wpgraphql.page.loan_program.onlineAppIntegration.appIntegrationHeading}</div>
								<img src={data.wpgraphql.page.loan_program.onlineAppIntegration.appIntegrationStep.sourceUrl} alt="app integration step" />
							</div>
						)}

						{data.wpgraphql.page.loan_program.onlineAppIntegration.appIntegrationBrif && (
							<div className="my-4 my-lg-5 mx-4 mx-lg-5 p-3">{data.wpgraphql.page.loan_program.onlineAppIntegration.appIntegrationBrif}</div>
						)}

						{data.wpgraphql.page.loan_program.onlineAppIntegration.appIntegrationOption && (
							<div className="d-flex flex-wrap">
								{data.wpgraphql.page.loan_program.onlineAppIntegration.appIntegrationOption.map((item, i) => (
									<div key={item.fieldGroupName + i} className="box-shadow bg-white rounded text-center payment-option-box col-xs-12 col-md mb-3 mb-lg-0 p-0 ml-md-3 ml-lg-5">
										<div className="wygthumb training">
											<img src={item.integrationOptionBgImage.sourceUrl} className="card-img-top" alt="Training" />
										</div>
										<div className="p-4" dangerouslySetInnerHTML={{ __html: item.integrationOptionBrif }} />
									</div>
								))}
							</div>
						)}
					</div>
				</>
			)}

			{data.wpgraphql.page.loan_program && (
				<div className="container">
					<div className="m-4 m-lg-5">We offer loans for a ton of different home improvement project types. Don’t see your type here? <Link to="#">Give us a call</Link>.</div>
					<div className="accordion loan_offer mx-4 mx-lg-5" id="accordionExample">
						<button className="d-block w-100 text-left btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Interior Remodeling</button>
						<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
							<div className="card-body">Does your customer need an extra bedroom, or maybe want to knock out a wall for that killer entertainment cave? Are they turning the dining room into a library, or updating the kitchen? Is it time for an extra bathroom? Ready for new flooring? These are just a few of the interior jobs that EnerBank can fund. Great loans for these job types include Same-As-Cash Loans and Reduced Interest Loans.</div>
						</div>
						<button className="d-block w-100 text-left btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Additions</button>

						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
							<div className="card-body">Are you building an add-on for your customer, to increase the total square footage? EnerBank has loans for that type of project. The best loan type for an addition is a Reduced Interest Loan.</div>
						</div>
						<button className="d-block w-100 text-left btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Exterior Remodeling</button>

						<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
							<div className="card-body">These projects include pain, siding, and even new paving stones. EnerBank is ready to provide the loans your customer needs for all exterior projects, including Same-As-Cash Loans and Zero Interest Loans.</div>
						</div>
						<button className="d-block w-100 text-left btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">HVAC</button>

						<div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
							<div className="card-body">Heating, ventilation and air conditioning jobs are served well by offering payment options, because many times they’re unexpected expenses for which a customer could use some financial flexibility. Be sure to offer a Same-As-Cash Loan option and perhaps something with a longer term.</div>
						</div>
						<button className="d-block w-100 text-left btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">Solar</button>

						<div id="collapseFive" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
							<div className="card-body">EnerBank proudly offers several customized loan options for funding solar PV projects, including Same-As-Cash, a Combo EZ Loan, and our popular Triple Option Loan that really helps homeowners decide for themselves how best to manage their liquidity.</div>
						</div>
					</div>
					<div className="row m-4 m-lg-5">
						<div className="col-md-12 text-justify">
							<p>We are working to become the most sought after lender in the home improvement industry. We choose to specialize in home improvement payment options so we can offer unparalleled service and support, comprehensive payment options designed with consumers in mind, and tools that will help your business succeed. </p>
						</div>
					</div>

					<div className="row">
						{data.wpgraphql.page.loan_program.loanServices.map((item, i) => (
							<div className="col-lg-4 mb-4 mb-lg-0">
								<div className="single-offer card-body">
									<i className="icon_circil">
										<img className="img-fluid" src={item.serviceIcon.sourceUrl} alt="News" />
									</i>
									<h4>{item.serviceHeading}</h4>
									<p>{item.serviceText}</p>
									<Link to="" data-toggle="modal" data-target="#50-state" className="btn btn-primary f-bold">Learn More</Link>
								</div>
							</div>
						))}
					</div>

				</div>
			)}

			{data.wpgraphql.page.loan_program.partnerSays && (
				<>
					<div className="container">
						<h3 className="text-center mx-5 mb-3 my-2 p-5">
							<span>What Our Partners Say</span>
							<hr style={{ height: '2px', background: '#444', marginTop: '1.5rem' }}></hr>
						</h3>
					</div>

					<Carousel showArrows={true} centerMode infiniteLoop>
						{data.wpgraphql.page.loan_program.partnerSays.map((item, i) =>
							(
								<div key={item.fieldGroupName + i}>
									<img src={item.partnerLogo.sourceUrl} alt="partner logo" className="img-fluid" />
									<div dangerouslySetInnerHTML={{ __html: item.partnerComment }} />
								</div>
							)
						)}
					</Carousel>
				</>
			)}

			<Paymentbenefitoption visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />
		</Layout>

	)
}

export default LoanProgramPage

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
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
            loanProgramMethods {
              fieldGroupName
              programMethodBrif
              programMethodIcon {
                sourceUrl
              }
              programMethodsBgImage {
                sourceUrl
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
                sourceUrl
              }
              integrationOptionIcon {
                sourceUrl
              }
            }
            appIntegrationStep {
              sourceUrl
            }
          }

          loanServices {
                serviceHeading
                serviceText
                serviceLink {
                    target
                    title
                    url
                }
                serviceIcon {
                    sourceUrl
                }    
          }


        }
      }
    }
  }
`