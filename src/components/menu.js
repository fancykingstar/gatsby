import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from '../images/enerbank-logo.svg'

export default () => (
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
    
    render={ data => (
        <nav className="navbar navbar-expand-lg main-menu">
            <div className="container">            
                {/* navbar brand logo */}
                <Link to="/" id="logo" className="navbar-brand"><img src={logo} alt="EnerBank Logo" title="" /></Link>
                {/* navbar toggler */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" 
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* navbar menu */}
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto nav-menu">
                        {data.wpgraphql.menuItems.edges.map(({ node }) => (
                            <li key={node.id} className="nav-item">
                                {('#' !== node.url) ? (
                                    <Link to={`/${node.connectedObject.slug}`} className="nav-link">{node.label}</Link>
                                ) : (
                                    <Link to={`/`} className="nav-link">{node.label}</Link>
                                )}
                                {(node.childItems.edges.length > 0) && (
                                    <ul className="sub-nav">
                                        {node.childItems.edges.map(({ node }) => (
                                            <li key={node.id} className="nav-item">
                                                <Link to={`/${node.connectedObject.slug}`} className="nav-link">{node.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )}
  />
)