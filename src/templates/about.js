import React, { useState } from "react";

// import { Link } from "gatsby";
import { graphql } from "gatsby";

// import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion';
import "react-tabbordion/demo/accordion.css";

// import { Collapse } from 'reactstrap';
// , Button, CardBody, Card
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Video from "../components/video";

// accordian
// const blockElements = {
//     animator: 'accordion-animator',
//     content: 'accordion-content',
//     panel: 'accordion-panel',
//     label: 'accordion-title',
// }

// import images
import fdic_logo from '../images/fdic-logo.svg';
import CareersVideo from '../images/careers_video.png';
import VisionUnsplash from '../images/absolutvision-unsplash.jpg';
import BakerUnsplash from '../images/kaitlyn-baker-unsplash.jpg';
import JAofUtah from '../images/JA-of-Utah.png';
import UWSL from '../images/UWSL.png';
import VITA from '../images/VITA.png';
import PHP from '../images/PHP.png';
import SinglesInside054 from '../images/enerbank_db/singles_inside_054.jpg';
import SinglesInside037 from '../images/enerbank_db/singles_inside_037.jpg';
import SinglesInside006 from '../images/enerbank_db/singles_inside_006.jpg';
import SinglesInside018 from '../images/enerbank_db/singles_inside_018.jpg';
import SinglesInside046 from '../images/enerbank_db/singles_inside_046.jpg';
import SinglesInside029 from '../images/enerbank_db/singles_inside_029.jpg';
import SinglesInside012 from '../images/enerbank_db/singles_inside_012.jpg';
import SinglesInside066 from '../images/enerbank_db/singles_inside_066.jpg';
import tmtopimg from '../images/top_arrow.svg';

const About = ({data}) => {
    // const [collapse, setCollapse] = useState(false);
    // const toggle = (e) => {
    //     e.preventDefault();
    //     setCollapse(!collapse)
    // }

    // const [value, setValue] = useState("");
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

  return (  
    <Layout>
        {/* <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/> */}
            {/* start banner Area */}
            <section className="video-section">
                <div className="container">
                    <div className="row d-flex align-items-end">
                    <div className="col-md-10 m-auto">
                        <img src={CareersVideo} alt="careers video" />
                        <p className="text-center font-weight-bold mt-2 mb-4">A message from our President and CEO Charles E. Knadler</p>
                    </div>
                    </div>
                </div>
            </section>
            {/* End banner Area */}

            {/* Start News & Media Area */}
            <section>
                <div className="container">
                    <div className="d-flex flex-wrap">
                        <div className="box-shadow bg-white rounded text-center payment-option-box col-xs-12 col-md mb-3 mb-lg-0 p-0 mr-md-3 mr-lg-5">
                            <div className="wygthumb news_media">
                                <img src={VisionUnsplash} className="card-img-top" alt="absolutvision unsplash" />
                            </div>
                            <div className="p-4">
                                <h3 className="mb-10">News / Media</h3>
                                <p>See the latest corporate news about EnerBank USA and related topics  <a href="#">Right Here</a></p>
                            </div>
                        </div>
                        <div className="box-shadow bg-white rounded text-center payment-option-box col-xs-12 col-md mb-3 mb-lg-0 p-0 ml-md-3 ml-lg-5">
                            <div className="wygthumb blog">
                                <img src={BakerUnsplash} className="card-img-top" alt="kaitlyn baker unsplash" />
                            </div>
                            <div className="p-4">
                                <h3 className="mb-10">EnerBank Blog</h3>
                                <p>Get best practices, tips, and other useful information and perspectives on home improvement and payment options from the <a href="#" data-toggle="modal" data-target="#">EnerBank USA blog</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End News & Media Area */}
            {/* Company Overview */}
            <div className="bg-blue mt-5" id="companyoverview">
                <div className="container py-5 text-white">
                    <div className="container py-5 text-white">
                    <h2 className="h2 text-white text-center mb-5">Company Overview</h2>
                    <p>FDIC insured EnerBank USA® is a highly specialized, national consumer lender that helps strategic business partners and independent home improvement contractors increase sales. Strategic business partners include manufacturers, distributors, franchisors, member or trade associations, and major retailers of home improvement, remodeling, and energy-saving products and services. They all rely on the bank to be here today and tomorrow to fund customer loans and help them achieve their business goals and objectives. We are America's home improvement lender of choice. We are reliable, professional, and we produce results.</p>
                    </div>
                </div>
            </div>
            {/* End Company Overview */}
            {/* EnerBank Timeline */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">EnerBank Timeline of Events</h2>
                    <div id="enerbank-timeline">
                        <div className="timeline-start"><img src={tmtopimg} /></div>
                        <div className="enerbank-center-line"></div>
                        <div className="enerbank-timeline-content">
                        {/* Article */}
                        <div className="timeline-article">
                            <div className="content-left-container">
                                <div className="content-left">
                                    <p>Under national bank charter, EnerBank USA begins offering payment options in all 50 states.</p>
                                </div>          
                            </div>        
                            <div className="meta-date">
                                <span className="date">2002</span>
                            </div>
                        </div>
                        {/* // Article */}
                        {/* Article */}
                        <div className="timeline-article">        
                            <div className="content-right-container">
                                <div className="content-right">
                                <p>Over 1,000 contractors served</p>
                                </div>          
                            </div>
                            <div className="meta-date">
                                <span className="date">2004</span>                    
                            </div>
                        </div>
                        {/* // Article */}
                        {/* Article */}
                        <div className="timeline-article">
                            <div className="content-left-container">
                            <div className="content-left">
                                <p>$1 billion in cumulative loan <br />origination's reached</p>
                            </div>                    
                            </div>                  
                            <div className="meta-date">
                            <span className="date">2010</span>                    
                            </div>
                        </div>
                        {/* // Article */}
                        {/* Article */}
                        <div className="timeline-article">        
                            <div className="content-right-container">
                            <div className="content-right">
                                <p>Over 5,000 contractors served </p>
                            </div>                
                            </div>
                            <div className="meta-date">
                            <span className="date">2012</span>                
                            </div>
                        </div>
                        {/* // Article */}
                        {/* Article */}
                        <div className="timeline-article">
                            <div className="content-left-container">
                            <div className="content-left">
                                <p>EnerBank launches Mobile Loan App  <br />and Online Loan Application $5 billion in cumulative loan origination's reached</p>
                            </div>          
                            </div>        
                            <div className="meta-date">
                            <span className="date">2016</span>          
                            </div>
                        </div>
                        {/* // Article */}
                        {/* Article */}
                        <div className="timeline-article">        
                            <div className="content-right-container">
                            <div className="content-right">
                                <p>Over 10,000 contractors served </p>
                            </div>          
                            </div>
                            <div className="meta-date">
                            <span className="date">2019</span>            
                            </div>
                        </div>
                        {/* // Article */}
                        {/* Article */}
                        <div className="timeline-article">
                            <div className="content-left-container">
                            <div className="content-left">
                                <p>EnerBank introduces Multiple <br />contractor funding disbursements</p>
                            </div>          
                            </div>        
                            <div className="meta-date"><span className="date">2020</span></div>
                        </div>
                        {/* // Article */}
                        </div>
                        <div className="timeline-end"><img src="http://devgb.enerbank.com/wp-content/uploads/2020/06/bottom_arrow.svg" alt="navigating timeline bottom arrow" /></div>
                    </div>
                    {/* // Vertical Timeline */}
                </div>
                {/* leadership */}
                {/* <h2 className="text-center">EnerBank Leadership</h2>
                <p className="text-center py-2">Our leadership team is made up of experienced and innovative people.</p>

                <div className="leadership p-5">
                    <div className="card flex-md-row mb-4 border-0 h-md-250">
                        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: '200px', height: '250px'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17328ff274c%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17328ff274c%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                        <div className="card-body d-flex flex-column align-items-start py-0">
                        <h3 className="text-dark">Blaine Bagley</h3>
                        <i className="d-inline-block mb-2 text-primary">Senior Vice President, Operations</i>
                        <p className="card-text mb-auto">Blaine Bagley is Senior Vice President, Operations of EnerBank USA®, where he manages a team of operations professionals, including client services, collections, contractor support, customer relations, lending and office management. Previously, he was Vice President and Manager of Loan Operations where his responsibilities included the lending and collections departments. Blaine has over 20 years' of banking/collections experience. He joined EnerBank in 2005 after ten years as the Group Vice President and Director of Collections for American Investment Bank, NA, a nationally chartered bank, where he oversaw the operations of the auto and recreational loan portfolios.<br/>
                            Blaine is also active in his local community regularly serving in the youth homeless transition center sponsored by The Volunteers of America. He often attends and supports People Helping People events, Arts, Inc., Children's Services Society and the Utah Non-Profit Association. He is an active member of the Salt Lake Tennis and Swimming Club currently working to improve his tennis game and is a life-long pianist who enjoys playing movie themes and classical arrangements.<br/>
                            Blaine completed his general education and studied Political Science at Utah State University (1989) and holds a degree and certified as a paralegal from Salt Lake Community College (1991). Additionally, he has extensive training through the American Management Association.</p>
                        </div>
                    </div>
                </div> */}
                
                <div className="bg-blue" id="memberfdic">
                    <div className="container py-5 text-white">
                    <h2 className="h2 text-white text-center mb-5">Member FDIC Bank</h2>
                    <div className="d-flex flex-md-row mb-4 h-md-250 align-items-start">
                        <img className="card-img-right flex-auto d-none d-md-block pr-5 py-3 border-right" alt="Fdic logo" src={fdic_logo} data-holder-rendered="true"></img>
                        <div className="d-flex flex-column align-items-start pl-4">
                            <p>EnerBank USA is Member FDIC-insured. That means you deal directly with us, not a go-between finance company or non-bank loan broker. In fact, we’re the largest FDIC-insured bank in the country that specializes in home improvement lending, so you can rest assured that we know our stuff. As an actual FDIC-insured bank, we fund and service all our own loans. We're “well capitalized” by FDIC standards and our financial statements are publicly available on the FDIC website. We've been around since 2002, and we're here to stay.</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Community Involvement */}
                <div className="container py-5" id="communityinvolvement">
                    <h2 className="h2 text-center mb-3">Community Involvement</h2>
                    <p>EnerBank USA is not just an office building full of workers, we’re a meaningful part of the community in more ways than one. Our leaders and team members dedicate their time to enrich the lives of people in our community through volunteer hours spent in a variety of good causes, such as:</p>
                    <div className="row my-5">
                        <div className="col-md-6 mb-5">
                            <img className="community-logo" alt="Junior Achievement of Utah" style={{display: 'block'}} src={JAofUtah} data-holder-rendered="true" />
                        </div>
                        <div className="col-md-6 mb-5">
                            <img className="community-logo" alt="United Way of Salt Lake" style={{display: 'block'}} src={UWSL} data-holder-rendered="true" />
                        </div>
                        <div className="col-md-6 mb-5">
                            <img className="community-logo" alt="VITA/TCE Central" style={{display: 'block'}} src={VITA} data-holder-rendered="true" />
                        </div>
                        <div className="col-md-6 mb-5">
                            <img className="community-logo" alt="PHP" style={{display: 'block'}} src={PHP} data-holder-rendered="true" />
                        </div>
                    </div>

                    <h2 className="h2 text-center mb-3" id="leadership">CMS Profile / Board of Directors</h2>
                    <p>EnerBank USA is a wholly-owned subsidiary of CMS Energy, and we’re proud to be a part of the CMS family. Under the leadership of CMS, we benefit greatly from the combined experience of our Board of Directors as we continue to become the most sought-after home improvement lender in the nation.</p>
                    <h2 className="h2 text-center mb-3" id="boardofdirectors">EnerBank Board of Directors</h2>
                    <p className="text-center">Our Board of Directors . . .</p>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mb-4 text-center">
                                <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Rejji P. Hayes" style={{height: '300px'}} src={SinglesInside054} data-holder-rendered="true" />
                                <p className="directorName">Rejji P. Hayes</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-4 text-center">
                                <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Louise P. Kelly" style={{height: '300px'}} src={SinglesInside037} data-holder-rendered="true" />
                                <p className="directorName">Louise P. Kelly</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-4 text-center">
                                <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Patrick M. McQueen" style={{height: '300px'}} src={SinglesInside006} data-holder-rendered="true" />
                                <p className="directorName">Patrick M. McQueen</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-4 text-center">
                                <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Leonard E. Wiatr" style={{height: '300px'}} src={SinglesInside018} data-holder-rendered="true" />
                                <p className="directorName">Leonard E. Wiatr</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-4 text-center">
                                <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Laura Mountcastle" style={{height: '300px'}} src={SinglesInside046} data-holder-rendered="true" />
                                <p className="directorName">Laura Mountcastle</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-4 text-center">
                                <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Joseph M. Walsh" style={{height: '300px'}} src={SinglesInside029} data-holder-rendered="true" />
                                <p className="directorName">Joseph M. Walsh</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-4 text-center">
                                <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Dan Lis" style={{height: '300px'}} src={SinglesInside012} data-holder-rendered="true" />
                                <p className="directorName">Dan Lis</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-4">
                                <img data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Charles E. Knadler" style={{height: '300px'}} src={SinglesInside066} data-holder-rendered="true" />
                                <p className="directorName">Charles E. Knadler</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="h2 text-center mb-3" id="feedback">Feedback Form</h2>
                    <p>EnerBank is dedicated to exceptional customer service. We want to hear from you so that we can address any questions, comments or concerns.</p>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label for="firstName">First name<span>*</span></label>
                                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="lastName">Last name<span>*</span></label>
                                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email<span>*</span></label>
                                    <input type="text" className="form-control" id="email" placeholder="" value="" required="" />
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label for="phone">Phone<span>*</span></label>
                                        <input type="text" className="form-control" id="phone" placeholder="" value="" required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="company">Company</label>
                                        <input type="text" className="form-control" id="company" placeholder="" value="" required="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="company">Company</label>
                            <textarea className="form-control" rows="6"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit" id="submit" className="btn btn-primary box-shadow px-4 mt-3" />
                        </div>
                    </form>
                </div>
            </section>
            {/* End EnerBank TIMELINE */}
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