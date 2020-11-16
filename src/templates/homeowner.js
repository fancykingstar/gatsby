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
import close_icon from '../images/closed_icon-blue.svg'
import { Modal } from 'react-bootstrap';

// accordian
const blockElements = {
    animator: 'accordion-animator',
    content: 'accordion-content',
    panel: 'accordion-panel',
    label: 'accordion-title',
}

const HomeOwnerPage = ({data}) => {
    const node = data.wpgraphql.page;
    const [collapse, setCollapse] = useState(false);
    // const [status, setStatus] = useState('Closed');
    // const onEntering = () => setStatus('Opening...');
    // const onEntered = () => setStatus('Opened');
    // const onExiting = () => setStatus('Closing...');
    // const onExited = () => setStatus('Closed');

    const [accLogin, togglePanel] = useState(false);
    const loginForm = () => {
      togglePanel(true);
    }

    const closeLoginForm = () => {
      togglePanel(false);
    }

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
        <SEO title={node.title} description={node.excerpt}/>

        {node.top_banner.banner.backgroundImage && (
            <section className="banner-area pos_relative" id="home">
                <img src={node.top_banner.banner.backgroundImage.sourceUrl} alt={node.top_banner.banner.backgroundImage.altText} />
                <div className="background-holder">
                <Video videoSrcURL={node.video_section.video.videoUrl} allow="autoplay" videoTitle="EnnerBankUSA. America's home improvement lender of choice" videoWidth="100%" videoHeight="500" />
                    <div className="container d-flex align-items-end p-0 pb-md-5 position-absolute banner-btn-container">
                        { node.top_banner.banner.bannerLinks.map((item, i) => {
                            if(i === 1){
                                const links = item.links.url
                                return (
                                    <div className="col-md-4 py-2 py-md-0" key={item.fieldGroupName+i}>
                                        <div className="header-btn"><a className="mr-auto" href={links} target="_blank" dangerouslySetInnerHTML={{ __html: item.links.title}} /></div>
                                    </div>
                                )
                            }else if(i === 0){
                                return (
                                    <div className="col-md-4 py-2 py-md-0" key={item.fieldGroupName+i}>
                                        <div className="header-btn"><a className="mr-auto btn" onClick={loginForm} dangerouslySetInnerHTML={{ __html: item.links.title}} /></div>
                                    </div>
                                )
                            }else{
                                return (
                                    <div className="col-md-4 py-2 py-md-0" key={item.fieldGroupName+i}>
                                        <div className="header-btn"><Link className="mr-auto" to={item.links.url} dangerouslySetInnerHTML={{ __html: item.links.title}} /></div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </section>
        )}

        <section className="service-area section-gap" id="whychoosebank">
            <div className="container">
                {node.content && (
                    <div className="row justify-content-center" dangerouslySetInnerHTML={{ __html: node.content}} />
                )}

                <div className="benefit-option">
                    <ul>
                        {node.home_owner.benefitOption.map((item, i) =>
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
        <section className="pt-3 pb-3 relative" style={{background: 'url('+ node.home_owner.paymentBanner.sourceUrl +') center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '515px'}}></section>
        
        <section className="section-gap container" id="howtopay">
            <h2 className="mb-5 mb-md-3 text-center"><span>Six Ways to Make a Payment</span></h2>
            <Tabbordion blockElements={blockElements} animateContent={'height'} mode={'toggle'} className="accordion loan_offer mx-4 mx-lg-5" name="accordion">
                {node.accordion.tabpanel.map((item, i) =>
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
                {/* <button onClick={toggle} className="btn btn-primary f-bold equal-wd mb-4">Leave Feedback</button> */}
                <a href="/feedback" className="btn btn-primary text-white f-bold equal-wd mb-4">Leave Feedback</a>
            </div>
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

        
        {accLogin && (
            <Modal show={accLogin} animation={true} centered={true} size="md">
                <button type="button" className="close text-black" data-dismiss="modal" aria-label="Close" onClick={closeLoginForm}>
                    <img src={close_icon} width="16" alt="close icon" style={{fill:'#4d4d4d', opacity: 1}} />
                </button>
                <div className="p-4">
                    <h4 className="modal-title mb-4" id="modalTitle">Borrower Account Log In</h4>
                    <div id="modalContent" className="small line-height-normal">
                        <p style={{lineHeight: 'normal'}}>If your account number starts with 456 <br/><a href="https://accounts.enerbank.com" target="_blank">Click Here </a></p>
                        <p style={{lineHeight: 'normal'}}>Otherwise <br/><a href="https://enerbankpayments.com/">Click Here</a></p>
                    </div>
                </div>
            </Modal>
        )}

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
                           altText
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
                        altText
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