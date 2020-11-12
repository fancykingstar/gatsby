import React, { useRef, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

const ReferralProgramDetail = ({data, props}) => {
  const [expand, setExpand] = useState(false);
  

  return (  
    <Layout>
      <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>
      {/* section-gap */}
      <section  className="container">
  <h1 className="text-center my-5">{data.wpgraphql.page.title}</h1>
        <div className="row">
          <div className="col-12">
            {data.wpgraphql.page.terms.terms.map((item, i) => (
              <div key={item.fieldGroupName + i} className="mb-5">
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
export default ReferralProgramDetail

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