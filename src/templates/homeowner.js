import React, { useState } from "react";

import { Link } from "gatsby";
import { graphql } from "gatsby";

import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion';
import "react-tabbordion/demo/accordion.css";

import { Collapse } from 'reactstrap';
// , Button, CardBody, Card
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video";

// accordian
const blockElements = {
    animator: 'accordion-animator',
    content: 'accordion-content',
    panel: 'accordion-panel',
    label: 'accordion-title',
}

const HomeOwnerPage = ({data}) => {
    const [collapse, setCollapse] = useState(false);
    // const [status, setStatus] = useState('Closed');
    // const onEntering = () => setStatus('Opening...');
    // const onEntered = () => setStatus('Opened');
    // const onExiting = () => setStatus('Closing...');
    // const onExited = () => setStatus('Closed');
    const toggle = (e) => {
        e.preventDefault();
        setCollapse(!collapse)
    }

    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    };

  return (  
    <Layout>
        <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>

        {data.wpgraphql.page.top_banner.banner.backgroundImage && (
            <section className="banner-area pos_relative" id="home" style={{ backgroundImage: "url(" + data.wpgraphql.page.top_banner.banner.backgroundImage.sourceUrl + ")" }}>
                <div className="background-holder">
                    <Video videoSrcURL={data.wpgraphql.page.video_section.video.videoUrl} allow="autoplay" videoTitle="homeowner page video" videoWidth="100%" videoHeight="500" />
                </div>
                <div className="container">
                    <div className="row h-half d-flex align-items-end pb-5">
                        { data.wpgraphql.page.top_banner.banner.bannerLinks.map((item, i) => {
                            return (
                                <div className="col-md-4" key={item.fieldGroupName+i}>
                                    <div className="header-btn"><Link className="mr-auto" to={item.links.url} dangerouslySetInnerHTML={{ __html: item.links.title}} /></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )}

        <section className="service-area section-gap" id="whychoosebank">
            <div className="container">
                {data.wpgraphql.page.content && (
                    <div className="row justify-content-center" dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content}} />
                )}

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
        
        <section className="section-gap container" id="howtopay">
            <h2 className="mb-30 text-center"><span>Six Ways to Make a Payment</span></h2>
            <Tabbordion blockElements={blockElements} animateContent={'height'} mode={'toggle'} className="accordion loan_offer mx-4 mx-lg-5" name="accordion">
                {data.wpgraphql.page.accordion.tabpanel.map((item, i) =>
                    (
                        <TabPanel key={item.fieldGroupName + i}>
                            <TabLabel className="w-100 text-left btn btn-link">{item.tablabel}</TabLabel>
                            <TabContent>
                                <div dangerouslySetInnerHTML={{ __html: item.tabcontent}} />
                            </TabContent>
                        </TabPanel>
                    )
                 )}
            </Tabbordion>

            <div className="text-center mt-4">
                <button className="btn btn-primary f-bold equal-wd mb-4">Account Log In</button><br/>
                <button className="btn btn-primary f-bold equal-wd mb-4">Automatic Debit Form (PDF)</button>
                <p>Question about a loan? Have a comment? We want to hear from you.</p>
                {/* feedback form */}
                <button onClick={toggle} className="btn btn-primary f-bold equal-wd mb-4">Leave Feedback</button>
            </div>
            {console.log(collapse)}
            <Collapse isOpen={collapse}
                // onEntering={onEntering}
                // onEntered={onEntered}
                // onExiting={onExiting}
                // onExited={onExited}
            >
                
                <form>
                    <textarea value={value} className="form-control mb-3" name="leave_feedback" onChange={handleChange} style={{height: '100px' }} placeholder="Leave feedback here ..." />
                    <button className="btn btn-primary">Submit</button>
                    <button className="btn btn-primary ml-3" onClick={toggle}>Cancel</button>
                </form>

            </Collapse>
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