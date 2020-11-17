import React from 'react'
import { Link, navigate } from "gatsby"
import fdicLogo from '../images/fdic-logo.svg'
import bbbLogo from '../images/darkgray-seal-bbb.png'
// font awesome library icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const externalUrl = (url) => {
		window.open(url, '_blank');
    }
    const customUrl = (url, e) => {
        // browserHistory.push('/'+url);
        navigate(url);
	}
return (
  <footer className="footer-area">
    <div className="container-fluid">
        <div className="row px-3">
              <div className="custom-col-01 col">
                  <div className="single-footer-widget">
                      <h6>HOMEOWNER</h6>
                      <ul>
                          <li><a href="/homeowner/#whychoosebank">Why Choose EnerBank</a></li>
                          {/* <li><Link onClick={() => customUrl('/homeowner/#whychoosebank')}>Why Choose EnerBank</Link></li> */}
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
                          <li><a href="/about/#companyoverview" >Company Overview</a></li>
                          <li><a href="/about/#leadership">Leadership</a></li>
                          {/* <li><a href="/about#codeofconduct">Code of Conduct</a></li> */}
                          {/* <li><a href="/about#memberfdic">Member FDIC</a></li> */}
                          <li><a href="/about/#communityinvolvement">Community Involvement</a></li>
                          <li><a href="/about/#boardofdirectors">Board of Directors</a></li>
                          {/* <li><a href="/feedback">Feedback</a></li> */}
                          <li><a href="/blog">Blog</a></li>
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
                          <li><Link to={"/contact/#corporateOffices"}>Corporate Offices</Link></li>
                          <li><Link to={"/contact/#hoursOfOperation"}>Hours of Operation</Link></li>
                          <li><Link to={"/do-not-sell-my-info"}>Do Not Sell My Info</Link></li>
                      </ul>
                  </div>
              </div>
              <div className="custom-col-06 col border-left">
                  <div className="single-footer-widget">
                    <p>EnerBank USA is a wholly owned <br/>
                        subsidiary of CMS Energy Corp. (NYSE: CMS)
                    </p>
                    
                      <ul>
                          <li><Link to={"/terms-of-use"}>Terms of Use</Link></li>
                          <li><a href="https://devgbpress.enerbank.com/privacy-notice/" target="_blank">Privacy Notice</a></li>
                          <li><Link to={"/privacy-policy"}>Online Privacy Statement</Link></li>
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
                  <button className="border-0 bg-transparent p-0" onClick={()=> externalUrl('https://www.bbb.org/utah/business-reviews/loans/enerbank-usa-in-salt-lake-city-ut-22001531/#sealclick')}><img src={bbbLogo} alt="BBB Ratings Logo" className="img-block" /></button>
              </div>

              <div className="mediaIcon">
                  <a href="https://www.facebook.com/enerbank"><FontAwesomeIcon icon={ faFacebookF } /></a>
                  <a href="https://twitter.com/enerbank"><FontAwesomeIcon icon={ faTwitter } /></a>
                  <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEBJQklYrIpYQAAAXXX4bnA7rC_wMy1FrE-q85ty0Lwod8_B8MAPPFJHs4B9HUfF-spVaWlBBpY_g-9p7xuGppFP08d6nkfuDdqzYW0V0Re_DPAkxSWMkluZ65ZsVBrX4q6zVU=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F3077782%3Ftrk%3Dtyah%26trkInfo%3DtarId%253A1395948482719%252Ctas%253Aenerbank%252Cidx%253A1-1-1"><FontAwesomeIcon icon={ faLinkedinIn } /></a>
              </div>
            </div>
          </div>
      </div>
  </footer>
)}

export default Footer
