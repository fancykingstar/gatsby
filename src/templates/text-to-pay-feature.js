import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

const TextToPayFeature = ({data, props}) => {
  

  return (  
    <Layout>
      <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>
      {/* section-gap */}
      <section  className="container">
        <h1 className="text-center my-5">Terms of Use</h1>
        <div className="row">
          <div className="col-12 mb-5" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.content}} />
        </div>
      </section>
    </Layout>
  )
 }
export default TextToPayFeature

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      page(id: $databaseId, idType: DATABASE_ID) {
        title
        date
        content(format: RENDERED)
        featuredImage {
          altText
          title(format: RENDERED)
          mediaItemUrl
          slug
        }
        
        terms {
          fieldGroupName
          terms {
            answer
            question
            fieldGroupName
          }
        }

      }
    }
  }
`