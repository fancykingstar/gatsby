import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Feedback = () => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const handleClose = () => setShow(false);
    const onSubmit = (data, e) => {
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/381510/97ff0915-f670-4588-ad0b-1ae644a652b1'
        var sendData =  {
            "fields": [
                {
                    'name': 'company',
                    'value': data.companyName
                },
                {
                    'name': 'firstname',
                    'value': data.firstName
                },
                {
                    'name': 'lastname',
                    'value': data.lastName,
                },
                {
                    'name': 'email',
                    'value': data.email,
                },
                {
                    'name': 'phone',
                    'value': data.phone,
                }
            ],
            // 'context': {
            //     'pageUri': 'http://localhost:8000/feedback',
            //     'pageName': 'feedback'
            // },
        }
        var finel_data = JSON.stringify(sendData);
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST');
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                // alert(xhr.responseText.split('"', 4)[3]);
                setMessage(xhr.responseText.split('"', 4)[3])
                setShow(true);
                e.target.reset();
            }else if(xhr.readyState === 4 && xhr.status === 400){
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
        <SEO title={'Feedback'} description={'America\'s home improvement lender of choice'}/>
        <section className="container my-5 p-4">
            <div className="col-lg-10 mx-auto">
                <h1 className="text-center mb-5">Comments and Questions</h1>
                <p className="mb-0 text-blue font-weight-bold">Question about a loan? Have a comment? We want to hear from you.</p>
                <p className="small text-warning mb-5">*indicates required fields</p>
        
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <div className="col-lg-12">
                            <label className="font-weight-bold small" htmlFor="companyName">Company Name<span className="text-danger">*</span></label>
                            <input
                                name="companyName"
                                type="text"
                                id="companyName"
                                className={errors.companyName && errors.companyName.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.companyName ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.companyName && errors.companyName.type === "required" && (
                                <span role="alert" className="small invalid-feedback">First Name is required</span>
                            )}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-6">
                            <label className="font-weight-bold small" htmlFor="firstName">First Name<span className="text-danger">*</span></label>
                            <input
                                name="firstName"
                                type="text"
                                id="firstName"
                                className={errors.firstName && errors.firstName.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.firstName ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.firstName && errors.firstName.type === "required" && (
                                <span role="alert" className="small invalid-feedback">First Name is required</span>
                            )}
                        </div>
                        <div className="col-lg-6">
                            <label className="font-weight-bold small" htmlFor="lastName">Last Name<span className="text-danger">*</span></label>
                            <input
                                name="lastName"
                                type="text"
                                id="lastName"
                                className={errors.lastName && errors.lastName.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.lastName ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.lastName && errors.lastName.type === "required" && (
                                <span role="alert" className="small invalid-feedback">Last Name is required</span>
                            )}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-6">
                            <label className="font-weight-bold small" htmlFor="email">Email<span className="text-danger">*</span></label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                className={errors.email && errors.email.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.email ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.email && errors.email.type === "required" && (
                                <span role="alert" className="small invalid-feedback">Email is required</span>
                            )}
                        </div>
                        <div className="col-lg-6">
                            <label className="font-weight-bold small" htmlFor="phone">Phone<span className="text-danger">*</span></label>
                            <input
                                name="phone"
                                type="tel"
                                id="phone"
                                className={errors.phone && errors.phone.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.phone ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.phone && errors.phone.type === "required" && (
                                <span role="alert" className="small invalid-feedback">Phone is required</span>
                            )}
                            {errors.phone && errors.phone.type === "maxLength" && (
                                <span role="alert">Max length exceeded</span>
                            )}
                        </div>
                    </div>
                    <div className="form-group small text-muted">Please do not provide confidential information via this form. We'll contact you to discuss the detail of your inquiry.</div>
                    <div className="form-group">
                        <button className="btn btn-primary px-4">Submit</button>
                    </div>
                </form>
            </div>
        </section>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body className="p-4 mt-5 text-center" dangerouslySetInnerHTML={{__html: message}} />
            <Modal.Footer className="border-0">
                <Button variant="primary mb-3 mx-auto" onClick={handleClose}>Ok</Button>
            </Modal.Footer>
        </Modal>
    </Layout>
  
)}

export default Feedback

// export const query = graphql`
//     query($databaseId: ID!) {
//         wpgraphql {
//             page(id: $databaseId, idType: DATABASE_ID) {
//                 title
//                 date
//                 content(format: RENDERED)
//                 featuredImage {
//                     altText
//                     title(format: RENDERED)
//                     mediaItemUrl
//                     slug
//                 }
//             }
//         }
//     }
// `