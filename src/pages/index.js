import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from 'react-helmet'


import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video";

const IndexPage = ({data}) => {
  const node = data.wpgraphql.pageBy;
  return (
    <Layout>
      <SEO title={node.title} description={'America\'s home improvement lender of choice'} />
      {node.top_banner.banner.backgroundImage && (
        <section className="banner-area pos_relative" id="home">
            <img src={node.top_banner.banner.backgroundImage.sourceUrl} alt={node.top_banner.banner.backgroundImage.altText} />
            <div className="background-holder">
                <Video videoSrcURL={node.video_section.video.videoUrl} allow="autoplay" videoTitle="EnnerBank improvement lender of choice" videoWidth="100%" videoHeight="500" />
                <div className="container d-flex align-items-end p-0 pb-md-5 position-absolute banner-btn-container">
                    { node.top_banner.banner.bannerLinks.map((item, i) => {
                        if(i === 0){
                          return (
                            <div className="col-md-4 py-2 py-md-0" key={item.links.title + i}>
                              <div className="header-btn"><a className="mr-auto" href="homeowner/#howtopay" dangerouslySetInnerHTML={{ __html: item.links.title }} /></div>
                            </div>
                          )
                        }else if(i === 2){
                          return (
                            <div className="col-md-4 py-2 py-md-0" key={item.links.title + i}>
                              <div className="header-btn"><Link className="ml-auto" to={'loan-programs/#joinloanprogram'} dangerouslySetInnerHTML={{ __html: item.links.title }} /></div>
                            </div>
                          )
                        }else{
                          return (
                            <div className="col-md-4 py-2 py-md-0" key={item.links.title + i}>
                              <div className="header-btn"><Link className="mx-auto" to={'loan-programs/#createloanprogram'} dangerouslySetInnerHTML={{ __html: item.links.title }} /></div>
                            </div>
                          )
                        }
                    })}
                </div>
            </div>
        </section>
      )}
      <section className="service-area section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 header-text" dangerouslySetInnerHTML={{ __html: node.content }} />
          </div>
        </div>
      </section>
      <section className="home-about-area position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-end py-4">
            <div className="col-sm-3 px-5 pl-md-0 px-md-3 gift_card text-center">
                <img src={node.home_section.aboutArea[0].addLogo.sourceUrl} alt={node.home_section.aboutArea[0].addLogo.altText} />
            </div>
            <div className="col-sm-9 col-lg-6 px-lg-0 home-about-right">
              <div className="d-flex flex-column flex-sm-row">
                  <div className="single-services col d-flex flex-column justify-content-center" dangerouslySetInnerHTML={{ __html: node.home_section.aboutArea[0].addText }} />
                  <div className="single-services col align-item-center">
                    {node.home_section.aboutArea[0].anchorBtn.map((item, i) => {
                        return <Link to={item.addLink.url} key={item.fieldGroupName + i} className="btn d-block genric-btn primary my-4 f-bold" dangerouslySetInnerHTML={{ __html: item.addLink.title }} />
                    })}
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
                <div className="col-lg-4 pb-4 p-md-0" key={item.fieldGroupName+i}>
                  <div className="single-offer card-body">
                    <i className="icon_circil">
                      <img className="img-fluid" src={item.businessIcon.sourceUrl} alt={item.businessIcon.altText} />
                    </i>
                    <div className="py-4" dangerouslySetInnerHTML={{ __html: item.businessContent }}></div>
                    <Link to={item.businessButton.url} className="btn btn-primary f-bold">{item.businessButton.title}</Link>
                  </div>
                </div>
              ) 
            )}
          </div>
        </div>
      </section>
      <section className="home-about-area2 py-md-5 position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-sm-6 px-lg-0 home-about-right">
              <div className="row">                
                <div className="single-services col px-4 px-lg-5"> 
                  <Link to={node.home_section.aboutArea[1].anchorBtn[0].addLink.url} className="btn genric-btn primary f-bold mb-4">{node.home_section.aboutArea[1].anchorBtn[0].addLink.title}</Link>
                  <p className="m-0" dangerouslySetInnerHTML={{ __html: node.home_section.aboutArea[1].addText }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

        home_section {
          aboutArea {
            addText
            fieldGroupName
            addImage {
              id
              srcSet
              altText
            }
            anchorBtn {
              fieldGroupName
              addLink {
                url
                title
                target
              }
            }
            addLogo {
              sourceUrl
              altText
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
                title
                altText
              }
              businessContent
            }
          }
        }
        top_banner {
          banner {
            backgroundImage {
              sourceUrl
              altText
            }
            bannerLinks {
              links {
                title
                url
              }
            }
          }
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