import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from 'react-bootstrap'
import Helmet from "react-helmet"
import moment from 'moment';

import { graphql, Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
// font awesome library icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Pagination from "../components/pagination"

const CareerPage = ({data}) => {

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const { register: register2, handleSubmit: handleSubscribe, errors: errors2 } = useForm();
  const handleClose = () => setShow(false);
  const onSubmit = (data, e) => {
      var xhr = new XMLHttpRequest();
      var url = 'https://api.hsforms.com/submissions/v3/integration/submit/381510/e5acddb0-93f6-48b2-89d9-bd9714b2df24'
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

  const searchBlog = (e) => {
    // var searchText = e.target.value;
  }

  const onSubmitEmail = (data, e) => {
    var xhr = new XMLHttpRequest();
      var url = 'https://api.hsforms.com/submissions/v3/integration/submit/381510/a14474d3-8b5a-4392-9713-c806454971a6'
      var sendData =  {
          "fields": [
              {
                  'name': 'email',
                  'value': data.email,
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
        <SEO title={'Blog'} description={'America\'s home improvement lender of choice'} />
        <section className="section-gap blogpost">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 col-md-6 d-flex align-items-center">
                <h1>EnerBank Blog</h1>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-6 d-none">
                    <label htmlFor="serchBlog">Search Blog</label>                      
                    <div className="input-group">
                        <input type="text" name="serchBlog" id="serchBlog" className="form-control border-right-0" placeholder="Search Blog"  onChange={searchBlog} />
                        <div className="input-group-append">
                          <button className="btn border border-left-0">
                            <FontAwesomeIcon icon={ faSearch } />
                          </button>
                        </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 ml-auto">
                    <label htmlFor="subscribeEmail">Subscribe to Email Updates</label>
                    <form onSubmit={handleSubscribe(onSubmitEmail)}>
                      <div className="input-group">
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className={errors2.email && errors2.email.type === "required" ? 'form-control border-right-0 is-invalid' : 'form-control border-right-0'}
                            aria-invalid={errors2.email ? "true" : "false"}
                            ref={register2({ required: true })}
                            placeholder="Email Address"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary text-white border-0">Go</button>
                        </div>
                        {errors2.email && errors2.email.type === "required" && (
                            <span role="alert" className="small invalid-feedback">Email is required</span>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                {
                  data.wpgraphql.posts.edges.map((item, i) => {
                    if(i === 0){
                      return(
                        <div key={item.node.id}>
                          {item.node.featuredImage ? <a href={item.node.slug}><img src={item.node.featuredImage.sourceUrl} alt="item.node.featuredImage.altText" className="w-100 mb-4" /></a> : ''}
                          <a href={item.node.slug}><h3 className="text-blue mb-2" dangerouslySetInnerHTML={{__html: item.node.title}} /></a>
                          <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
                          <a href={item.node.slug} className="btn-link p-0">Read More</a>
                        </div>
                      )
                    }
                  })
                }
              </div>
              <div className="col-md-4">
                <form className="bg-blue px-4 py-3 rounded growBussiness" onSubmit={handleSubmit(onSubmit)}>
                  <p>Ready to Grow Your Business with EnerBank USA? Start Here.</p>
                  <div className="form-group">
                      <label className="font-weight-bold small" htmlFor="firstName">First Name <span className="text-danger">*</span></label>
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
                  <div className="form-group">
                      <label className="font-weight-bold small" htmlFor="lastName">Last Name <span className="text-danger">*</span></label>
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
                  <div className="form-group">
                      <label className="font-weight-bold small" htmlFor="company">Company Name <span className="text-danger">*</span></label>
                      <input
                          name="company"
                          type="text"
                          id="company"
                          className={errors.company && errors.company.type === "required" ? 'form-control is-invalid' : 'form-control'}
                          aria-invalid={errors.company ? "true" : "false"}
                          ref={register({ required: true })}
                      />
                      {errors.company && errors.company.type === "required" && (
                          <span role="alert" className="small invalid-feedback">Company Name is required</span>
                      )}
                  </div>
                  <div className="form-group">
                      <label className="font-weight-bold small" htmlFor="email">Email <span className="text-danger">*</span></label>
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
                  <div className="form-group">
                      <label className="font-weight-bold small" htmlFor="phone">Phone <span className="text-danger">*</span></label>
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
                  <button type="submit" className="btn btn-outline-light px-5">Submit</button>
                </form>
              </div>
            </div>
            <hr className="mt-4 mb-5" />
            <div className="row">
                {
                  data.wpgraphql.posts.edges.sort( (a, b) => b.node.date - a.node.date ).map((item, i) => {
                    if(i !== 0){
                      return(
                          <div className="col-md-6 col-lg-4 mb-5 blog-post" key={item.node.id} >
                              {item.node.featuredImage ? <a href={item.node.slug} className="btn-link p-0"><img src={item.node.featuredImage.sourceUrl} alt="item.node.featuredImage.altText" /></a> : ''}
                              <a href={item.node.slug}><h3 className="text-blue mt-4" dangerouslySetInnerHTML={{__html: item.node.title}} /></a>
                              <strong className="mb-2">{moment(item.node.date).format("MMMM D, Y")}</strong>
                              <div  dangerouslySetInnerHTML={{__html: item.node.excerpt}} className="mb-auto" />
                              <a href={item.node.slug} className="btn-link p-0">Read More</a>
                          </div>
                      )
                    }
                  })
                }          
              {/* <Pagination records_per_page={10} objLength={data.wpgraphql.posts.edges.length} currentPage={1} /> */}
            </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
          <Modal.Body className="p-4 mt-5 text-center" dangerouslySetInnerHTML={{__html: message}} />
          <Modal.Footer className="border-0">
              <Button variant="primary mb-3 mx-auto" onClick={handleClose}>Ok</Button>
          </Modal.Footer>
      </Modal>
    </Layout>
  )
 }
export default CareerPage

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
      }

      posts(first: 1000) {
        edges {
          node {
            id
            title
            slug
            date
            excerpt
            featuredImage{
              altText
              sourceUrl
            }    
          }
        }
      }

    }
  }
`