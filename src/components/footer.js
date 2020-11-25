import React from 'react'
import { navigate } from "gatsby"
import fdicLogo from '../images/fdic-logo.svg'
import bbbLogo from '../images/darkgray-seal-bbb.png'
// font awesome library icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap'
import privacyNoticePdf from '../pdf/Privacy-Notice.pdf'

const Footer = () => {
    const externalLink = (url) => {
		window.open(url, '_blank');
    }
    const customLink = (url, e) => {
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
                            {/* <li><a href="/homeowner/#whychoosebank">Why Choose EnerBank</a></li> */}
                            <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/homeowner/#whychoosebank')}>Why Choose EnerBank</Button></li>
                            <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/homeowner/#howtopay')}>How to Pay</Button></li>
                        </ul>
                  </div>
              </div>
              <div className="custom-col-02 col">
                  <div className="single-footer-widget">
                      <h6>LOAN PROGRAMS</h6>
                      <ul>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/loan-programs#paymentoptbenefits')}>Payment Options Benefits</Button></li>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/loan-programs#joinloanprogram')}>Join a Loan Program</Button></li>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/loan-programs#createloanprogram')}>Create a Loan Program</Button></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-03 col">
                  <div className="single-footer-widget">
                      <h6>ABOUT</h6>
                      <ul>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/about/#companyoverview')} >Company Overview</Button></li>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/about/#leadership')}>Leadership</Button></li>
                          {/* <li><a href="/about#codeofconduct">Code of Conduct</a></li> */}
                          {/* <li><a href="/about#memberfdic">Member FDIC</a></li> */}
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/about/#communityinvolvement')}>Community Involvement</Button></li>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/about/#boardofdirectors')}>Board of Directors</Button></li>
                          {/* <li><a href="/feedback">Feedback</a></li> */}
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/blog')}>Blog</Button></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-04 col">
                  <div className="single-footer-widget">
                      <h6>CAREERS</h6>
                      <ul>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/careers#whyenerbank')}>Why EnerBank</Button></li>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/careers#availableposition')}>Available Positions</Button></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-05 col">
                  <div className="single-footer-widget">
                      <h6>CONTACT</h6>
                      <ul>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/contact/#corporateOffices')}>Corporate Offices</Button></li>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/contact/#hoursOfOperation')}>Hours of Operation</Button></li>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/do-not-sell-my-info')}>Do Not Sell My Info</Button></li>
                      </ul>
                  </div>
              </div>
              <div className="custom-col-06 col border-left">
                  <div className="single-footer-widget">
                    <p>EnerBank USA is a wholly owned <br/>
                        subsidiary of CMS Energy Corp. (NYSE: CMS)
                    </p>
                    
                      <ul>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/terms-of-use')}>Terms of Use</Button></li>
                          <li><Button variant="outline-light" className="border-0" onClick={() => externalLink(privacyNoticePdf)}>Privacy Notice</Button></li>
                          <li><Button variant="outline-light" className="border-0" onClick={() => customLink('/privacy-policy')}>Online Privacy Statement</Button></li>
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
                  <Button className="border-0 bg-transparent p-0" onClick={()=> externalLink('https://www.bbb.org/utah/business-reviews/loans/enerbank-usa-in-salt-lake-city-ut-22001531/#sealclick')}><img src={bbbLogo} alt="BBB Ratings Logo" className="img-block" /></Button>
              </div>

              <div className="mediaIcon">
                  <Button variant="outline-light" className="border-0" onClick={() => externalLink('https://www.facebook.com/enerbank')}><FontAwesomeIcon icon={ faFacebookF } /></Button>
                  <Button variant="outline-light" className="border-0" onClick={() => externalLink('https://twitter.com/enerbank')}><FontAwesomeIcon icon={ faTwitter } /></Button>
                  <Button variant="outline-light" className="border-0" onClick={() => externalLink('https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEBJQklYrIpYQAAAXXX4bnA7rC_wMy1FrE-q85ty0Lwod8_B8MAPPFJHs4B9HUfF-spVaWlBBpY_g-9p7xuGppFP08d6nkfuDdqzYW0V0Re_DPAkxSWMkluZ65ZsVBrX4q6zVU=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F3077782%3Ftrk%3Dtyah%26trkInfo%3DtarId%253A1395948482719%252Ctas%253Aenerbank%252Cidx%253A1-1-1')}><FontAwesomeIcon icon={ faLinkedinIn } /></Button>
              </div>
            </div>
          </div>
      </div>
  </footer>
)}

export default Footer
