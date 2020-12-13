import React from "react";

import { graphql} from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion';
import "react-tabbordion/demo/accordion.css";

// accordian
const blockElements = {
  animator: 'accordion-animator',
  content: 'accordion-content',
  panel: 'accordion-panel',
  label: 'accordion-title',
}

const CareerPage = ({data}) => {
  // console.log(window.location.hash)
  return (  
    <Layout>
      <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>
      {data.wpgraphql.page.top_banner.banner.backgroundImage && (
        <section className="banner-area pos_relative" id="home">
          <img src={data.wpgraphql.page.top_banner.banner.backgroundImage.sourceUrl} className="object-fit-cover" />
        </section>
      )}
      {/* section-gap */}
      <section  className="container py-5">
        <h1 className="text-center pb-3">Contact Us</h1>
        <div className="row">
        <Tabbordion blockElements={blockElements} animateContent={'height'} className="accordion loan_offer mx-4 mx-lg-5" name="accordion">
          {data.wpgraphql.page.contact.supportSection.map((item, i) => {
            return(
              <TabPanel key={item.fieldGroupName + i} className="col-12">
                {/* <h3 className="text-blue supportHeading">{item.supportHeading}</h3> */}
                <TabLabel className="w-100 text-left btn btn-link" dangerouslySetInnerHTML={{__html: item.supportHeading}} />
                <TabContent>
                    <div className="p-3 px-4 mb-4" dangerouslySetInnerHTML={{__html: item.supportDetails}} />
                    {item.innerSection && (
                      item.innerSection.map((item, j) => (
                        <div key={item.fieldGroupName + j}>
                          <div className="bg-grey py-2 px-3 font-weight-bold supportHeading">{item.innerSectionHeading}</div>
                          <div className="p-4 mb-3 innerSectionDetails" dangerouslySetInnerHTML={{__html: item.innerSectionDetails}} />
                        </div>
                      ))
                    )}
                </TabContent>
              </TabPanel>
            )
          })}
          </Tabbordion>
        </div>
      </section>
    </Layout>
  )
 }
export default CareerPage

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
          fieldGroupName
          banner {
            fieldGroupName
            backgroundImage {
              sourceUrl
            }
          }
        }
        contact {
          supportSection {
            supportDetails
            supportHeading
            innerSection {
              innerSectionDetails
              innerSectionHeading
              fieldGroupName
            }
            fieldGroupName
          }
        }

      }
    }
  }
`