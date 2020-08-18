import React from "react";

import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const partnerPortalData = (data) => {
  return (
  <Layout>
    <SEO title={data.wpgraphql.post.title} description={data.wpgraphql.post.excerpt}/>

    {data.wpgraphql.post.innerpagebanner.pagebanner.bannner && (
      <section className="banner-area" id="home" style={{ backgroundImage: "url(" + data.wpgraphql.post.innerpagebanner.pagebanner.bannner.sourceUrl + ")" }}>
          <style dangerouslySetInnerHTML={{
            __html: [
              '.modal_banner:before {',
                'background: rgba(77, 77, 77, 0.6) url(' + data.wpgraphql.post.innerpagebanner.pagebanner.bannericon.sourceUrl + ') no-repeat center',
              '}'
            ].join('\n')
          }}></style>
          <div className="modal_banner fullscreen"></div>
      </section>
    )}

    <div className="container">
      <div className="row">
        <p className="my-5 w-100" dangerouslySetInnerHTML={{__html:data.wpgraphql.post.content}} />
      </div>
    </div>
    
    <div className="bg-blue start_drc start_drc2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="portal_list p-5">
              {data.wpgraphql.post.partnerportal.portalservice.servicegroup.map((item, i) => (
                  <li key={item.fieldGroupName + i}>{item.servicetitle}</li>                
              ))}              
            </ul>
          </div>
          
          </div>
          <div className="row">
            <div className="mx-auto text-center my-5">
              <Link to={data.wpgraphql.post.partnerportal.portalservice.accessportallink.url}>{data.wpgraphql.post.partnerportal.portalservice.accessportallink.title}</Link>
            </div>
        </div>
      </div>
    </div>
  </Layout>  
)}

export default partnerPortalData

export const query = graphql`
query {
    wpgraphql {
      post(id: "cG9zdDoxMjIw", idType: ID) {
        title
        date
        content(format: RENDERED)        
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