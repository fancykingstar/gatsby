import React, { useState } from "react";

import { graphql, Link } from "gatsby";
import { useForm } from "react-hook-form";

import Layout from "../components/layout"
import SEO from "../components/seo"

const Feedback = ({data}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

  return (  
    <Layout>
        {/* <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/> */}
        <section className="container my-5 p-4">
            <div className="col-lg-10 mx-auto">
                <h1 className="text-center mb-5">Comments and Questions</h1>
                <p className="mb-0 text-blue font-weight-bold">Question about a loan? Have a comment? We want to hear from you.</p>
                <p className="small text-warning mb-5">*indicates required fields</p>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                            {
                                console.log(errors)
                            }
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
                    <div className="form-group">
                        <label className="font-weight-bold small" htmlFor="lastDigitAcNo">Last 4 Digit of Account Number</label>
                        <input
                            className="form-control"
                            name="Account Number"
                            type="text"
                            id="lastDigitAcNo"
                        />
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-6">
                            <label className="font-weight-bold small" htmlFor="perContact">Perfect Contact</label>
                            <select
                                className="form-control"
                                name="Perfect Contact"
                                id="perContact"
                            >
                                
                            </select>
                        </div>
                    </div>
                    <div className="form-group mb-0">
                        <label className="font-weight-bold small" htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            rows="5"
                            name="Message"
                            id="message"
                        />
                    </div>
                    <div className="form-group small text-muted">Please do not provide confidential information via this form. We'll contact you to discuss the detail of your inquiry.</div>
                    <div className="form-group">
                        <button className="btn btn-primary px-4">Submit</button>
                    </div>
                </form>
            </div>
        </section>
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