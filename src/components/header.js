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
              <div className="info-panel">
                  <div id="loginBox">
                      <a id="closeButton" onClick={closeLoginForm}><img src={close_icon} alt="close icon" /></a>
                        <form id="loginForm">
                            <h3>Account Log In</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumy nibh euismod tinci ut laoreet dolore. Sed et pharetra dolor, et nibh euismod vehicula sem. </p>
                            <div className="row">
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Username"/></div>
                                <div className="col-md-6"><input type="password" className="form-control" placeholder="Password"/></div>
                                <div className="col-md-6"><input type="submit" className="btn btn-outline-light px-4" value="Submit"/></div>
                            </div>
                        </form>
                    </div>
              </div>
            )}            
            <div className="header-top menu">
              <div className="container">
                  <div className="ml-auto header-top-right py-2">
                    <ul>
                      <li><button onClick={loginForm} className="btn-link">Account Log In</button>|</li>
                      <li><a href="https://enerbankusa.documentinbox.com/Inbox/app#login" target="_blank">View / Sign Loan Docs</a>|</li>
                      <li><Link to={'/paymentportalapp'} >PartnerPortal</Link>|</li>
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