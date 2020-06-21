import React from "react";

import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const AppMethod = ({data}) => {
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
          <div className="modal_banner fullscreen"></div>
      </section>
    )}

    <div className="container">
      <div className="row">
        <h4 className="my-5 text-center w-100" dangerouslySetInnerHTML={{__html:data.wpgraphql.page.content}}></h4>
      </div>

      <div className="row mb-5">
          {data.wpgraphql.page.appmethod.paperlessmethod.map((item, i) => (
              <div className="col-md-6 col-lg-3 d-flex flex-column mb-md-5 mb-lg-0">
                  <div className="border appMethod rounded">                
                      <img src={item.sectionicon.sourceUrl} alt={item.sectionicon.slug} />
                      <div className="text-blue text-center">{item.sectiontitle}</div>
                      <p>{item.sectionContent}</p>
                  </div>
              </div>
          ))}
      </div>
    </div>


  </Layout>  
)}

export default AppMethod

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
        
        appmethod {
          paperlessmethod {
            sectionContent
            sectiontitle
            sectionicon {
              id
              sourceUrl
              slug
            }
          }
        }


      }
    }
  }
`