import React, { useState, useRef } from "react";
import { graphql, Link } from "gatsby";
import "react-tabbordion/demo/accordion.css";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video";

// import popup
import DirectorOne from '../components/directorPopups/directorPopup1'

// import images
import fdic_logo from '../images/fdic-logo.svg';
import VisionUnsplash from '../images/absolutvision-unsplash.jpg';
import BakerUnsplash from '../images/kaitlyn-baker-unsplash.jpg';
import JAofUtah from '../images/JA-of-Utah.png';
import UWSL from '../images/UWSL.png';
import VITA from '../images/VITA.png';
import PHP from '../images/PHP.png';
import SUAZO from '../images/suazo.jpg';
import OppoScholars from '../images/opportunity_scholars.jpg';
import NeightborWorks from '../images/neightborworks.jpg';
import GuadalupeSchool from '../images/guadalupe_school.jpg';

import SinglesInside054 from '../images/enerbank_db/singles_inside_054.jpg';
import SinglesInside037 from '../images/enerbank_db/singles_inside_037.jpg';
import SinglesInside006 from '../images/enerbank_db/singles_inside_006.jpg';
import SinglesInside018 from '../images/enerbank_db/singles_inside_018.jpg';
import SinglesInside046 from '../images/enerbank_db/singles_inside_046.jpg';
import SinglesInside029 from '../images/enerbank_db/singles_inside_029.jpg';
import SinglesInside012 from '../images/enerbank_db/singles_inside_012.jpg';
import SinglesInside066 from '../images/enerbank_db/singles_inside_066.jpg';
import SinglesInside016 from '../images/enerbank_db/singles_inside_016.jpg';
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
    
  return (  
    <Layout>
        <SEO title={content.title} description={content.excerpt} />
            {/* start banner Area */}
            <section className="container my-5 pt-4">
                <div className="row d-flex align-items-end">
                    <div className="col-md-11 m-auto" dangerouslySetInnerHTML={{__html: content.content}} />
                </div>
            </section>
            {/* End banner Area */}
            <section className="video-section mb-5">
                <div className="container">
                <div className="row d-flex align-items-end">
                    <div className="col-md-10 m-auto" ref={handstick}>  {/*  onClick={this.handleClick} */}
                        <Video videoSrcURL="https://player.vimeo.com/video/469839164" videoTitle="CEO Intro For About Us Page" videoWidth="100%" videoHeight="500" />
                    </div>
                </div>
                </div>
            </section>
            {/* enerbank leadership */}
            <section className="container-fluid">
                <div className="row flex-column">
                    <div className="position-absolute w-100 pb-5 leadership-heading">
                        <h3 className="h2 text-center mb-2">EnerBank Leadership</h3>
                        <p className="text-center">Our leadership team is made up of experienced and innovative people.</p>
                    </div>
                    <img src={leadershipBanner} alt="Leader Banner" className="w-100" />
                </div>
            </section>

            <section className="bg-blue" id="memberfdic">
                <div className="container py-5 text-white">
                    <div className="col-12 col-md-11 mx-auto">
                        <h3 className="h2 text-white text-center mb-3">Member FDIC Bank</h3>
                        <div className="d-flex flex-column">
                            <p>Why should home improvement professionals work with a regulated FDIC-insured bank, like EnerBank?</p>
                            <ul style={{listStyle: 'decimal'}} className="ml-5">
                                <li className="mb-3"><strong>Funding isn’t an issue — </strong>Contractors get paid early in the process, with no long-term issues, because
                                you’re working with the actual lender. As a balance sheet lender, we have direct access to the capital
                                required for funding your requests. This means your cash flow is never interrupted – you’ll always get
                                paid whether the economy is up or down.</li>
                                <li className="mb-3"><strong>Confidence — </strong>Being a regulated bank means the FDIC ensures EnerBank is subject to federal
                                financial regulations. That’s real oversight — you can be confident we’ll do what we say, because we’re
                                government-regulated.</li>
                                <li className="mb-3"><strong>Trust — </strong>When you work with a regulated bank, you know exactly who to talk to if something goes wrong.
                                EnerBank provides you a dedicated relationship manager, so if any issues ever arise, they can mediate
                                the situation and make sure it all works out.</li>
                            </ul>
                            <p>As a regulated Member FDIC bank, we can offer loans with no hidden fees, and a variety of loan products to meet your customers’ needs.</p>
                        </div>
                        <hr className="border-white" />
                        <img className="d-block mt-5 mx-auto" alt="Fdic logo" src={fdic_logo} data-holder-rendered="true" />
                    </div>
                </div>
            </section>
            {/* Community Involvement */}
            <div className="container py-5 my-5 communityinvolvement" id="communityinvolvement">
                <h3 className="h2 text-center mb-3">Community Involvement</h3>
                <p>EnerBank USA is not just an office building full of workers, we’re a meaningful part of the community in more ways than one. Our leaders and team members dedicate their time to enrich the lives of people in our community through volunteer hours spent in a variety of good causes, such as:</p>
                <div className="row my-5">
                    <div className="gridgallery col-lg-12">
                        <div className="horizontal"><img alt="PHP" className="d-block mx-auto community-logo" src={PHP} data-holder-rendered="true" /></div>
                        <div className="vertical"><img alt="Junior Achievement of Utah" className="d-block mx-auto community-logo" src={JAofUtah} data-holder-rendered="true" /></div>
                        <div className="vertical"><img alt="United Way of Salt Lake" className="d-block mx-auto community-logo" src={UWSL} data-holder-rendered="true" /></div>
                        <div className="vertical"><img alt="PHP" className="d-block mx-auto community-logo" src={SUAZO} data-holder-rendered="true" /></div>
                        <div className="vertical"><img alt="PHP" className="d-block mx-auto community-logo" src={NeightborWorks} data-holder-rendered="true" /></div>
                        <div className="vertical"><img alt="PHP" className="d-block mx-auto community-logo" src={GuadalupeSchool} data-holder-rendered="true" /></div>
                        <div className="vertical"><img alt="VITA/TCE Central" className="d-block mx-auto community-logo" src={VITA} data-holder-rendered="true" /></div>
                        <div className="vertical"><img alt="PHP" className="d-block mx-auto community-logo" src={OppoScholars} data-holder-rendered="true" /></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-10 m-auto">
                        <h3 className="h2 text-center mb-3" id="leadership">CMS Energy</h3>
                        <p>EnerBank is a wholly-owned subsidiary of CMS Energy Corporation (NYSE: CMS). CMS Energy is committed to
                            clean energy through its Consumers Energy and CMS Enterprises subsidiaries, which together are the largest
                            source of electric and gas services in Michigan. The company owns and operates wind and solar projects
                            nationwide, and strives each day to fulfill its purpose of World Class Performance Delivering Hometown Service,
                            and measures its success through a triple bottom line focused on People, Planet and Profit.
                        </p>
                        <h3 className="h2 text-center mb-3 mt-5" id="boardofdirectors">EnerBank Board of Directors</h3>
                        <p>We benefit greatly from the combined experience of our Board of Directors as we continue to become the most sought-after home improvement lender in the nation.</p>
                    </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col-sm-2 col-md-4 col-lg-4">
                        <div className="mb-4 text-center director-col">
                            <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Rejji P. Hayes" src={SinglesInside054} data-holder-rendered="true" />
                            <div className="director-profile">
                                <div>
                                    <p>Charles E. Knadler serves as EnerBank USA® President and CEO, responsible for the overall </p>
                                    <button onClick={showbenefitpopup({title:'Rejji P. Hayes', image:SinglesInside054})} className="text-white font-weight-bold btn-link">Read more ...</button>
                                </div>
                            </div>
                            <p className="directorName">Rejji P. Hayes</p>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-4 col-lg-4">
                        <div className="mb-4 text-center director-col">
                            <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Charles E. Knadler" src={SinglesInside066} data-holder-rendered="true" />
                            <div className="director-profile">
                                <div>
                                    <p>Charles E. Knadler serves as EnerBank USA® President and CEO, responsible for the overall </p>
                                    <button onClick={showbenefitpopup({title:'Charles E. Knadler', image:SinglesInside066})} className="text-white font-weight-bold btn-link">Read more ...</button>
                                </div>
                            </div>
                            <p className="directorName">Charles E. Knadler</p>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-4 col-lg-4">
                        <div className="mb-4 text-center director-col">
                            <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Louise P. Kelly" src={SinglesInside037} data-holder-rendered="true" />
                            <div className="director-profile">
                                <div>
                                    <p>Charles E. Knadler serves as EnerBank USA® President and CEO, responsible for the overall </p>
                                    <button onClick={showbenefitpopup({title:'Louise P. Kelly', image:SinglesInside037})} className="text-white font-weight-bold btn-link">Read more ...</button>
                                </div>
                            </div>
                            <p className="directorName">Louise P. Kelly</p>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-4 col-lg-4">
                        <div className="mb-4 text-center director-col">
                            <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Dan Lis" src={SinglesInside012} data-holder-rendered="true" />
                            <div className="director-profile">
                                <div>
                                    <p>Charles E. Knadler serves as EnerBank USA® President and CEO, responsible for the overall </p>
                                    <button onClick={showbenefitpopup({title:'Dan Lis', image:SinglesInside012})} className="text-white font-weight-bold btn-link">Read more ...</button>
                                </div>
                            </div>
                            <p className="directorName">Dan Lis</p>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-4 col-lg-4">
                        <div className="mb-4 text-center director-col">
                            <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Patrick M. McQueen" src={SinglesInside016} data-holder-rendered="true" />
                            <div className="director-profile">
                                <div>
                                    <p>Charles E. Knadler serves as EnerBank USA® President and CEO, responsible for the overall </p>
                                    <button onClick={showbenefitpopup({title:'Srikant (Sri) Maddipati', image:SinglesInside016})} className="text-white font-weight-bold btn-link">Read more ...</button>
                                </div>
                            </div>
                            <p className="directorName">Srikant (Sri) Maddipati</p>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-4 col-lg-4">
                        <div className="mb-4 text-center director-col">
                            <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Patrick M. McQueen" src={SinglesInside006} data-holder-rendered="true" />
                            <div className="director-profile">
                                <div>
                                    <p>Charles E. Knadler serves as EnerBank USA® President and CEO, responsible for the overall </p>
                                    <button onClick={showbenefitpopup({title:'Patrick M. McQueen', image:SinglesInside006})} className="text-white font-weight-bold btn-link">Read more ...</button>
                                </div>
                            </div>
                            <p className="directorName">Patrick M. McQueen</p>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-4 col-lg-4">
                        <div className="mb-4 text-center director-col">
                            <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Laura Mountcastle" src={SinglesInside046} data-holder-rendered="true" />
                            <div className="director-profile">
                                <div>
                                    <p>Charles E. Knadler serves as EnerBank USA® President and CEO, responsible for the overall </p>
                                    <button onClick={showbenefitpopup({title:'Laura Mountcastle', image:SinglesInside046})} className="text-white font-weight-bold btn-link">Read more ...</button>
                                </div>
                            </div>
                            <p className="directorName">Laura Mountcastle</p>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-4 col-lg-4">
                        <div className="mb-4 text-center director-col">
                            <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Joseph M. Walsh" src={SinglesInside029} data-holder-rendered="true" />
                            <div className="director-profile">
                                <div>
                                    <p>Charles E. Knadler serves as EnerBank USA® President and CEO, responsible for the overall </p>
                                    <button onClick={showbenefitpopup({title:'Joseph M. Walsh', image:SinglesInside029})} className="text-white font-weight-bold btn-link">Read more ...</button>
                                </div>
                            </div>
                            <p className="directorName">Joseph M. Walsh</p>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-4 col-lg-4">
                        <div className="mb-4 text-center director-col">
                            <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Leonard E. Wiatr" src={SinglesInside018} data-holder-rendered="true" />
                            <div className="director-profile">
                                <div>
                                    <p>Charles E. Knadler serves as EnerBank USA® President and CEO, responsible for the overall </p>
                                    <button onClick={showbenefitpopup({title:'Leonard E. Wiatr', image:SinglesInside018})} className="text-white font-weight-bold btn-link">Read more ...</button>
                                </div>
                            </div>
                            <p className="directorName">Leonard E. Wiatr</p>
                        </div>
                    </div>
                </div>

                {/* Start News & Media Area */}
                <section className="my-5">
                    <div className="container">
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
                                <Link to={'/'} className="pb-4 px-4 font-weight-bold mt-auto">EnerBank USA blog</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End News & Media Area */}

                <div className="pt-4">
                    <p className="text-center">Want to Learn More?</p>
                    <button className="btn bg-blue d-block mx-auto px-5">Contact Us</button>
                </div>
                <div style={{display: 'none'}}>
                    <h3 className="h2 text-center mb-3" id="feedback">Feedback Form</h3>
                    <p>EnerBank is dedicated to exceptional customer service. We want to hear from you so that we can address any questions, comments or concerns.</p>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName">First name<span>*</span></label>
                                        <input type="text" className="form-control" id="firstName" required="required" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastName">Last name<span>*</span></label>
                                        <input type="text" className="form-control" id="lastName" required="required" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email<span>*</span></label>
                                    <input type="text" className="form-control" id="email" required="required" />
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label htmlFor="phone">Phone<span>*</span></label>
                                        <input type="text" className="form-control" id="phone" required="required" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="company">Company</label>
                                        <input type="text" className="form-control" id="company" required="required" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <textarea className="form-control" rows="6"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit" id="submit" className="btn btn-primary box-shadow px-4 mt-3" />
                        </div>
                    </form>
                </div>
            </div>
            <DirectorOne visiblity={visible} handleClose={hidebenefitpopup} popData={popData} />
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
                
            }
        }
    }
`