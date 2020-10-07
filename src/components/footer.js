import React from 'react'
import Link from 'gatsby-link'

import fdicLogo from '../images/fdic-logo.svg'
import bbbLogo from '../images/darkgray-seal-bbb.png'
// font awesome library icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const externalUrl = (url) => {
		window.open(url, '_blank');
    }
    // const customUrl = (url, e) => {
        // browserHistory.push('/'+url);
	// }
return (
  <footer className="footer-area">
    <div className="container-fluid">
        <div className="row px-3">
              <div className="custom-col-01 col">
                  <div className="single-footer-widget">
                      <h6>HOMEOWNER</h6>
                      <ul>
                          <li><a href="/homeowner/#whychoosebank">Why Choose EnerBank</a></li>
                          <li><a href="/homeowner/#howtopay">How to Pay</a></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-02 col">
                  <div className="single-footer-widget">
                      <h6>LOAN PROGRAMS</h6>
                      <ul>
                          <li><a href="/loan-programs#paymentoptbenefits">Payment Options Benefits</a></li>
                          <li><a href="/loan-programs#joinloanprogram">Join a Loan Program</a></li>
                          <li><a href="/loan-programs#createloanprogram">Create a Loan Program</a></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-03 col">
                  <div className="single-footer-widget">
                      <h6>ABOUT</h6>
                      <ul>
                          <li><a href="/about#companyoverview">Company Overview</a></li>
                          <li><a href="/about#leadership">Leadership</a></li>
                          <li><a href="/about#codeofconduct">Code of Conduct</a></li>
                          <li><a href="/about#memberfdic">Member FDIC</a></li>
                          <li><a href="/about#communityinvolvement">Community Involvement</a></li>
                          <li><a href="/about#boardofdirectors">Board of Directors</a></li>
                          <li><a href="/about#feedback">Feedback</a></li>
                          <li><a href="/">Blog</a></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-04 col">
                  <div className="single-footer-widget">
                      <h6>CAREERS</h6>
                      <ul>
                          <li><a href="/careers#whyenerbank">Why EnerBank</a></li>
                          <li><a href="/careers#availableposition">Available Positions</a></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-05 col">
                  <div className="single-footer-widget">
                      <h6>CONTACT</h6>
                      <ul>
                          <li><Link to={"/"}>Corporate Offices</Link></li>
                          <li><Link to={"/"}>Hours of Operation</Link></li>
                          <li><Link to={"/"}>Do Not Sell My Info</Link></li>
                      </ul>
                  </div>
              </div>
              <div className="custom-col-06 col border-left">
                  <div className="single-footer-widget">
                    <p>EnerBank USA is a wholly owned <br/>
                        subsidiary of CMS Energy Corp. (NYSE: CMS)
                    </p>
                    
                      <ul>
                          <li><Link to={"/"}>Terms of Use</Link></li>
                          <li><Link to={"/"}>Privacy Notice</Link></li>
                          <li><Link to={"/"}>Online Privacy Statement</Link></li>
                      </ul>
                      
                    <p>                       
                        © Copyright 2020. <br/>All rights reserved.
                    </p>
                    <p className="text-muted">This site is directed at, and made available to, persons in the U.S. only.
                    </p>
                </div>
              </div>
            <div className="custom-col-07 col">
              <div className="single-footer-widget footer-rightpad">
                  <img src={fdicLogo} alt="Member FDIC Logo" className="img-fluid mb-3" />
                  {/* <a href="https://www.bbb.org/utah/business-reviews/loans/enerbank-usa-in-salt-lake-city-ut-22001531/#sealclick" target="_blank"><img src={bbbLogo} alt="BBB Ratings Logo" /></a> */}
                  <button className="border-0 bg-transparent p-0 w-100" onClick={()=> externalUrl('https://www.bbb.org/utah/business-reviews/loans/enerbank-usa-in-salt-lake-city-ut-22001531/#sealclick')}><img src={bbbLogo} alt="BBB Ratings Logo" className="img-block" /></button>
              </div>

              <div className="mediaIcon">
                  <Link to={"/"}><FontAwesomeIcon icon={ faFacebookF } /></Link>
                  <Link to={"/"}><FontAwesomeIcon icon={ faTwitter } /></Link>
                  <Link to={"/"}><FontAwesomeIcon icon={ faLinkedinIn } /></Link>
              </div>
            </div>
          </div>
      </div>
  </footer>
)}

export default Footer
