import React from "react";

import { Link } from "gatsby";
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
                <div className="row justify-content-center mb-3">
                    <div className="text-center" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.referralform.contractorsInfoForm.formHeading}} />
                    <div className="container">
                        {data.wpgraphql.page.referralform.contractorsInfoForm.formField.map((item, i) => {
                            return(
                                (i === 0 )
                                    ?   
                                        <div className="form-group row" key={item.fieldGroupName + i}>
                                            <div className="col-12">
                                                <label htmlFor={item.fieldName} dangerouslySetInnerHTML={{__html: item.fieldTitle}} />
                                                <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                                </div>
                                        </div>
                                    :   
                                        (i%2 === 0) 
                                            ?   <div className="form-group row" key={item.fieldGroupName + i} />
                                            :   "",
                                    
                                        <div className="col-6">
                                            <label htmlFor={item.fieldName} dangerouslySetInnerHTML={{__html: item.fieldTitle}} />
                                            <input type={item.fieldType} name={item.fieldName} id={item.fieldName} className="form-control" />
                                        </div>
                                    
                                )
                            })}
                    </div>
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
                }
            }
        }
    }
`