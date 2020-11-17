import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ThemeContext from "../context/ThemeContext"
import Menu from './menu'
import close_icon from '../images/close_icon.svg'

const Header = ({ siteTitle }) => {

    const [accLogin, togglePanel] = useState(false);
    const loginForm = () => {
      togglePanel(true);
    }

    const closeLoginForm = () => {
      togglePanel(false);
    }

    return(
      <ThemeContext.Consumer>
        {theme => (
          <header>
            {accLogin && (
              <div id="loginBox" className="container mx-auto">
                  <a id="closeButton" onClick={closeLoginForm}><img src={close_icon} alt="close icon" /></a>
                  <h4 className="modal-title mb-4 text-white" id="modalTitle">Borrower Account Log In</h4>
                  <div id="modalContent" className="small line-height-normal">
                    <p style={{lineHeight: 'normal'}}>If your account number starts with 456 <br/><a href="https://accounts.enerbank.com" target="_blank">Click Here </a></p>
                    <p style={{lineHeight: 'normal'}}>Otherwise <br/><a href="https://enerbankpayments.com/">Click Here</a></p>
                  </div>
              </div>
            )}            
            <div className="header-top menu">
              <div className="container">
                  <div className="ml-auto header-top-right py-2">
                    <ul>
                      <li><button onClick={loginForm} className="btn-link">Account Log In</button>|</li>
                      <li><a href="https://enerbankusa.documentinbox.com/Inbox/app#login" target="_blank">View / Sign Loan Docs</a>|</li>
                      <li><Link to={'/partnerportalapp/index.html'} >PartnerPortal</Link>|</li>
                      <li><Link to={'/payment-estimator'} className="btn-link" >Payment Estimator</Link></li>
                    </ul>
                  </div>
              </div>
            {/* main menun start */}
            <Menu loginForm={loginForm} />
            </div>
            <div id="header" className="sticky-menu menu">
              <Menu loginForm={loginForm} />
            </div>
          </header>
        )}
      </ThemeContext.Consumer>        
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header