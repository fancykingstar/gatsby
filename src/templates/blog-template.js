import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => {
  return (
    <Layout>
      <SEO title={data.wpgraphql.post.title} description={data.wpgraphql.post.excerpt}/>
      <section className="section-gap">
          <div className="container">
              <h1 dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.title }} />
              <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.content }} />
              <Link to="/">Go back to the homepage</Link>
          </div>
      </section>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      post(id: $databaseId, idType: DATABASE_ID) {
        title
        date
        content(format: RENDERED)
        excerpt(format: RENDERED)
        featuredImage {
          altText
          title(format: RENDERED)
          mediaItemUrl
          slug
        }
      }
    }
  }
`