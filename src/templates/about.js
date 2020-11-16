import React, { useState, useRef } from "react";
import { graphql, Link } from "gatsby";
import "react-tabbordion/demo/accordion.css";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video";

// import popup
import DirectorOne from '../components/directorPopups/directorPopup1'

// import images
import VisionUnsplash from '../images/absolutvision-unsplash.jpg';
import BakerUnsplash from '../images/kaitlyn-baker-unsplash.jpg';

const About = ({data}) => {
    const content = data.wpgraphql.page;
    const [visible, setVisible] = useState(false);
    const [popData, setPopData] = useState('');
    const handstick = useRef(null)

    const showbenefitpopup = (param) => event => {
		event.preventDefault();
		setPopData(param);
		setVisible(true);
	}
    
    const hidebenefitpopup = () => {
        setVisible(false);
    }
    
  return (  
    <Layout>
        <SEO title={content.title} description={content.excerpt} />
            {/* start banner Area */}
            <section className="container my-5 pt-4">
                <div className="row d-flex align-items-end">
                    <div className="col-md-11 m-auto" dangerouslySetInnerHTML={{__html: content.content}} />
                </div>
            </section>
            {/* Video Area */}
            {content.video_section.video.videoUrl && (
                <section className="video-section mb-5">
                    <div className="container">
                    <div className="row d-flex align-items-end">
                        <div className="col-md-10 m-auto embed-container" ref={handstick}>  {/*  onClick={this.handleClick} */}
                            <Video videoSrcURL={content.video_section.video.videoUrl} videoTitle="CEO Intro For About Us Page" videoWidth="100%" videoHeight="500" />
                        </div>
                    </div>
                    </div>
                </section>
            )}
            {/* enerbank leadership */}
            <section className="container-fluid">
                <div className="row flex-column">
                    <div className="position-absolute w-100 pb-5 leadership-heading px-3" dangerouslySetInnerHTML={{__html: content.about.enerbankLeadership.leadershipHeading}} />
                    <img src={content.about.enerbankLeadership.leadershipBanner.sourceUrl} alt="Leader Banner" className="w-100" />
                </div>
            </section>

            <section className="bg-blue" id="memberfdic">
                <div className="container py-5 text-white">
                    <div className="col-12 col-md-11 mx-auto">
                        <div className="d-flex flex-column" dangerouslySetInnerHTML={{__html: content.about.memberFdic.fdicDescription}} />
                        <hr className="border-white" />
                        <img className="d-block mt-5 mx-auto" alt="Fdic logo" src={content.about.memberFdic.fdicLogo.sourceUrl} data-holder-rendered="true" />
                    </div>
                </div>
            </section>
            {/* Community Involvement */}
            <div className="container py-5 my-0 my-md-5 communityinvolvement" id="communityinvolvement">
                <h3 className="h2 text-center mb-3">{content.about.communityInvolvement.ciHeading}</h3>
                <p>{content.about.communityInvolvement.ciBrif}</p>
                <div className="row my-5">
                    <div className="gridgallery col-lg-12">
                        {content.about.communityInvolvement.ciLogos.map((item, i) => {
                            if(i === 0){
                                return(
                                    <div className="horizontal" key={item.logo.id}>
                                        <img alt="PHP" className="d-block mx-auto community-logo" src={item.logo.sourceUrl} data-holder-rendered="true" />
                                    </div>
                                )
                            }else{
                                return(
                                    <div className="verticle" key={item.logo.id}>
                                        <img alt="PHP" className="d-block mx-auto community-logo" src={item.logo.sourceUrl} data-holder-rendered="true" />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-10 m-auto" dangerouslySetInnerHTML={{__html: content.about.cmsEnergy}} />
                    <div className="col-12 col-md-10 m-auto" dangerouslySetInnerHTML={{__html: content.about.boardOfDirectors.boardBrif}} />
                </div>
                
                <div className="row mt-5">
                    {content.about.boardOfDirectors.directors && (
                        content.about.boardOfDirectors.directors.map((item, i) => {
                            return(
                                <div className="col-sm-6 col-md-6 col-lg-4" key={item.directorThumb.id}>
                                    <div className="mb-4 text-center director-col" onClick={showbenefitpopup(item)}>
                                        <img src={item.directorThumb.sourceUrl} alt={item.directorThumb.altText} />
                                        <div className="director-profile" dangerouslySetInnerHTML={{__html: item.directorOverlay}} />
                                        <p className="directorName">{item.directorName}</p>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>

                {/* Start News & Media Area */}
                <section className="my-5">
                    {/* <div className="container"> */}
                        <div className="d-flex flex-wrap">
                            <div className="card box-shadow bg-white rounded text-center col-xs-12 col-md mb-3 mb-lg-0 p-0 mr-md-3 mr-lg-5">
                                <div className="wygthumb news_media">
                                    <img src={VisionUnsplash} className="card-img-top" alt="absolutvision unsplash" />
                                </div>
                                <div className="pb-0 px-4 d-flex card-body">
                                    <h3 className="mb-30">News / Media</h3>
                                    <p>See the latest corporate news about EnerBank USA and related topics</p>
                                </div>
                                <Link to={'/'} className="pb-4 px-4 font-weight-bold mt-auto">Right Here</Link>
                            </div>
                            <div className="card box-shadow bg-white rounded text-center col-xs-12 col-md mb-3 mb-lg-0 p-0 ml-md-3 ml-lg-5">
                                <div className="wygthumb blog">
                                    <img src={BakerUnsplash} className="card-img-top" alt="kaitlyn baker unsplash" />
                                </div>
                                <div className="pb-0 px-4 card-body">
                                    <h3 className="mb-30">EnerBank Blog</h3>
                                    <p>Get best practices, tips, and other useful information and perspectives on home improvement and payment options from the</p>
                                </div>
                                <Link to={'/blog'} className="pb-4 px-4 font-weight-bold mt-auto">EnerBank USA blog</Link>
                            </div>
                        </div>
                    {/* </div> */}
                </section>
                {/* End News & Media Area */}

                <div className="pt-4 text-center">
                    <p>Want to Learn More?</p>
                    <Link to={'/contact-us'} className="btn bg-blue d-inline-block text-white mx-auto px-5">Contact Us</Link>
                </div>                
            </div>
            {visible && (
                <DirectorOne visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />
            )}            
    </Layout>
  
)}

export default About

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
                video_section {
                  video {
                    videoUrl
                  }
                }
                about {
                  fieldGroupName
                  memberFdic {
                    fdicDescription
                    fieldGroupName
                    fdicLogo {
                      sourceUrl
                    }
                  }
                  enerbankLeadership {
                    fieldGroupName
                    leadershipHeading
                    leadershipBanner {
                      sourceUrl
                    }
                  }
                  cmsEnergy
                  communityInvolvement {
                    ciBrif
                    ciHeading
                    ciLogos {
                      logo {
                        sourceUrl
                      }
                    }
                  }
                  boardOfDirectors {
                    boardBrif
                    fieldGroupName
                    directors {
                      directorDescription
                      directorName
                      directorOverlay
                      directorPosition
                      fieldGroupName
                      directorThumb {
                        sourceUrl
                        altText
                      }
                    }
                  }
                }
            }
        }
    }
`