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
              <p dangerouslySetInnerHTML={{__html: data.wpgraphql.page.innerpagebanner.pagebanner.bannertext}} />
          </div>
      </section>
    )}

    <div className="container">
      <div className="row p-5" id="dealerPage" dangerouslySetInnerHTML={{__html:data.wpgraphql.page.content}} />

      <div className="row mb-5">
          {data.wpgraphql.page.dealerresourcecenter.powerfulltool.map((item, i) => (
              <div className="col-lg-4 d-flex flex-column mb-md-5 mb-lg-0" key={item.fieldGroupName + i} >
                  <div className="border dealerResource rounded">                
                      <img src={item.sectionicon.sourceUrl} alt={item.sectionicon.slug} />
                      <div className="text-blue text-center">{item.sectiontitle}</div>
                      <p>{item.sectioncontent}</p>
                      <Link to={item.sectionlink.url}>{item.sectionlink.title}</Link>
                  </div>
              </div>
          ))}
      </div>

    </div>

    <div className="bg-blue start_drc">
        <div>{data.wpgraphql.page.dealerresourcecenter.drcnow.sectionheading}</div>
        <p>{data.wpgraphql.page.dealerresourcecenter.drcnow.sectiondesc}</p>
        <Link to={data.wpgraphql.page.dealerresourcecenter.drcnow.sectionlink.url}>{data.wpgraphql.page.dealerresourcecenter.drcnow.sectionlink.title}</Link>
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
        
        dealerresourcecenter {
          powerfulltool {
            fieldGroupName
            sectioncontent
            sectiontitle
            sectionicon {
              sourceUrl
              slug
            }
            sectionlink {
              url
              title
            }
          }
          drcnow {
            fieldGroupName
            sectiondesc
            sectionheading
            sectionlink {
              title
              url
            }
          }
        }
 
      }
    }
  }
`