import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from 'react-bootstrap'
import { graphql, Link } from "gatsby"
import moment from 'moment';

import Layout from "../components/layout"
import SEO from "../components/seo"
// font awesome library icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const BlogPage = ({data}) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(false);
  const { register, handleSubmit, errors } = useForm();
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
      <SEO title={data.wpgraphql.post.title} description={data.wpgraphql.post.excerpt}/>
      <section className="section-gap blogpost">
          <div className="container">
              {/* <h1 dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.title }} /> */}
              <div className="row mb-5">
                <div className="col-12 col-md-6 d-flex align-items-center">
                  <h1>EnerBank Blog</h1>
                </div>
                <div className="col-12 col-md-6">
                  <form className="row formtop">
                    <div className="col-12 col-md-6">
                      <label htmlFor="serchBlog">Search Blog</label>                      
                      <div className="input-group">
                        <input type="text" name="serchBlog" id="serchBlog" className="form-control border-right-0" placeholder="Search Blog" />
                        <div className="input-group-append">
                          <button className="btn border border-left-0">
                            <FontAwesomeIcon icon={ faSearch } />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="subscribeEmail">Subscribe to Email Updates</label>                      
                      <div className="input-group">
                        <input type="text" name="subscribeEmail" id="subscribeEmail" className="form-control border-right-0" placeholder="Email Address" />
                        <div className="input-group-append">
                          <span className="input-group-text bg-blue border-0" id="basic-addon2">Go</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <h3 className="text-blue" dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.title }} />
                  <h4 className="f-bold mb-3 my-1">Posted {moment(data.wpgraphql.post.date).format("MMMM D, Y")} by EnerBank USA</h4>
                  {data.wpgraphql.post.featuredImage && (
                      <img src={data.wpgraphql.post.featuredImage.mediaItemUrl} alt={data.wpgraphql.post.featuredImage.altText} className="img-fluid w-100 mb-4" />
                  )}
                  <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.content }} />
                </div>
                <div className="col-4">
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
                              <span role="alert" className="small invalid-feedback">Last Name is required</span>
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
                  <h3 className="mt-5 mb-4">Recent Posts</h3>
                  {
                    data.wpgraphql.posts.edges.sort( (a, b) => b.node.date - a.node.date ).map((item, i) => 
                      {
                        if(i < 3){
                          return(
                            <div key={item.node.id}>
                              <div className="row mb-3">
                                <div className="col-4">
                                  {item.node.featuredImage ? <img src={item.node.featuredImage.sourceUrl} alt="item.node.featuredImage.altText" /> : ''}
                                </div>
                                <div className="col-8">
                                  <h4 className="text-blue"><Link to={item.node.slug}>{item.node.title}</Link></h4>
                                </div>                              
                              </div>
                              <hr className="my-4" />
                            </div>
                          )
                        }
                      })
                  }
                </div>              
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

export default BlogPage

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      post(id: $databaseId, idType: DATABASE_ID) {
        title
        date
        content(format: RENDERED)
        excerpt(format: RENDERED)
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
            featuredImage {
              altText
              sourceUrl
            }
          }
        }
      }

    }
  }
`