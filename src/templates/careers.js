import React, {useRef} from "react";
import Helmet from "react-helmet"

import { graphql, withPrefix } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video";

const CareerPage = ({data, props}) => {
  const handstick = useRef(null)

  return (  
    <Layout>
      <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>
      <h1 className="text-center mt-md-4 pt-5 pb-3"><span>Why Work at EnerBank? </span></h1>
      <section className="video-section">
        <div className="container">
            <div className="embed-container" ref={handstick}>
                <Video videoSrcURL="https://player.vimeo.com/video/371895200" videoTitle="EnnerBankUSA. America's home improvement lender of choice" videoWidth="100%" videoHeight="500" />
            </div>
        </div>
      </section>
    {/* section-gap */}
      <section  className="container">
          <div className="row">
            <div className="col-md-12 career-service" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.content}} />
            <div className="col-md-12 header-text pt-4" id="availableposition">
              <h2 className="mb-4 text-center"><span>Available Positions</span></h2>
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

      
    }
  }
`

// careerplural {
//   edges {
//     node {
//       careerPost {
//         edges {
//           node {
//             id
//             title
//             careers {
//               availablePositions {
//                 fieldGroupName
//                 location
//                 positionTitle
//                 viewJobDetail {
//                   target
//                   title
//                   url
//                 }
//               }
//             }
//             excerpt
//             slug
//           }
//         }
//       }
//     }
//   }
// }