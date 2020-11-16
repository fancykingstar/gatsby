import React, { useRef, useState } from "react";

import { graphql, withPrefix } from "gatsby";
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

const CareerPage = ({data, props}) => {
  const [expand, setExpand] = useState(false);
  

  return (  
    <Layout>
      <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>
      {data.wpgraphql.page.top_banner.banner.backgroundImage && (
        <section className="banner-area pos_relative" id="home">
          <img src={data.wpgraphql.page.top_banner.banner.backgroundImage.sourceUrl} className="object-fit-cover" />
        </section>
      )}
      {/* section-gap */}
      <section  className="container">
        <div className="text-center my-5" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.content}} />
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="text-blue">Name</th>
                  <th className="text-blue">Location</th>
                  <th className="text-blue">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.wpgraphql.page.events && (
                  data.wpgraphql.page.events.events.map((item, i) => (
                    <tr key={item.fieldGroupName + i}>
                      <td>{item.name}</td>
                      <td>{item.location}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
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

        events {
          events {
            date
            fieldGroupName
            location
            name
          }
        }

      }
    }
  }
`