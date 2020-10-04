import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeOwnerReferral = ({data}) => {
  return (  
    <Layout>
        <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>

        <section className="section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    {data.wpgraphql.page.content && (
                        <div className="col-md-12 header-text mb-4 px-sm-5" dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content}} />
                    )}
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="mb-3 text-center">
                                <h2 className="my-4" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.homewonerreferral.howItWorks.sectionTitle}} />
                                <img src={data.wpgraphql.page.homewonerreferral.howItWorks.sectionImage.sourceUrl} className="d-block mx-auto" alt={data.wpgraphql.page.homewonerreferral.howItWorks.sectionImage.altText} />
                            
                        </div>
                        <div className="mb-3 text-center">
                            <h3 className="h2 mt-5 mb-4" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.homewonerreferral.getProjectStarted.sectionTitle}} />
                            <div dangerouslySetInnerHTML={{__html: data.wpgraphql.page.homewonerreferral.getProjectStarted.sectionContent}} />
                            <a href="/contractor-referral" className="btn btn-lg btn-primary mt-5">Refer a Contractor</a>
                        </div>
                        <div className="mb-3 pt-3">
                            <h3 className="h2 mt-5 mb-4 text-center" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.homewonerreferral.unsecuredHomeLoans.sectionTitle}} />
                            <div dangerouslySetInnerHTML={{__html: data.wpgraphql.page.homewonerreferral.unsecuredHomeLoans.sectionContent}} className="unsecuredhomeloan" />
                        </div>
                        <hr className="my-5" />
                        <div className="mb-3 mx-md-5 px-md-5">
                            <div className="text-center" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.referralform.contractorsInfoForm.formHeading}} />
                            <form className="homeowner-form d-flex flex-wrap">
                                {data.wpgraphql.page.referralform.contractorsInfoForm.formField.map((item, i) => {
                                    return(
                                        (i === 0 || i === 5)
                                            ?   
                                                <div className="form-group col-12" key={item.fieldGroupName + i}>
                                                    <label htmlFor={item.fieldName}>{item.fieldTitle}</label>
                                                    <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                                </div>
                                            :                                       
                                                <div className="form-group col-12 col-sm-6" key={item.fieldGroupName + i}>
                                                    <label htmlFor={item.fieldName}>{item.fieldTitle}</label>
                                                    <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                                </div>
                                            
                                        )
                                    })}
                                    <h3 className="h3 text-center text-blue" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.referralform.userInfoForm.topHeading}} />
                                    {data.wpgraphql.page.referralform.userInfoForm.formField.map((item, i) => {
                                        // return(
                                            if(i === 0 || i === 5 || i === 6 ){
                                                if(item.fieldType === 'submit'){
                                                    return  <div className="form-group col-12" key={item.fieldGroupName + i}>
                                                                <input type={item.fieldType} name={item.fieldName} id={item.fieldName} value={item.fieldTitle} className="btn btn-lg btn-primary px-5 d-block my-4 mx-auto" />
                                                            </div>
                                                }else{
                                                    return  <div className="form-group col-12" key={item.fieldGroupName + i}>
                                                                <label htmlFor={item.fieldName}>{item.fieldTitle}</label>
                                                                <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                                            </div>
                                                }
                                            }else {
                                                return  <div className="form-group col-12 col-sm-6" key={item.fieldGroupName + i}>
                                                            <label htmlFor={item.fieldName}>{item.fieldTitle}</label>
                                                            <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                                        </div>
                                            }
                                                
                                            // )
                                    })}
                                    <div className="footer col-12" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.referralform.userInfoForm.footer}} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </Layout>
  
)}

export default HomeOwnerReferral

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
                homewonerreferral {
                  fieldGroupName
                  getProjectStarted {
                    fieldGroupName
                    sectionContent
                    sectionTitle
                  }
                  howItWorks {
                    fieldGroupName
                    sectionTitle
                    sectionImage {
                        altText
                        sourceUrl
                    }
                  }
                  unsecuredHomeLoans {
                    fieldGroupName
                    sectionContent
                    sectionTitle
                  }
                }
                referralform {
                  fieldGroupName
                  contractorsInfoForm {
                    fieldGroupName
                    formHeading
                    formField {
                      fieldGroupName
                      fieldName
                      fieldTitle
                      fieldType
                    }
                  }
                  userInfoForm {
                    fieldGroupName
                    topHeading
                    formField {
                      fieldGroupName
                      fieldName
                      fieldTitle
                      fieldType
                    }
                    footer
                  }
                }
            }
        }
    }
`