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
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/381510/fe8cd589-e097-42d5-a9aa-4c65409539f3'
        var sendData =  {
            "fields": [
                {
                    'name': 'firstname',
                    'value': data.firstName
                },
                {
                    'name'   : 'lastname',
                    'value': data.lastName,
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
                    'name': 'last_4_digits_of_loan_account_number',
                    'value': data.accountNumber,
                },
                {
                    'name': 'preferred_contact',
                    'value': data.perfectContact,
                },
                {
                    'name': 'message',
                    'value': data.message,
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
                console.log(JSON.parse(xhr.responseText).errors[0].message)
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
                <h1 className="text-center mb-5">California Residents</h1>
                <p className="mb-0 text-blue font-weight-bold">The form below is made available to allow California residents to exercise their rights in the California Privacy Act of 2018 (THE “CCPA”) as amended.</p>
                <p className="small text-warning mb-5">Note: The right to request your information is reserved for CALIFORNIA RESIDENTS ONLY. You may exercise your DATA Rights by making a request here, or by calling (888) 390-1220</p>
        
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
                            <label className="font-weight-bold small" htmlFor="lastFourOf">Last 4 of SS#<span className="text-danger">*</span></label>
                            <input
                                name="lastFourOf"
                                type="text"
                                id="lastFourOf"
                                className={errors.lastFourOf && errors.lastFourOf.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.lastFourOf ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.lastFourOf && errors.lastFourOf.type === "required" && (
                                <span role="alert" className="small invalid-feedback">First Name is required</span>
                            )}
                        </div>
                        <div className="col-lg-6">
                            <label className="font-weight-bold small" htmlFor="dateOfBirth">Date of birth<span className="text-danger">*</span></label>
                            <input
                                name="dateOfBirth"
                                type="text"
                                id="dateOfBirth"
                                className={errors.dateOfBirth && errors.dateOfBirth.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.dateOfBirth ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.dateOfBirth && errors.dateOfBirth.type === "required" && (
                                <span role="alert" className="small invalid-feedback">Last Name is required</span>
                            )}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-12">
                            <label className="font-weight-bold small" htmlFor="address">Address<span className="text-danger">*</span></label>
                            <input
                                name="address"
                                type="text"
                                id="address"
                                className={errors.address && errors.address.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.address ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.address && errors.address.type === "required" && (
                                <span role="alert" className="small invalid-feedback">First Name is required</span>
                            )}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-4">
                            <label className="font-weight-bold small" htmlFor="city">City<span className="text-danger">*</span></label>
                            <input
                                name="city"
                                type="text"
                                id="city"
                                className={errors.city && errors.city.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.city ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.city && errors.city.type === "required" && (
                                <span role="alert" className="small invalid-feedback">First Name is required</span>
                            )}
                        </div>
                        <div className="col-lg-4">
                            <label className="font-weight-bold small" htmlFor="state">State<span className="text-danger">*</span></label>
                            <input
                                name="state"
                                type="text"
                                id="state"
                                className={errors.state && errors.state.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.state ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.state && errors.state.type === "required" && (
                                <span role="alert" className="small invalid-feedback">Last Name is required</span>
                            )}
                        </div>
                        <div className="col-lg-4">
                            <label className="font-weight-bold small" htmlFor="zipcode">Zipcode<span className="text-danger">*</span></label>
                            <input
                                name="zipcode"
                                type="text"
                                id="zipcode"
                                className={errors.zipcode && errors.zipcode.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.zipcode ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.zipcode && errors.zipcode.type === "required" && (
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
                            <label className="font-weight-bold small" htmlFor="phoneNumber">Phone Number<span className="text-danger">*</span></label>
                            <input
                                name="phoneNumber"
                                type="tel"
                                id="phoneNumber"
                                className={errors.phoneNumber && errors.phoneNumber.type === "required" ? 'form-control is-invalid' : 'form-control'}
                                aria-invalid={errors.phoneNumber ? "true" : "false"}
                                ref={register({ required: true })}
                            />
                            {errors.phoneNumber && errors.phoneNumber.type === "required" && (
                                <span role="alert" className="small invalid-feedback">PhoneNumber is required</span>
                            )}
                            {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (
                                <span role="alert">Max length exceeded</span>
                            )}
                        </div>
                    </div>
                    <div className="form-group small text-muted">
                        <label htmlFor="reportInfo">Request Type Selection</label>
                        <div><input type="checkbox" name="reportInfo" id="reportInfo" /> Personal Information Report</div>
                        <div><input type="checkbox" name="doNotSellInfo" id="doNotSellInfo" /> Opt- Out Right- Do not sell my personal information</div>
                        <div><input type="checkbox" name="deleteInfo" id="deleteInfo" /> Delete My Personal Information</div>
                    </div>
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