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
                        <div className="col-md-12 header-text mb-4" dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content}} />
                    )}
                </div>
                <div className="row justify-content-center mb-3">
                    <h2 className="h1 my-4" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.homewonerreferral.howItWorks.sectionTitle}} />
                    <img src={data.wpgraphql.page.homewonerreferral.howItWorks.sectionImage.sourceUrl} className="d-block mx-auto" />
                </div>
                <div className="row justify-content-center mb-3">
                    <h3 className="h1 mt-5 mb-4" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.homewonerreferral.getProjectStarted.sectionTitle}} />
                    <div dangerouslySetInnerHTML={{__html: data.wpgraphql.page.homewonerreferral.getProjectStarted.sectionContent}} />
                    <button className="btn btn-lg btn-primary f-bold mt-5">Refer a Contractor</button>
                </div>
                <div className="row justify-content-center mb-3">
                    <h3 className="h1 mt-5 mb-4 text-center" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.homewonerreferral.unsecuredHomeLoans.sectionTitle}} />
                    <div dangerouslySetInnerHTML={{__html: data.wpgraphql.page.homewonerreferral.unsecuredHomeLoans.sectionContent}} className="unsecuredhomeloan" />
                </div>
                <hr className="my-5" />
                <div className="justify-content-center mb-3">
                    <div className="text-center" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.referralform.contractorsInfoForm.formHeading}} />
                    <form className="homeowner-form d-flex flex-wrap">
                        {data.wpgraphql.page.referralform.contractorsInfoForm.formField.map((item, i) => {
                            return(
                                (i === 0 || i === 5)
                                    ?   
                                        <div className="form-group col-12" key={item.fieldGroupName + i}>
                                            <label htmlFor={item.fieldName} dangerouslySetInnerHTML={{__html: item.fieldTitle}} />
                                            <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                        </div>
                                    :                                       
                                        <div className="form-group col-6 col-sm-6" key={item.fieldGroupName + i}>
                                            <label htmlFor={item.fieldName} dangerouslySetInnerHTML={{__html: item.fieldTitle}} />
                                            <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                        </div>
                                    
                                )
                            })}
                            <h3 className="h3 text-center text-blue col-12" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.referralform.userInfoForm.topHeading}} />
                            {data.wpgraphql.page.referralform.userInfoForm.formField.map((item, i) => {
                                console.log(item.fieldType === 'submit')
                                // return(
                                    if(i === 0 || i === 5 || i === 6 ){
                                        if(item.fieldType === 'submit'){
                                            return  <div className="form-group col-12" key={item.fieldGroupName + i}>
                                                        <input type={item.fieldType} name={item.fieldName} id={item.fieldName} value={item.fieldTitle} className="form-control" />
                                                    </div>
                                        }else{
                                            return  <div className="form-group col-12" key={item.fieldGroupName + i}>
                                                        <label htmlFor={item.fieldName} dangerouslySetInnerHTML={{__html: item.fieldTitle}} />
                                                        <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                                    </div>
                                        }
                                    }else {
                                        return  <div className="form-group col-6 col-sm-6" key={item.fieldGroupName + i}>
                                                    <label htmlFor={item.fieldName} dangerouslySetInnerHTML={{__html: item.fieldTitle}} />
                                                    <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                                </div>
                                    }
                                        
                                    // )
                            })}
                            <div className="footer col-12" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.referralform.userInfoForm.footer}} />
                    </form>
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