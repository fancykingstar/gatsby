import React from "react";

import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const DealerResource = ({data}) => {
  return (  
  <Layout>
    <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>

    {data.wpgraphql.page.innerpagebanner.pagebanner.bannner && (
      <section className="banner-area" id="home" style={{ backgroundImage: "url(" + data.wpgraphql.page.innerpagebanner.pagebanner.bannner.sourceUrl + ")" }}>
          <style dangerouslySetInnerHTML={{
            __html: [
              '.modal_banner:before {',
                'background: rgba(77, 77, 77, 0.6) url(' + data.wpgraphql.page.innerpagebanner.pagebanner.bannericon.sourceUrl + ') no-repeat center',
              '}'
            ].join('\n')
          }}></style>
          <div className="modal_banner fullscreen">
          </div>
      </section>
    )}

    <div className="container">
      <div className="row">
        <p className="my-5 w-100" dangerouslySetInnerHTML={{__html:data.wpgraphql.page.content}}></p>
      </div>
    </div>



  </Layout>  
)}

export default DealerResource

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
        
        innerpagebanner {
          fieldGroupName
          pagebanner {
            bannertext
            bannner {
              title
              sourceUrl
            }
            bannericon {
              uri
              title
              sourceUrl
            }
          }
        }
        
 
      }
    }
  }
`