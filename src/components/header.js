import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ThemeContext from "../context/ThemeContext"
import Menu from './menu'
import close_icon from '../images/close_icon.svg'
import PaymentEstimator from './paymentEstimator'

const Header = ({ siteTitle }) => {
    const [visible, setVisible] = useState(false);

    const showbenefitpopup = () => event => {
      event.preventDefault();
      setVisible(true);
    }

    const hidebenefitpopup = () => {
      setVisible(false);
    }

    const popup = () => {
        return (
          <PaymentEstimator visiblity={visible} handleClose={hidebenefitpopup} />
        )
    }

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
          <>
            {accLogin && (
              <div className="info-panel">
                  <div id="loginBox"> 
                      <button id="closeButton" onClick={closeLoginForm}><img src={close_icon} alt="close icon" /></button>
                        <form id="loginForm">
                            <h3>Account Log In</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumy nibh euismod tinci ut laoreet dolore. Sed et pharetra dolor, et nibh euismod vehicula sem. </p>
                            <div className="row">
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Username"/></div>
                                <div className="col-md-6"><input type="password" className="form-control" placeholder="Password"/></div>
                                <div className="col-md-6"><input type="submit" className="btn_submit" value="Submit"/></div>
                            </div>
                        </form>
                    </div>
              </div>
            )}
            <header className="menu">
              <div className="header-top">
                <div className="container">
                    <div className="ml-auto header-top-right no-padding">
                      <ul>
                        <li><button onClick={loginForm} className="btn-link">Account Log In</button>|</li>
                        <li><a href="https://enerbankusa.documentinbox.com/Inbox/app#login">View / Sign Loan Docs</a>|</li>
                        <li><a href="https://enerbank.com/partnerportalapp/" target="_blank">PartnerPortal</a>|</li>
                        {/* <li><Link to={'/'}>Dealer Resource Center</Link></li> */}
                        <li><button className="btn-link" onClick={showbenefitpopup()} >Payment Estimator</button></li>
                        {/* <li><button className="mx-0 px-0 calculator btn-link" style={{background: "url(" + calc_icon + ")" }} onClick={showbenefitpopup()} /></li> */}
                      </ul>
                    </div>
                </div>
              </div>
              {/* main menun start */}
              <Menu headerTop={showbenefitpopup} loginForm={loginForm} />
            </header>
            <div id="loginBox" style={{display: 'none'}}> 
                <div id="closeButton"><img src={close_icon} alt="close icon" title="" /></div>
                <form id="loginForm">
                  {/* FORM STUFF */}
                  <h3>Account Log In</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
                    nonumy nibh euismod tinci ut laoreet dolore. Sed et pharetra dolor, 
                    et nibh euismod vehicula sem. </p>
                  <div className="row">
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Username"/></div>
                    <div className="col-md-6"><input type="password" className="form-control"  placeholder="Password"/></div>
                    <div className="col-md-6"><input type="submit" className="btn_submit" value="Submit"/></div>
                  </div>
                </form>
            </div>
            <header id="header" className="sticky-menu menu">
              <Menu headerTop={showbenefitpopup} />
            </header>
            {
              popup()
            }
          </>
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