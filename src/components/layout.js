import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, withPrefix  } from 'gatsby'
import Helmet from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header'
import Footer from './footer'
import '../css/fonts.css'
import '../css/layout.css'

const Layout = ({ children }) => {	
	const font = '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" >';
	return (
		<StaticQuery 
			query={
				graphql`
					query SiteTitleQuery {
						site {
							siteMetadata {
								title
							}
						}
					}
				`
			}
			render={data => (
				<>
					<Header siteTitle={data.site.siteMetadata.title} />
					<Helmet>
						<script src={withPrefix('script.js')} type="text/javascript" name="hirebridge-script" />
					</Helmet>
					<div dangerouslySetInnerHTML={{__html: font}} />
					{children}
					<Footer />
				</>
			)}
		/>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout