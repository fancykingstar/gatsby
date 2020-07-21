import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Menu from './menu'
import calc_icon from '../images/calculator_icon.svg'
import calc_icon_hover from '../images/calculator_icon_light.svg'
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
      <>
        {accLogin && (
          <div className="info-panel">
              <div id="loginBox"> 
                  <div id="closeButton" onClick={closeLoginForm}><img src="https://enerbank.bwpcommunications.com/wp-content/themes/enerbank/img/close_icon.svg" alt="close icon" /></div>
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
                    <li onClick={loginForm}><span>Account Log In</span>|</li>
                    <li><Link to="/">View / Sign Loan Docs</Link>|</li>
                    <li><Link to="/">PartnerPortal</Link>|</li>
                    <li><Link to="/">Dealer Resource Center</Link></li>
                    <li><Link to="/" className="mx-0 px-0 calculator" style={{background: "url(" + calc_icon + ")" }} /></li>
                    <style dangerouslySetInnerHTML={{
                        __html: [
                          '.calculator:hover {',
                            'background:', "url(" + calc_icon_hover + ") !important",
                          '}'
                        ].join('\n')
                      }}>                        
                    </style>
                  </ul>
                </div>
            </div>
          </div>
          {/* main menun start */}
          <Menu/>
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
          <div className="header-top">
            <div className="container">
              <div className="row">
                <div className="ml-auto header-top-right no-padding">
                  <ul>
                    <li><Link to="/" id="loginButton">Account Log In</Link>|</li>
                    <li><Link to="/">View / Sign Loan Docs</Link>|</li>
                    <li><Link to="/">PartnerPortal</Link>|</li>
                    <li><Link to="/">Dealer Resource Center</Link></li>
                    <li>
                      <Link to="/">
                        <i className="fa mr-15">
                          <img src={calc_icon} alt="calculator icon" title="" />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Menu/>
        </header>
      </>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header