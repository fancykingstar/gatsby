import React, { useState,  } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from '../images/enerbank-logo.svg'

export default (props) => {
    const [menuStatus, mobileMenu] = useState(false);
    const [menuClass, collapse] = useState(false)
    const showMenu = (e) => {
        mobileMenu(isShow => !isShow);
        collapse(isShow => !isShow);
    }
    return (
        <StaticQuery
            query = { graphql`
                query MenuQuery {
                    wpgraphql {
                        menuItems(where: {location: MENU_1}) {
                        edges {
                            node {
                            label
                            url
                            connectedObject {
                                ... on WPGraphQL_Post {
                                slug
                                title
                                }
                                ... on WPGraphQL_MenuItem {
                                title
                                }
                                ... on WPGraphQL_Tag {
                                slug
                                name
                                }
                                ... on WPGraphQL_Category {
                                slug
                                name
                                }
                                ... on WPGraphQL_Page {
                                slug
                                title
                                }
                            }
                            childItems {
                                edges {
                                node {
                                    label
                                    url
                                    connectedObject {
                                    ... on WPGraphQL_Post {
                                        slug
                                        title
                                    }
                                    ... on WPGraphQL_MenuItem {
                                        title
                                    }
                                    ... on WPGraphQL_Tag {
                                        slug
                                        name
                                    }
                                    ... on WPGraphQL_Category {
                                        slug
                                        name
                                    }
                                    ... on WPGraphQL_Page {
                                        slug
                                        title
                                    }
                                    }
                                }
                                }
                            }
                            }
                        }
                        }
                    }
                }
        `}
        
        render={ data => {
            return (
                <nav className="navbar navbar-expand-lg main-menu">
                    <div className="container">
                        {/* navbar brand logo */}
                        <Link to="/" id="logo" className="navbar-brand"><img src={logo} alt="EnerBank Logo" title="" /></Link>
                        {/* navbar toggler */}
                        <button className={menuClass ? 'navbar-toggler' : 'navbar-toggler collapsed'} type="button" data-toggle="collapse" data-target="#navbarText" 
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={showMenu}>
                            <span className="close">X</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* navbar menu */}
                        <div className={menuStatus ? 'navbar-collapse show' : 'navbar-collapse'} id="navbarText">
                            <ul className="navbar-nav ml-auto nav-menu">
                                {data.wpgraphql.menuItems.edges.map(({ node }) => (
                                    <li key={node.id} className="nav-item">
                                        {('#' !== node.url) ? (
                                            <Link to={`/${node.connectedObject.slug}`} activeClassName="active" className="nav-link">{node.label}</Link>
                                        ) : (
                                            <Link to={`/`} activeClassName="active" className="nav-link">{node.label}</Link>
                                        )}
                                        {(node.childItems.edges.length > 0) && (
                                            <ul className="sub-nav">
                                                {node.childItems.edges.map(({ node }) => (
                                                    <li key={node.id} className="nav-item">
                                                        <Link to={`/${node.connectedObject.slug}`} activeClassName="active" className="nav-link">{node.label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            {/* header top */}
                            <div className="header-top d-md-none">
                                <div className="header-top-right">
                                    <ul>
                                        <li><button onClick={props.loginForm} className="btn-link">Account Log In</button>|</li>
                                        <li><a href="https://enerbankusa.documentinbox.com/Inbox/app#login" rel="noopener noreferrer" target="_blank">View / Sign Loan Docs</a>|</li>
                                        <li><Link to={'/partnerportalapp/index.html'} >PartnerPortal</Link>|</li>
                                        <li><Link to={'/payment-estimator'} className="btn-link" >Payment Estimator</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            )
        }}
    />
)}