import React, {useRef} from "react";
// import lifecycle from 'react-pure-lifecycle';
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video";

const CareerPage = ({data, props}) => {
  const handstick = useRef(null)
  // let player = any;

  // useEffect(() => {
  //   player = new Player(handstick.current, {
  //     id: 371895200,
  //     width: 900
  //   });
    
  //   player.on('play', function() {
  //     console.log('played the video!');
  //   });
  // })
  // console.log(data)

  return (  
    <Layout>
      <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>
      <section className="video-section">
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-md-10 m-auto" ref={handstick}>  {/*  onClick={this.handleClick} */}
                <Video videoSrcURL="https://player.vimeo.com/video/371895200" videoTitle="Official Music Video on YouTube" videoWidth="100%" videoHeight="500" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-area section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 header-text mb-4">
              <h2 className="mb-20 text-center"><span>Why Work at EnerBank?</span></h2>
              <p> Jobs come and go, but a career at EnerBank is just that: a career. We truly value our people — hiring the best and brightest, then continuing to nurture that talent as team members develop their skills and move up through the organization over time. If you love to help people, thrive in a challenging environment, 
      and are ready for the time of your life, consider joining us.</p>
            </div>
            <div className="col-md-12 header-text">
              <h2 className="mb-20 text-center"><span>Available Positions</span></h2>
            </div>
            {/* Jobs List */}
            <ul className="jobs_list">              
              {data.wpgraphql.careerplural.edges[0].node.careerPost.edges.map(( { node }, i ) => {
                  console.log(node)
                  return(
                    <li key={node.careers.availablePositions.fieldGroupName + i}>
                      <h3 dangerouslySetInnerHTML={{ __html: node.careers.availablePositions.positionTitle }} />
                      <div className="job_location" dangerouslySetInnerHTML={{ __html: node.careers.availablePositions.location }} />
                      <p dangerouslySetInnerHTML={{ __html: node.excerpt}} />
                      <Link to={`/${node.slug}`} className="btn btn-primary f-bold equal-wd mb-4">View Job Details &amp; Apply</Link>
                  </li>
                  )
                }
              )}
            </ul>
            {/* Pagination Nav start here */}
          </div>
        </div>
      </section>
    </Layout>
  )
 }
export default CareerPage

// careerPost {
//   edges {
//     node {
//       id
//       title
//       slug
//       careers {
//         availablePositions {
//           fieldGroupName
//           location
//           overview
//           positionTitle
//         }
//       }
//     }
//   }
// }


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

        video_section {
          video {
            videoUrl
            videoBanner {
              sourceUrl
            }
          }
        }

      }      

      careerplural {
        edges {
          node {
            careerPost {
              edges {
                node {
                  id
                  title
                  careers {
                    availablePositions {
                      fieldGroupName
                      location
                      positionTitle
                      viewJobDetail {
                        target
                        title
                        url
                      }
                    }
                  }
                  excerpt
                  slug
                }
              }
            }
          }
        }
      }

    }
  }
`