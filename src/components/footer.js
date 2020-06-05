import React from 'react'
import Link from 'gatsby-link'
import fdicLogo from '../images/fdic-logo.svg'
import bbbLogo from '../images/bbb-logo.svg'

const Footer = () => (
  <footer className="footer-area">
    <div className="container-fluid">
        <div className="row">
              <div className="custom-col-01 col-6">
                  <div className="single-footer-widget pl-30">
                      <h6>HOMEOWNER</h6>
                      <ul>
                          <li><Link to="/">Why Choose EnerBank</Link></li>
                          <li><Link to="/">Loan / Payment Options</Link></li>
                          <li><Link to="/">How to Pay</Link></li>
                          <li><Link to="/">Homeowner FAQ</Link></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-02 col-6">
                  <div className="single-footer-widget">
                      <h6>LOAN PROGRAMS</h6>
                      <ul>
                          <li><Link to="/">Payment Options</Link></li>
                          <li><Link to="/">Features of EnerBank Programs</Link></li>
                          <li><Link to="/">How To Select Loan Provider</Link></li>
                          <li><Link to="/">Create a Loan Program</Link></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-03 col-6">
                  <div className="single-footer-widget">
                      <h6>ABOUT</h6>
                      <ul>
                          <li><Link to="/">Company Overview / History</Link></li>
                          <li><Link to="/">Leadership / Board Members</Link></li>
                          <li><Link to="/">CMS Profile / Code of Conduct</Link></li>
                          <li><Link to="/">FDIC / Why Important</Link></li>
                          <li><Link to="/">Number of Merchants</Link></li>
                          <li><Link to="/">Community Involvement</Link></li>
                          <li><Link to="/">Feedback</Link></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-04 col-6">
                  <div className="single-footer-widget">
                      <h6>CAREERS</h6>
                      <ul>
                          <li><Link to="/">Why Work at EB</Link></li>
                          <li><Link to="/">Available Positions</Link></li>
                          <li><Link to="/">Apply</Link></li>
                          
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-05 col-6">
                  <div className="single-footer-widget">
                      <h6>CONTACT</h6>
                      <ul>
                          <li><Link to="/">Corporate Offices</Link></li>
                          <li><Link to="/">Customer Service</Link></li>
                          <li><Link to="/">Lending</Link></li>
                          <li><Link to="/">Contractor Support</Link></li>
                      </ul>											
                  </div>
              </div>
              <div className="custom-col-06 col-6 border-left">
                  <div className="single-footer-widget">
                    <p>EnerBank USA is a wholly owned subsidiary <br/>
                      of CMS Energy Corp. (NYSE: CMS)<br/>                    
                      Terms of Use<br/>
                      Privacy Notice<br/>
                      Online Privacy Statement<br/>                      
                      ©Copyright 2019. All rights reserved.
                  </p>
                  <p className="text-muted">This site is directed at,  <br/>and made available to,  <br/>persons in the continental U.S., <br/> Alaska and Hawaii only.</p>									
                </div>
              </div>
            <div className="custom-col-07 col-6">
              <div className="single-footer-widget footer-rightpad">
                  <img className="mb-10" src={fdicLogo} alt="Logo" />
                  <img src={bbbLogo} alt="Logo" />
              </div>
            </div>
          </div>
      </div>
  </footer>
)

export default Footer
