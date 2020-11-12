import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

const ReferralTerms = ({data, props}) => {

  return (  
    <Layout>
      <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>
      {/* section-gap */}
      <section  className="container">
        <div className="py-5 text-center" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.content}} />
        <div className="row">
          <div className="col-12">
            {data.wpgraphql.page.terms.terms.map((item, i) => (
              <div key={item.fieldGroupName + i} className="mb-5">
                <style dangerouslySetInnerHTML={{
                  __html: [
                    'ul{',
                      'list-style: disc !important;',
                      'margin: 5px 0 20px 20px',
                    '}'
                  ].join('\n')
                }}></style>
                <h3 className="text-blue mb-1">{item.question}</h3>
                <div dangerouslySetInnerHTML={{__html: item.answer}} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
 }
export default ReferralTerms

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