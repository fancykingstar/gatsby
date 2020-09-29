import React from "react";

import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeOwnerPage = ({data}) => {
  return (  
    <Layout>
        <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>

        {data.wpgraphql.page.top_banner.banner.backgroundImage && (
            <section className="banner-area pos_relative" id="home" style={{ backgroundImage: "url(" + data.wpgraphql.page.top_banner.banner.backgroundImage.sourceUrl + ")" }}>
                <div className="container">
                    <div className="row h-half d-flex align-items-end pb-5">
                        { data.wpgraphql.page.top_banner.banner.bannerLinks.map((item, i) => {
                            return (
                                <div className="col-md-4" key={item.fieldGroupName+i}>
                                    <div className="header-btn"><Link className="mr-auto" to={"/"} dangerouslySetInnerHTML={{ __html: item.links.title}} /></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )}

        <section className="service-area section-gap" id="whychoosebank">
            <div className="container">
                <div className="row justify-content-center">
                    {data.wpgraphql.page.content && (
                        <div className="col-md-12 header-text mb-4" dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content}} />
                    )}
                </div>

                <div className="benefit-option">
                    <ul>
                        {data.wpgraphql.page.home_owner.benefitOption.map((item, i) =>
                            (
                                <li key={item.fieldGroupName + i}>
                                    <div className="box-circle icon bg-blue content-center">
                                        <img src={item.optionIcon.sourceUrl} alt={item.optionIcon.altText} />
                                    </div>
                                    <p dangerouslySetInnerHTML={{ __html: item.optionTitle }} />
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </section>
        <section className="pt-30 pb-30 relative" style={{background: 'url('+ data.wpgraphql.page.home_owner.paymentBanner.sourceUrl +') center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '515px'}}></section>
        
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
                    benefitOption {
                        fieldGroupName
                        optionTitle
                        optionIcon {
                            id
                            sourceUrl
                            altText
                            title
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
    }
`