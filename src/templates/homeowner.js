import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "gatsby";
import { graphql } from "gatsby";

import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion';
import "react-tabbordion/demo/accordion.css";

import Layout from "../components/layout"
import SEO from "../components/seo"

// accordian
const blockElements = {
    animator: 'accordion-animator',
    content: 'accordion-content',
    panel: 'accordion-panel',
    label: 'accordion-title',
}

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

            <Tabbordion blockElements={blockElements} animateContent={'height'} mode={'toggle'} className="accordion loan_offer mx-4 mx-lg-5" name="accordion">
                {data.wpgraphql.page.accordion.tabpanel.map((item, i) =>
                    (
                        <TabPanel>
                            <TabLabel className="w-100 text-left btn btn-link">{item.tablabel}</TabLabel>
                            <TabContent>
                                <div dangerouslySetInnerHTML={{ __html: item.tabcontent}} />
                            </TabContent>
                        </TabPanel>
                    )
                 )}
            </Tabbordion>

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

                accordion {
                    tabpanel {
                        fieldGroupName
                        tabcontent
                        tablabel
                    }
                }
            }
        }
    }
`