import React, { useState, useRef, useEffect } from "react";
import { graphql, Link, withPrefix } from "gatsby";
import ImageMap from "image-map";
import Helmet from "react-helmet"
import "react-tabbordion/demo/accordion.css";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video";

// import popup
import DirectorOne from '../components/directorPopups/directorPopup1'

// import images
import VisionUnsplash from '../images/absolutvision-unsplash.jpg';
import BakerUnsplash from '../images/kaitlyn-baker-unsplash.jpg';
import leadershipBanner from '../images/leadership-banner.jpg'

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
    
    console.log(ImageMap)
    
    // useEffect(() => {
    //     const usemap = $('img[useMap]')
    //     console.log(usemap)
    //     const script = document.createElement('script');
    //     script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
    //     document.body.appendChild(script);

    //     script.onload = () => {
    //         usemap.rwdImageMaps();
    //     };
    // })
    // const status = useScript(
    //     'http://mattstow.com/experiment/responsive-image-maps/jquery.rwdImageMaps.min.js'
    // );
    
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
            <section className="container-fluid" id="leadership">
                <div className="row flex-column">
                    <div className="position-absolute w-100 pb-5 leadership-heading px-3" dangerouslySetInnerHTML={{__html: content.about.enerbankLeadership.leadershipHeading}} />
                    <img src={content.about.enerbankLeadership.leadershipBanner.sourceUrl} alt="Leader Banner" useMap="#image-map" />
                    <map name="image-map" id="image-map">
                        <area shape="poly" coords="190,806,196,678,202,655,203,626,201,606,195,530,184,465,177,418,174,358,177,318,190,288,199,253,240,236,260,229,272,213,285,203,280,187,272,177,274,165,279,160,282,143,287,129,298,119,311,116,324,114,333,122,343,127,351,139,351,163,352,173,352,186,348,195,340,210,339,222,349,234,354,240,366,249,381,253,398,263,405,274,414,309,417,351,421,374,427,386,427,397,422,424,418,465,417,515,407,533,406,547,393,567,373,569,359,567,347,579,350,604,346,681,338,736,333,772,327,806" href="#" alt={''} />
                        <area shape="poly" coords="458,800,456,735,456,693,454,652,450,596,447,561,427,518,432,366,441,334,451,299,459,278,465,263,480,263,498,257,504,250,477,235,454,228,438,215,448,182,456,171,453,157,449,137,439,123,420,118,400,121,382,137,373,154,372,184,379,196,381,212,374,220,357,234,399,264,417,288,423,337,420,535,410,554,394,574,365,582,339,802" href="#" alt={''} />
                        <area shape="poly" coords="514,253,530,239,532,225,527,211,522,207,517,196,519,189,519,173,521,152,529,140,536,127,560,123,578,126,592,137,598,151,599,168,600,182,602,196,595,209,594,228,602,243,614,257,642,276,659,282,669,291,672,311,674,334,686,368,683,401,679,427,683,456,661,519,647,552,644,591,643,628,640,694,636,731,642,797,633,804,579,801,546,620,535,649,529,694,514,732,517,777,510,802,461,796,445,549,432,522,431,466,435,367,459,290,466,268,514,255" href="#" alt={''} />
                        <area shape="poly" coords="619,180,628,171,620,149,612,119,616,94,623,78,644,69,660,66,671,75,678,84,684,99,685,114,691,123,687,141,686,161,696,174,713,181,696,207,698,227,702,243,700,259,701,277,675,288,647,276,625,263,610,246,599,233,598,210,606,188,621,182" href="#" alt={''} />
                        <area shape="poly" coords="715,168,738,154,755,153,775,159,790,171,798,199,799,226,792,244,797,266,802,277,824,281,837,284,849,327,855,362,855,397,852,442,843,471,851,521,850,558,840,683,839,801,777,803,764,619,761,627,761,708,769,801,694,802,677,588,661,571,663,537,683,345,669,294,704,279,701,211" href="#" alt={''} />
                        <area shape="poly" coords="808,239,821,232,839,225,853,218,873,216,884,207,885,192,876,172,874,163,872,153,875,133,879,115,899,101,916,101,933,108,945,124,953,140,946,164,940,181,937,196,952,214,962,216,969,233,976,249,977,262,971,274,953,280,932,286,920,294,912,307,905,334,897,362,896,382,889,407,893,435,904,466,920,490,925,505,926,545,926,574,936,632,940,684,941,736,942,804,911,805,915,768,912,728,910,693,911,667,903,629,903,645,898,664,901,686,902,719,899,747,898,776,895,797,899,803,841,800,854,533,849,468,854,448,857,360,854,331,838,286,807,270,801,256,811,241,809,242" href="#" alt={''} />
                        <area shape="poly" coords="960,198,963,181,968,170,975,159,986,151,1009,151,1026,157,1041,167,1047,184,1047,204,1049,217,1043,227,1040,246,1066,267,1105,282,1125,295,1127,323,1132,355,1134,397,1130,425,1118,457,1106,467,1117,565,1112,571,1117,725,1117,802,1040,804,1033,789,1023,728,1021,785,1020,805,944,803,929,588,928,509,907,468,893,421,899,366,921,299,945,287,966,280,976,270,981,255,961,200" href="#" alt={''} />
                    </map>
                </div>
            </section>

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
            <div className="container py-5 my-0 my-md-5 communityinvolvement" id="communityinvolvement">
                <h3 className="h2 text-center mb-3">{content.about.communityInvolvement.ciHeading}</h3>
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
                    <div className="col-12 col-md-10 m-auto" dangerouslySetInnerHTML={{__html: content.about.boardOfDirectors.boardBrif}} />
                </div>
                
                <div className="row mt-5">
                    {content.about.boardOfDirectors.directors && (
                        content.about.boardOfDirectors.directors.map((item, i) => {
                            return(
                                <div className="col-sm-6 col-md-6 col-lg-4" key={item.directorThumb.id}>
                                    <div className="mb-4 text-center director-col" onClick={showbenefitpopup(item)}>
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

// Hook
const useScript = (src) => {
    // Keep track of script status ("idle", "loading", "ready", "error")
    const [status, setStatus] = useState(src ? "loading" : "idle");
  
    useEffect(
      () => {
        // Allow falsy src value if waiting on other data needed for
        // constructing the script URL passed to this hook.
        if (!src) {
          setStatus("idle");
          return;
        }
  
        // Fetch existing script element by src
        // It may have been added by another intance of this hook
        let script = document.querySelector(`script[src="${src}"]`);
  
        if (!script) {
          // Create script
          script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.setAttribute("data-status", "loading");
          // Add script to document body
          document.body.appendChild(script);
  
          // Store status in attribute on script
          // This can be read by other instances of this hook
          const setAttributeFromEvent = (event) => {
            script.setAttribute(
              "data-status",
              event.type === "load" ? "ready" : "error"
            );
          };
  
          script.addEventListener("load", setAttributeFromEvent);
          script.addEventListener("error", setAttributeFromEvent);
        } else {
          // Grab existing script status from attribute and set to state.
          setStatus(script.getAttribute("data-status"));
        }
  
        // Script event handler to update status in state
        // Note: Even if the script already exists we still need to add
        // event handlers to update the state for *this* hook instance.
        const setStateFromEvent = (event) => {
          setStatus(event.type === "load" ? "ready" : "error");
        };
  
        // Add event listeners
        script.addEventListener("load", setStateFromEvent);
        script.addEventListener("error", setStateFromEvent);
  
        // Remove event listeners on cleanup
        return () => {
          if (script) {
            script.removeEventListener("load", setStateFromEvent);
            script.removeEventListener("error", setStateFromEvent);
          }
        };
      },
      [src] // Only re-run effect if script src changes
    );
  
    return status;
  }

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
                }
            }
        }
    }
`