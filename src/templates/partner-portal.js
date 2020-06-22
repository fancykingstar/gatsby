import React from "react";

import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const PartnerPortal = ({data}) => {
  var servL = data.wpgraphql.page.partnerportal.portalservice.servicegroup.length;
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
        <p className="my-5 w-100" dangerouslySetInnerHTML={{__html:data.wpgraphql.page.content}} />
      </div>
    </div>
    
    <div className="bg-blue start_drc start_drc2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="portal_list p-5">
              {data.wpgraphql.page.partnerportal.portalservice.servicegroup.map((item, i) => (
                  <li key={item.fieldGroupName + i}>{item.servicetitle}</li>                
              ))}              
            </ul>
          </div>
          
          </div>
          <div className="row">
            <div className="mx-auto text-center my-5">
              <Link to={data.wpgraphql.page.partnerportal.portalservice.accessportallink.url}>{data.wpgraphql.page.partnerportal.portalservice.accessportallink.title}</Link>
            </div>
        </div>
      </div>
    </div>


  </Layout>  
)}

export default PartnerPortal

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
        
        partnerportal {
          portalservice {
            servicegroup {
              fieldGroupName
              servicetitle
            }
            accessportallink {
              title
              url
            }
          }
        }

      }
    }
  }
`