import React from "react"
import { Link, graphql } from "gatsby"
// import { Helmet } from 'react-helmet'


import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video";

const IndexPage = ({data}) => {
  const node = data.wpgraphql.pageBy;
  return (
    <Layout>
      <SEO title={node.title} description={'America\'s home improvement lender of choice'} />
      {node.video_section.video.videoUrl && (
        <section className="banner-area pos_relative fullscreen" id="home">
            {/* {node.top_banner.banner.backgroundImage && (
              <img src={node.top_banner.banner.backgroundImage.sourceUrl} alt={node.top_banner.banner.backgroundImage.altText} />
            )} */}
            <div className="background-holder">
                <Video videoSrcURL={node.video_section.video.videoUrl} allow="autoplay" videoTitle="EnnerBank improvement lender of choice" videoWidth="100%" videoHeight="500" />
                {node.top_banner.banner.bannerLinks && (
                    <div className="container d-md-flex align-items-end px-0 pb-3 pb-md-4 pb-lg-5 position-absolute banner-btn-container">
                        { node.top_banner.banner.bannerLinks.map((item, i) => {
                            if(i === 0){
                              return (
                                <div className="col-md-4" key={item.links.title + i}>
                                  <div className="header-btn mx-md-3 mb-2 mb-md-0"><a className="mr-auto" href="homeowner/#howtopay" dangerouslySetInnerHTML={{ __html: item.links.title }} /></div>
                                </div>
                              )
                            }else if(i === 2){
                              return (
                                <div className="col-md-4" key={item.links.title + i}>
                                  <div className="header-btn mx-md-3 mb-2 mb-md-0"><Link className="ml-auto" to={'loan-programs/#joinloanprogram'} dangerouslySetInnerHTML={{ __html: item.links.title }} /></div>
                                </div>
                              )
                            }else{
                              return (
                                <div className="col-md-4" key={item.links.title + i}>
                                  <div className="header-btn mx-md-3 mb-2 mb-md-0"><Link className="mx-auto" to={'loan-programs/#createloanprogram'} dangerouslySetInnerHTML={{ __html: item.links.title }} /></div>
                                </div>
                              )
                            }
                        })}
                    </div>
                )}
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
        <style dangerouslySetInnerHTML={{__html:[
          '.home-about-area:after{',
            'background: url('+ node.home_section.aboutArea[0].addImage.sourceUrl +') no-repeat center center/cover',
          '}'
        ].join('\n')}} ></style>
        
      <section className="home-about-area position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-end py-md-4">
            <div className="col-sm-3 col-md-5 col-lg-3 offset-lg-3 py-3 px-5 py-md-0 px-md-3 gift_card text-center">
                <img src={node.home_section.aboutArea[0].addLogo.sourceUrl} alt={node.home_section.aboutArea[0].addLogo.altText} />
            </div>
            <div className="col-sm-9 col-md-7 col-lg-6 px-lg-0 home-about-right">
              <div className="d-flex flex-column flex-lg-row">
                  <div className="single-services col d-flex flex-column justify-content-center p-0 px-md-3 pt-sm-3 pt-lg-0" dangerouslySetInnerHTML={{ __html: node.home_section.aboutArea[0].addText }} />
                  <div className="single-services col align-item-center p-0 px-md-3">
                    {node.home_section.aboutArea[0].anchorBtn.map((item, i) => {
                        return <Link to={item.addLink.url} key={item.fieldGroupName + i} className="btn d-block genric-btn primary my-4 mt-sm-4 my-lg-4 f-bold" dangerouslySetInnerHTML={{ __html: item.addLink.title }} />
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
            { node.home_section.businessOption.businessBlock.map((item, i) => {
              if(item.businessButton.url.indexOf("http://") === 0 || item.businessButton.url.indexOf("https://") === 0){
                return (
                  <div className="col-lg-4 pb-4 p-md-0" key={item.fieldGroupName+i}>
                    <div className="single-offer card-body">
                      <i className="icon_circle">
                        <img className="img-fluid" src={item.businessIcon.sourceUrl} alt={item.businessIcon.altText} />
                      </i>
                      <div className="py-4" dangerouslySetInnerHTML={{ __html: item.businessContent }}></div>
                      <a href={item.businessButton.url} className="btn btn-primary f-bold">{item.businessButton.title}</a>
                    </div>
                  </div>
                )
              }else{
                return (
                  <div className="col-lg-4 pb-4 p-md-0" key={item.fieldGroupName+i}>
                    <div className="single-offer card-body">
                      <i className="icon_circle">
                        <img className="img-fluid" src={item.businessIcon.sourceUrl} alt={item.businessIcon.altText} />
                      </i>
                      <div className="py-4" dangerouslySetInnerHTML={{ __html: item.businessContent }}></div>
                      <Link to={item.businessButton.url} className="btn btn-primary f-bold">{item.businessButton.title}</Link>
                    </div>
                  </div>
                )
              }
            }
            )}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html:[
        '.home-about-area2:after{',
          'background: url('+ node.home_section.aboutArea[1].addImage.sourceUrl +') no-repeat top center/cover',
        '}'
      ].join('\n')}} ></style>

      <section className="home-about-area2 py-md-5 position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-end py-4 py-md-0">
            <div className="col-sm-9 col-md-8 col-lg-6 px-lg-0 home-about-right">
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
              sourceUrl
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