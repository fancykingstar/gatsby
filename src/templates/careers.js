import React, {useRef} from "react";
// import lifecycle from 'react-pure-lifecycle';
import Helmet from "react-helmet"

import { graphql, withPrefix, Link } from "gatsby";
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
        <h1 className="mt-4 mb-10 text-center mb-3"><span>Why Work at EnerBank? </span></h1>
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-md-10 m-auto" ref={handstick}>  {/*  onClick={this.handleClick} */}
                <Video videoSrcURL="https://player.vimeo.com/video/371895200" videoTitle="Official Music Video on YouTube" videoWidth="100%" videoHeight="500" />
            </div>
          </div>
        </div>
      </section>
    {/* section-gap */}
      <section  className="container">
          <div className="row">
            <div className="col-md-12 career-service" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.content}} />
            <div className="col-md-12 header-text" id="availableposition">
              <h2 className="mb-20 text-center"><span>Available Positions</span></h2>
            </div>
            <Helmet>
                <script src={withPrefix('script.js')} type="text/javascript" name="hirebridge-script" />
            </Helmet>
            <div id="hrbr-widget">&nbsp;</div>            
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