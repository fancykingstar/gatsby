import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeOwnerPage = ({data}) => {
  return (  
    <Layout>
        <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>

        {data.wpgraphql.page.top_banner.banner.backgroundImage && (
            <section className="banner-area" id="home" style={{ backgroundImage: "url(" + data.wpgraphql.page.top_banner.banner.backgroundImage.sourceUrl + ")" }}>
                <div className="container">
                    <div className="row fullscreen d-flex align-items-end pb-5">
                        { data.wpgraphql.page.top_banner.banner.bannerLinks.map((item, i) => 
                            (
                                <div className="col-md-4" key={item.fieldGroupName+i}>
                                    <div className="header-btn mr-3 ml-3"><Link to="#" dangerouslySetInnerHTML={{ __html: item.links.title}} /></div>
                                </div>
                            ) 
                        )}
                    </div>
                </div>
            </section>
        )}

        <section className="service-area section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    {data.wpgraphql.page.content && (
                        <div className="col-md-12 header-text mb-4" dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content}} />
                    )}
                </div>
            </div>
        </section>

        <section className="pt-30 pb-30 relative" style={{background: 'url('+ data.wpgraphql.page.home_owner.paymentBanner.sourceUrl +') center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '515px'}}></section>
        
        <section className="section-gap container">
            {/* <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.home_owner.makePaymentWay}} /> */}

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

            <div className="text-center mt-4">
                <Link to="/" className="btn btn-primary f-bold equal-wd mb-4">Account Log In</Link>
                <Link to="/" className="btn btn-primary f-bold equal-wd mb-4 ml-3">Automatic Debit Form (PDF)</Link>
            </div>
        </section>

  </Layout>
  
)}

export default HomeOwnerPage

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
                home_owner {
                    makePaymentWay
                    paymentBanner {
                        sourceUrl
                    }
                }
            }
        }
    }
`