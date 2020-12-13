import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import privacyNoticePdf from '../pdf/Privacy-Notice.pdf'

const PrivacyPolicy = ({data, props}) => {
  const externalLink = (event, url) => {
    window.open(url, '_blank');
    event.preventDefault();
  }

  return (  
    <Layout>
      <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>
      {/* section-gap */}
      <section  className="container">
        <div className="text-center mt-5" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.content}} />
        <div className="row">
          <div className="col-12">
            {data.wpgraphql.page.terms.terms.map((item, i) => (
              <div key={item.fieldGroupName + i} className="mb-5">
                <h3 className="text-blue mb-1">{item.question}</h3>
                <div dangerouslySetInnerHTML={{__html: item.answer}} />                
              </div>
            ))}
            <p className="mb-5">Click <a href="/#" className="btn-link" onClick={(e) => externalLink(e, privacyNoticePdf)}>here</a> for a copy of the Privacy Policy that the Bank provides to its loan customers.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
 }
export default PrivacyPolicy

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