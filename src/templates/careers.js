import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CareersPage = ({data}) => {
  return (  
    <Layout>
      <SEO title={data.wpgraphql.category.name} description={data.wpgraphql.category.name}/>
      <section className="service-area section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 header-text mb-4">jkhjh
            </div>
            <div className="col-md-12 header-text">
              <h2 className="mb-20 text-center"><span>Available Positions</span></h2>
            </div>
            {/* Jobs List */}
            <ul className="jobs_list">              
              {data.wpgraphql.category.careers_post.edges.map(({node}, i) => (
                <li key={node.careers.availablePositions.fieldGroupName + i}>
                    <h3 dangerouslySetInnerHTML={{ __html: node.careers.availablePositions.positionTitle }} />
                    <div className="job_location" dangerouslySetInnerHTML={{ __html: node.careers.availablePositions.location }} />
                    <p dangerouslySetInnerHTML={{ __html: node.careers.availablePositions.overview}} />
                    <Link to={`/${node.slug}`} className="btn btn-primary f-bold equal-wd mb-4">View Job Details &amp; Apply</Link>
                </li>
              ))}
            </ul>
            {/* Pagination Nav start here */}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CareersPage

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      category(id: $databaseId, idType: DATABASE_ID) {
        id
        name
        careers_post {
          edges {
            node {
              id
              title
              careers {
                availablePositions {
                  fieldGroupName
                  location
                  overview
                  positionTitle
                }
              }
            }
          }
        }

      }
    }
  }
`