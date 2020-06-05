import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const node = data.wpgraphql.pageBy;
  return (
    <Layout>    
      <SEO title="Home" description="" />
      <div key={node.id}>
          <section className="banner-area" id="home" style={{ backgroundImage: "url(" + node.top_banner.banner.backgroundImage.sourceUrl + ")" }}>
            <div className="container">
              <div className="row fullscreen d-flex align-items-end pb-5">
                { node.top_banner.banner.bannerLinks.map((item, i) => 
                  (
                    <div className="col-md-4" key={item.links.title + i}>
                      <div className="header-btn mr-3 ml-3"><Link to={item.links.url} dangerouslySetInnerHTML={{ __html: item.links.title }} /></div>
                    </div>
                  ) 
                )}
              </div>
            </div>
          </section>

          <section className="service-area section-gap">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 header-text" dangerouslySetInnerHTML={{ __html: node.content }} />
              </div>
            </div>
          </section>

          <section className="home-about-area position-relative">
            <div className="container">
              <div className="row align-items-center justify-content-end">
                <div className="col-lg-3 gift_card text-center">
                    <img src={node.home_section.aboutArea[0].addLogo.sourceUrl} alt="logo" width="150" />
                </div>
                <div className="col-lg-6 no-padding home-about-right">
                  <div className="row">
                      <div className="single-services col" dangerouslySetInnerHTML={{ __html: node.home_section.aboutArea[0].addText }} />
                      <div className="single-services col align-item-center">
                        <Link to="#" className="btn d-block genric-btn primary my-4 f-bold" dangerouslySetInnerHTML={{ __html: node.home_section.aboutArea[0].anchorBtn[0].addLink.title }} />
                        <Link to="#" className="btn d-block genric-btn primary my-4 mt-20 f-bold" dangerouslySetInnerHTML={{ __html: node.home_section.aboutArea[0].anchorBtn[1].addLink.title }} />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-gap">
            <div className="container">
              <div className="row">
                <div className="col-md-12" dangerouslySetInnerHTML={{ __html: node.home_section.businessOption.businessBrif }} ></div>
              </div>              

              <div className="row pt-5 pb-3">
                { node.home_section.businessOption.businessBlock.map((item, i) => 
                  (
                    <div className="col-lg-4" key={item.fieldGroupName+i}>
                      <div className="single-offer card-body">
                        <i className="icon_circil">
                          <img className="img-fluid" src={item.businessIcon.sourceUrl} alt="News" />
                        </i>
                        <div dangerouslySetInnerHTML={{ __html: item.businessContent }}></div>
                        <Link to={item.businessButton.url} className="btn btn-primary f-bold">{item.businessButton.title}</Link>
                      </div>
                    </div>
                  ) 
                )}
              </div>
            </div>
          </section>

          <section className="home-about-area2 py-4 position-relative">
            <div className="container">
              <div className="row align-items-center justify-content-end">
                <div className="col-lg-6 no-padding home-about-right">
                  <div className="row">                
                    <div className="single-services col pt-4 pb-2">
                      <Link to={node.home_section.aboutArea[1].anchorBtn[0].addLink.url} className="btn genric-btn primary f-bold mb-4">{node.home_section.aboutArea[1].anchorBtn[0].addLink.title}</Link>
                      <p dangerouslySetInnerHTML={{ __html: node.home_section.aboutArea[1].addText }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query GET_POSTS {
    wpgraphql {        
      pageBy(uri: "home") {
        content(format: RENDERED)
        title(format: RENDERED)
        date

        home_section {
          aboutArea {
            addText
            fieldGroupName
            addImage {
              id
              srcSet
            }
            anchorBtn {
              addLink {
                url
                title
                target
              }
            }
            addLogo {
              sourceUrl
            }
          }
          businessOption {
            businessBrif
            businessBlock {
              fieldGroupName
              businessButton {
                target
                title
                url
              }
              businessIcon {
                sourceUrl
              }
              businessContent
            }
          }
        }
        top_banner {
          banner {
            backgroundImage {
              sourceUrl
            }
            bannerLinks {
              links {
                title
                url
              }
            }
          }
        }
              
      }
    }
  }
`