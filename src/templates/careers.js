import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CareersPage = ({data}) => {
  console.log(data)
  return (  
    <Layout>
      <SEO title={data.wpgraphql.category.name} description={data.wpgraphql.category.name}/>
      
      <h1 dangerouslySetInnerHTML={{ __html: data.wpgraphql.category.name }} />

      {data.wpgraphql.category.posts.edges.map(({ node }) => (
        <div key={node.slug}>
          <Link to={`/${node.slug}`}>
          <div dangerouslySetInnerHTML={{ __html: node.title }} />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}

      {data.wpgraphql.category.careers_post.edges.map(({ node }) => (
        <div key={node.slug}>
          <Link to={`/${node.slug}`}>
          <div dangerouslySetInnerHTML={{ __html: node.title }} />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export default CareersPage

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      category(id: $databaseId, idType: DATABASE_ID) {
        name
        posts {
          edges {
            node {
                slug
                databaseId
                title
                excerpt
            }
          }
        } 

        careers_post {
          edges {
            node {
              id
              title
            }
          }
        }

      }
    }
  }
`