import React from "react";
import { Link, graphql } from "gatsby";
import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion';
import "react-tabbordion/demo/accordion.css";

import Layout from "../components/layout"
import SEO from "../components/seo"

// accordian
const blockElements = {
  animator: 'accordion-animator',
  content: 'accordion-content',
  panel: 'accordion-panel',
  label: 'accordion-title',
}


const LoanTypePage = ({data}) => {
  return (  
    <Layout>
      <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>
      {/* <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content }} /> */}
      {data.wpgraphql.page.top_banner.banner.backgroundImage && (
        <section className="banner-area" id="home" style={{ backgroundImage: "url(" + data.wpgraphql.page.top_banner.banner.backgroundImage.sourceUrl + ")" }}>
          <div className="container">
            <div className="row fullscreen d-flex align-items-end pb-5">
              { data.wpgraphql.page.top_banner.banner.bannerLinks.map((item, i) => 
                (
                  <div className="col-md-4" key={item.fieldGroupName+i}>
                    <div className="header-btn mr-3 ml-3"><Link to="#" dangerouslySetInnerHTML={{ __html: item.links.title}} /></div>
                  </div>
                ) 
              )}
            </div>
          </div>
        </section>
      )}

      <section className="service-area section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 header-text mb-4">
              <h2 className="mb-20 text-center"><span dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.title }} /></h2>
              <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content }} />
            </div>
          </div>

          {/* Collapsed List */}
          <Tabbordion blockElements={blockElements} animateContent={'height'} mode={'toggle'} className="accordion loan_offer mx-4 mx-lg-5" name="accordion">
              {data.wpgraphql.page.accordion.tabpanel.map((item, i) =>
                  (
                      <TabPanel key={item.fieldGroupName + i}>
                          <TabLabel className="w-100 text-left btn btn-link">{item.tablabel}</TabLabel>
                          <TabContent>
                              <div dangerouslySetInnerHTML={{__html: item.tabcontent}} />
                          </TabContent>
                      </TabPanel>
                  )
              )}
          </Tabbordion>
        </div>
      </section>
    </Layout>
  )
}

export default LoanTypePage

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

        top_banner {
          banner {
            backgroundImage {
              sourceUrl
            }
            bannerLinks {
              fieldGroupName
              links {
                title
                url
              }
            }
          }
        }

        accordion {
          tabpanel {
              fieldGroupName
              tabcontent
              tablabel
          }
        }
        
      }

    }
  }
`