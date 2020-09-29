import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header'
import Footer from './footer'
import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
import '../css/layout.css'

const Layout = ({ children }) => {	
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