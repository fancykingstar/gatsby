import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from 'react-bootstrap'
import { graphql, navigate } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeOwnerPage = ({data}) => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const handleClose = () => setShow(false);
    const onSubmit = (data, e) => {
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/381510/69cd8428-4405-4845-9d67-e68750c4188e'
        var sendData =  {
            "fields": [
                {
                    'name': 'firstname',
                    'value': data.firstname
                },
                {
                    'name'   : 'lastname',
                    'value': data.lastname,
                },
                {
                    'name': 'company',
                    'value': data.company,
                },
                {
                    'name': 'email',
                    'value': data.email,
                },
                {
                    'name': 'phone',
                    'value': data.phone,
                },
                {
                    'name': 'contractor_id',
                    'value': data.contractor_id,
                },
                
                {
                    'name': 'my_company_name',
                    'value': data.my_company_name
                },
                {
                    'name'   : 'referrer_last_name',
                    'value': data.referrer_last_name,
                },
                {
                    'name': 'referrer_first_name',
                    'value': data.referrer_first_name,
                },
                {
                    'name': 'referrer_last_name',
                    'value': data.referrer_last_name,
                },
                {
                    'name': 'referrer_phone',
                    'value': data.referrer_phone,
                },
                {
                    'name': 'referrer_email',
                    'value': data.referrer_email,
                },
                {
                    'name': 'address_3',
                    'value': data.address_3,
                },
                {
                    'name': 'message',
                    'value': data.message,
                },
            ],
        }
        var finel_data = JSON.stringify(sendData);
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST');
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                // alert(xhr.responseText.split('"', 4)[3]);
                // setMessage(xhr.responseText.split('"', 4)[3])
                // setShow(true);
                // e.target.reset();
                navigate('refferal-thank-you');
            }else if(xhr.readyState === 4 && xhr.status === 400){
                // console.log(JSON.parse(xhr.responseText).errors[0].message)
                setMessage(JSON.parse(xhr.responseText).errors[0].message);
                setShow(true);
            }else if(xhr.readyState === 4 && xhr.status === 403){
                setMessage(xhr.responseText);
                setShow(true);
            }else if(xhr.readyState === 4 && xhr.status === 404){
                setMessage(xhr.responseText);
                setShow(true);
            }
        }
        xhr.send(finel_data);
    }
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
                    <form className="contractor-form d-flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
                        {data.wpgraphql.page.referralform.contractorsInfoForm.formField.map((item, i) => {
                            console.log(item.fieldName, errors[item.fieldName])
                            return(
                                <div className="form-group col-12" key={item.fieldGroupName + i}>
                                    <label htmlFor={item.fieldName}>{item.fieldTitle} <span className="text-danger">*</span></label>
                                    <input
                                        name={item.fieldName}
                                        type={item.fieldType}
                                        id={item.fieldName}
                                        className={errors[item.fieldName] && errors[item.fieldName].type === "required" ? 'form-control is-invalid' : 'form-control'}
                                        aria-invalid={errors[item.fieldName] ? "true" : "false"}
                                        ref={register({ required: true })}
                                    />
                                    {errors[item.fieldName] && errors[item.fieldName].type === "required" && (
                                        <span role="alert" className="small invalid-feedback">{item.fieldTitle} is required</span>
                                    )}
                                </div>
                                )
                            })}
                            <h3 className="h3 text-center text-blue" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.referralform.userInfoForm.topHeading}} />
                            {data.wpgraphql.page.referralform.userInfoForm.formField.map((item, i) => {
                                if(i === 2 || i === 3 || i === 4 || i === 5 ){
                                    return  <div className="form-group col-12 col-sm-6" key={item.fieldGroupName + i}>
                                                <label htmlFor={item.fieldName}>{item.fieldTitle} <span className="text-danger">*</span></label>
                                                <input
                                                    name={item.fieldName}
                                                    type={item.fieldType}
                                                    id={item.fieldName}
                                                    className={errors[item.fieldName] && errors[item.fieldName].type === "required" ? 'form-control is-invalid' : 'form-control'}
                                                    aria-invalid={errors[item.fieldName] ? "true" : "false"}
                                                    ref={register({ required: true })}
                                                />
                                                {errors[item.fieldName] && errors[item.fieldName].type === "required" && (
                                                    <span role="alert" className="small invalid-feedback">{item.fieldTitle} is required</span>
                                                )}
                                            </div>
                                }else {
                                    if(item.fieldType === 'submit'){
                                        return  <div className="form-group col-12" key={item.fieldGroupName + i}>                                                                
                                                    <input
                                                        name={item.fieldName}
                                                        type={item.fieldType}
                                                        id={item.fieldName}
                                                        className={'btn btn-lg btn-primary px-5 d-block my-4'}
                                                        aria-invalid={errors[item.fieldName] ? "true" : "false"}
                                                        ref={register({ required: true })}
                                                        value={item.fieldTitle}
                                                    />
                                                    {errors[item.fieldName] && errors[item.fieldName].type === "required" && (
                                                        <span role="alert" className="small invalid-feedback">{item.fieldTitle} is required</span>
                                                    )}
                                                </div>
                                    }else if(item.fieldType === 'textarea' && item.fieldName === 'message'){
                                        return  <div className="form-group col-12 col-sm-12" key={item.fieldGroupName + i}>
                                                    <label htmlFor={item.fieldName}>{item.fieldTitle}</label>
                                                    <textarea
                                                        name={item.fieldName}
                                                        id={item.fieldName}
                                                        className={'form-control'}
                                                        // aria-invalid={errors[item.fieldName] ? "true" : "false"}
                                                        ref={register}
                                                    />
                                                    {errors[item.fieldName] && errors[item.fieldName].type === "required" && (
                                                        <span role="alert" className="small invalid-feedback">{item.fieldTitle} is required</span>
                                                    )}
                                                </div>
                                    }else{
                                        return  <div className="form-group col-12" key={item.fieldGroupName + i}>
                                                    <label htmlFor={item.fieldName}>{item.fieldTitle} <span className="text-danger">*</span></label>
                                                    <input
                                                        name={item.fieldName}
                                                        type={item.fieldType}
                                                        id={item.fieldName}
                                                        className={errors[item.fieldName] && errors[item.fieldName].type === "required" ? 'form-control is-invalid' : 'form-control'}
                                                        aria-invalid={errors[item.fieldName] ? "true" : "false"}
                                                        ref={register({ required: true })}
                                                    />
                                                    {errors[item.fieldName] && errors[item.fieldName].type === "required" && (
                                                        <span role="alert" className="small invalid-feedback">{item.fieldTitle} is required</span>
                                                    )}
                                                </div>
                                    }                                    
                                }
                            })}
                            <div className="footer col-12" dangerouslySetInnerHTML={{__html: data.wpgraphql.page.referralform.userInfoForm.footer}} />
                    </form>
                </div>
            </div>
        </section>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body className="p-4 mt-5 text-center" dangerouslySetInnerHTML={{__html: message}} />
            <Modal.Footer className="border-0">
                <Button variant="primary mb-3 mx-auto" onClick={handleClose}>OK</Button>
            </Modal.Footer>
        </Modal>
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