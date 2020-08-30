import React from 'react'
import Link from 'gatsby-link'
import fdicLogo from '../images/fdic-logo.svg'
import bbbLogo from '../images/bbb-logo.svg'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// library.add(fab, faFacebook, faTwitter, faLinkedin)

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer className="footer-area">
    <div className="container-fluid">
        <div className="row">
              <div className="custom-col-01 col">
                  <div className="single-footer-widget pl-30">
                      <h6>HOMEOWNER</h6>
                      <ul>
                          <li><Link to="homeowner/#whychoosebank">Why Choose EnerBank</Link></li>
                          <li><Link to="homeowner/#howtopay">How to Pay</Link></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-02 col">
                  <div className="single-footer-widget">
                      <h6>LOAN PROGRAMS</h6>
                      <ul>
                          <li><Link to="/loan-programs#paymentoptbenefits">Payment Options Benefits</Link></li>
                          <li><Link to="/loan-programs#joinloanprogram">Join a Loan Program</Link></li>
                          <li><Link to="/loan-programs#createloanprogram">Create a Loan Program</Link></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-03 col">
                  <div className="single-footer-widget">
                      <h6>ABOUT</h6>
                      <ul>
                          <li><Link to="/about#companyoverview">Company Overview</Link></li>
                          <li><Link to="/about#leadership">Leadership</Link></li>
                          <li><Link to="/about#codeofconduct">Code of Conduct</Link></li>
                          <li><Link to="/about#memberfdic">Member FDIC</Link></li>
                          <li><Link to="/about#communityinvolvement">Community Involvement</Link></li>
                          <li><Link to="/about#boardofdirectors">Board of Directors</Link></li>
                          <li><Link to="/about#feedback">Feedback</Link></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-05 col">
                  <div className="single-footer-widget">
                      <h6>CAREERS</h6>
                      <ul>
                          <li><Link to="/careers#whyenerbank">Why EnerBank</Link></li>
                          <li><Link to="/careers#availableposition">Available Positions</Link></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-05 col">
                  <div className="single-footer-widget">
                      <h6>CONTACT</h6>
                      <ul>
                          <li><Link to="/">Corporate Offices</Link></li>
                          <li><Link to="/">Hours of Operation</Link></li>
                          <li><Link to="/">Do Not Sell My Info</Link></li>
                      </ul>
                  </div>
              </div>
              <div className="custom-col-06 col border-left">
                  <div className="single-footer-widget">
                    <p>EnerBank USA is a wholly owned <br/>
                        subsidiary of CMS Energy Corp. (NYSE: CMS)
                    </p>
                    
                      <ul>
                          <li><Link to="/">Terms of Use</Link></li>
                          <li><Link to="/">Privacy Notice</Link></li>
                          <li><Link to="/">Online Privacy Statement</Link></li>
                      </ul>
                      
                    <p>                       
                        © Copyright 2019. <br/>All rights reserved.
                    </p>
                    <p className="text-muted">This site is directed at, and<br/>
                        made available to, persons in the<br/>
                        continental U.S., Alaska and Hawaii only.
                    </p>
                </div>
              </div>
            <div className="custom-col-07 col">
              <div className="single-footer-widget footer-rightpad">
                  <img className="mb-10" src={fdicLogo} alt="Logo" />
                  <img src={bbbLogo} alt="Logo" />
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
)

export default Footer
