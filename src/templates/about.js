import React, { useState, useRef } from "react";
import { graphql, Link, withPrefix } from "gatsby";
import { Card, Popover } from 'react-bootstrap'
import PopoverStickOnHover from '../components/PopoverStickOnHover'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video";

// import popup
import MemberPopup from '../components/directorPopups/memberPopup'
import DirectorPopup from '../components/directorPopups/directorPopup'

// import images
import VisionUnsplash from '../images/absolutvision-unsplash.jpg';
import BakerUnsplash from '../images/kaitlyn-baker-unsplash.jpg';

const About = ({data}, props) => {
    const content = data.wpgraphql.page;
    const [visible, setVisible] = useState(false);
    const [popType, setPopType] = useState('');
    const [popData, setPopData] = useState('');
    const handstick = useRef(null)

    const showbenefitpopup = (param, type) => event => {
		event.preventDefault();
		setPopData(param);
        setVisible(true);
        setPopType(type);
	}
    
    const hidebenefitpopup = () => {
        setVisible(false); 
    }

    const svgCodes = [
        {id:"charles-knadler", data: "M793.093,354.478l15.172-9.655,8.276-16.552-8.276-24.827-15.172-27.586V244.135s-8.276-24.827,0-28.965,23.448-26.207,23.448-26.207H859.3l24.827,6.9L899.3,220.687v23.448l8.276,23.448s-8.276,16.551-8.276,20.689V320l8.276,24.827L939.3,373.788l46.9,19.31H729.645l13.793-19.31Z"},
        {id:"blain-bagley", data: "M631.716,212.411,653.784,186.2h26.207l20.689,6.9,17.931,19.31,5.517,42.758-5.517,20.689-8.276,16.551L700.68,306.2l78.62,42.758-12.414,16.551-33.1,9.655s-48.275-1.379-53.792,0-35.862-19.31-35.862-19.31l-30.344-22.069-9.655-6.9,27.586-34.482V268.962l-17.931-13.793V238.617Z"},
        {id:"joel-cannon", data: "M915.85,271.72l20.689-20.689L925.5,226.2,915.85,194.48V144.826l20.689-23.448,31.724-6.9,17.931,6.9,11.034,13.793,9.655,16.551v20.689l9.655,12.414v20.689l-9.655,15.172,9.655,23.448,17.931,15.172v84.137l-37.241,23.448-44.137,6.9L925.5,329.651l-20.689-28.965Z"},
        {id:"kristin-dittmer", data:"M1046.882,237.238l28.965-15.172h20.689l19.31,6.9,23.448,15.172,8.276,27.586v51.034l-8.276,26.207,8.276,17.931,38.62,17.931,17.931,17.931,6.9,24.827-30.344,33.1H1019.3L997.228,448.27l-6.9-45.517,17.931-17.931,22.069-6.9,8.276-35.862Z"},
        {id:"neil-fellows", data: "M1154.467,335.168l41.379-20.689,51.034-15.172,6.9-15.172-6.9-19.31-8.276-20.689V186.2l8.276-13.793,19.31-11.034,20.689-5.517,23.448,5.517,19.31,17.931,9.655,22.069v19.31l-9.655,34.482-9.655,28.965,19.31,15.172,12.414,6.9,8.276,28.965,11.034,17.931-19.31,27.586L1295.155,393.1l-99.309-5.517-34.482-23.448Z"},
        {id:"robb-kerry", data: "M1350.326,280.719V251.031l15.172-19.31,23.448-11.034h28.965l27.586,16.551,12.414,19.31v59.31H1445.5l12.414,27.586,11.034,17.931,33.1,13.793,41.379,13.793,12.414,22.069v34.482l-274.479,6.9,16.552-51.034,40-12.414,27.586-13.793,5.517-31.724Z"},
        {id:"rob-palmer", data: "M473.1,326.892,499.3,297.927,507.579,280,492.407,253.79l6.9-42.758L513.1,184.825l28.965-9.655h17.931l24.827,15.172,12.414,20.689V280L584.82,297.927l-6.9,12.414,6.9,16.552,19.31,17.931-26.206,26.207-17.931,12.414-52.413-12.414Z"}
    ]
    
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
                        <div className="col-md-12 m-auto embed-container" ref={handstick}>  {/*  onClick={this.handleClick} */}
                            <Video videoSrcURL={content.video_section.video.videoUrl} videoTitle="CEO Intro For About Us Page" videoWidth="100%" videoHeight="500" />
                        </div>
                    </div>
                    </div>
                </section>
            )}
            {/* enerbank leadership */}
            
            <div id="leadership" className="position-relative d-none d-lg-block pt-2 pb-4">
                <div className="position-absolute w-100 pb-5 leadership-heading px-3" style={{top:0}} dangerouslySetInnerHTML={{__html: content.about.enerbankLeadership.leadershipHeading}} />
                <img src={content.about.enerbankLeadership.leadershipBanner.sourceUrl} alt="Leader Banner" className="w-100 d-block" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1604.606 1005.106" className="position-absolute" style={{top:0, zIndex:99}}>
                    <g id="Group_1" data-name="Group 1" transform="translate(-156.5 -38.894)">
                        {content.about.boardOfDirectors.directors && (
                            content.about.boardOfDirectors.directors.map((item, i) => {
                                return(
                                    <PopoverStickOnHover component={
                                        <Card className="py-2 px-3" style={{background: 'rgba(255, 255, 255, 0.85)'}}>
                                            <h3 className="text-blue pb-1 mb-1" style={{borderBottom: '2px solid #0077C8', cursor: 'pointer'}} onClick={showbenefitpopup(item, 'director')} >{item.directorName}</h3>
                                            <p className="text-sm mb-0">{item.directorPosition}</p>
                                        </Card>
                                    } placement={'bottom'} key={item.fieldGroupName + i}>
                                        <path key={item.fieldGroupName + i} id={svgCodes[i].id} data-name={'Path ' + i} d={svgCodes[i].data} fill="transparent" stroke="#707070" strokeWidth="0"/>
                                    </PopoverStickOnHover>
                                )})
                            )
                        }
                        <path id="Path_8" data-name="Path 8" d="M157,1042.072V39.394H1760.606V1042.072Z" fill="none" stroke="#707070" strokeWidth="0"/>
                    </g>
                </svg>
            </div>
            <div className="container d-lg-none" id="leadership">
                <div className="row mt-5">
                <div className="w-100 pb-3 leadership-heading px-3" dangerouslySetInnerHTML={{__html: content.about.enerbankLeadership.leadershipHeading}} />
                    {content.about.boardOfDirectors.directors && (
                        content.about.boardOfDirectors.directors.map((item, i) => {
                            return(
                                <div className="col-sm-6 col-md-6 col-lg-4" key={item.directorThumb.id}>
                                    <div className="mb-4 text-center director-col" onClick={showbenefitpopup(item, 'director')}>
                                        <div className="position-relative mb-3">
                                            <img src={item.directorThumb.sourceUrl} alt={item.directorThumb.altText} />
                                            <div className="director-profile" dangerouslySetInnerHTML={{__html: item.directorOverlay}} />
                                        </div>
                                        <p className="directorName">{item.directorName}</p>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>

            {/* {status === "ready" && (
                <div>
                Script function call response: <b>{TEST_SCRIPT.start()}</b>
                </div>
            )} */}

            {/* <section className="bg-blue" id="memberfdic">
                <div className="container py-5 text-white">
                    <div className="col-12 col-md-11 mx-auto">
                        <div className="d-flex flex-column" dangerouslySetInnerHTML={{__html: content.about.memberFdic.fdicDescription}} />
                        <hr className="border-white" />
                        <img className="d-block mt-5 mx-auto" alt="Fdic logo" src={content.about.memberFdic.fdicLogo.sourceUrl} data-holder-rendered="true" />
                    </div>
                </div>
            </section> */}
            {/* Community Involvement */}
            <div className="container pb-5 my-0 my-md-3 my-lg-5 communityinvolvement" id="communityinvolvement">
                <h3 className="h2 text-center mb-4">{content.about.communityInvolvement.ciHeading}</h3>
                <p>{content.about.communityInvolvement.ciBrif}</p>
                <div className="row my-5">
                    <div className="gridgallery col-lg-12">
                        {content.about.communityInvolvement.ciLogos.map((item, i) => {
                            if(i === 0){
                                return(
                                    <div className="horizontal" key={item.logo.id}>
                                        <a href={item.links} target="_blank">
                                            <img alt="PHP" className="d-block mx-auto community-logo" src={item.logo.sourceUrl} data-holder-rendered="true" />
                                        </a>
                                    </div>
                                )
                            }else{
                                return(
                                    <div className="verticle" key={item.logo.id}>
                                        <a href={item.links} target="_blank">
                                            <img alt="PHP" className="d-block mx-auto community-logo" src={item.logo.sourceUrl} data-holder-rendered="true" />
                                        </a>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-10 m-auto" dangerouslySetInnerHTML={{__html: content.about.cmsEnergy}} />
                    <div id="boardofdirectors" className="col-12 col-md-10 m-auto" dangerouslySetInnerHTML={{__html: content.about.teamMembers.boardBrif}} />
                </div>
                
                <div className="row mt-5">
                    {content.about.teamMembers.members && (
                        content.about.teamMembers.members.map((item, i) => {
                            return(
                                <div className="col-sm-6 col-md-6 col-lg-4" key={item.memberThumb.id}>
                                    <div className="mb-4 text-center director-col" onClick={showbenefitpopup(item, 'member')}>
                                        <div className="position-relative mb-3">
                                            <img src={item.memberThumb.sourceUrl} alt={item.memberThumb.altText} />
                                            <div className="director-profile" dangerouslySetInnerHTML={{__html: item.memberOverlay}} />
                                        </div>
                                        <p className="directorName">{item.memberName}</p>
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
                                <a href="http://news.enerbank.com/" rel="noopener noreferrer" target="_blank" className="pb-4 px-4 font-weight-bold mt-auto">Right Here</a>
                            </div>
                            <div className="card box-shadow bg-white rounded text-center col-xs-12 col-md mb-3 mb-lg-0 p-0 ml-md-3 ml-lg-5">
                                <div className="wygthumb blog">
                                    <img src={BakerUnsplash} className="card-img-top" alt="kaitlyn baker unsplash" />
                                </div>
                                <div className="pb-0 px-4 card-body">
                                    <h3 className="mb-30">EnerBank Blog</h3>
                                    <p>Get best practices, tips, and other useful information and perspectives on home improvement and payment options from the</p>
                                </div>
                                <Link to={'/blog'} className="pb-4 px-4 font-weight-bold mt-auto">EnerBank USA Blog</Link>
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
            {(visible && popType === 'member') && (
                <MemberPopup visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />
            )}
            {(visible && popType === 'director') && (
                <DirectorPopup visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />
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
                        fieldGroupName
                        links
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
                    teamMembers {
                      boardBrif
                      fieldGroupName
                      members {
                        directorPosition
                        fieldGroupName
                        memberDescription
                        memberName
                        memberOverlay
                        memberThumb {
                          sourceUrl
                        }
                      }
                    }
                }
            }
        }
    }
`