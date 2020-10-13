import React from "react";
import Helmet from "react-helmet"

import { graphql, Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

import Pagination from "../components/pagination"

const CareerPage = ({data}) => {
  return (  
    <Layout>
      <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>
      <section className="video-section">
        <h1 className="mt-4 mb-10 text-center mb-5"><span>Blog </span></h1>
        <div className="container">
          {
            data.wpgraphql.posts.edges.sort( (a, b) => b.node.date - a.node.date ).map((item, i) => {
              // if(i < 1000){
              //   i = i + 10
                return(
                  <div key={item.node.id}>
                    <div className="row">
                      <div className="col-3">
                        {item.node.featuredImage ? <img src={item.node.featuredImage.sourceUrl} alt="item.node.featuredImage.altText" /> : ''}
                      </div>
                      <div className="col-9">
                        <h3 className="text-blue mb-2"><Link to={item.node.slug}>{item.node.title}</Link></h3>
                        <div  dangerouslySetInnerHTML={{__html: item.node.excerpt}} />
                        <Link to={item.node.slug} className="btn-link p-0">Read More</Link>
                      </div>                              
                    </div>
                    <hr className="my-5" />
                  </div>
                )
              // }
            })
          }
          
          {/* <Pagination records_per_page={10} objLength={data.wpgraphql.posts.edges.length} currentPage={1} /> */}
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
      }

      posts(first: 1000) {
        edges {
          node {
            id
            title
            slug
            date
            excerpt
            featuredImage{
              altText
              sourceUrl
            }    
          }
        }
      }

    }
  }
`