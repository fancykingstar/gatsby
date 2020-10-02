import React from "react";

// import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeOwnerPage = ({data}) => {
  return (  
    <Layout>
        <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>        

        {/* service-area  */}
        <section className="section-gap" id="whychoosebank">
            <div className="container">
                <div className="row justify-content-center">
                    {data.wpgraphql.page.content && (
                        <div className="col-md-12 header-text mb-4" dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content}} />
                    )}
                </div>
                <div className="mb-3 mx-md-5 px-md-5">
                    <div className="text-center" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.referralform.contractorsInfoForm.formHeading}} />
                    <form className="contractor-form col-12 d-flex flex-wrap">
                        {data.wpgraphql.page.referralform.contractorsInfoForm.formField.map((item, i) => {
                            return(
                                (i === 0 )
                                    ?
                                        <div className="form-group col-12" key={item.fieldGroupName + i}>
                                            <label htmlFor={item.fieldName}>{item.fieldTitle}</label>
                                            <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                        </div>
                                    :
                                        <div className="form-group col-12" key={item.fieldGroupName + i}>
                                            <label htmlFor={item.fieldName}>{item.fieldTitle}</label>
                                            <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                        </div>
                            )
                        })}
                        <h3 className="h3 text-blue text-center w-100" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.referralform.userInfoForm.topHeading}} />
                        {data.wpgraphql.page.referralform.userInfoForm.formField.map((item, i) => {
                            // return(
                                if(i === 0 || i === 1 || i === 6 || i === 7 || i === 8){
                                    if(item.fieldType === 'textarea'){
                                        return  <div className="form-group col-12" key={item.fieldGroupName + i}>
                                                    <label htmlFor={item.fieldName}>{item.fieldTitle}</label>
                                                    <textarea name={item.fieldName} id={item.fieldName} className="form-control" />
                                                </div>
                                    }else if(item.fieldType === 'submit'){
                                        return  <div className="form-group col-12" key={item.fieldGroupName + i}>
                                                    <input type={item.fieldType} name={item.fieldName} id={item.fieldName} value={item.fieldTitle} className="btn btn-lg btn-primary px-5 d-block my-4 mx-auto" />
                                                </div>
                                    }else{
                                        return  <div className="form-group col-12" key={item.fieldGroupName + i}>
                                                    <label htmlFor={item.fieldName}>{item.fieldTitle}</label>
                                                    <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                                </div>
                                    }
                                }else{
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
        </section>
        
  </Layout>
  
)}

export default HomeOwnerPage

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