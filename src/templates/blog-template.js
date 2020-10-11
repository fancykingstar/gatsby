import React from "react"
import { graphql } from "gatsby"
import moment from 'moment';

import Layout from "../components/layout"
import SEO from "../components/seo"
// font awesome library icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import post1 from "../images/post-img-01.jpg"
import post2 from "../images/post-img-02.jpg"
import post3 from "../images/post-img-03.jpg"

const BlogPage = ({data}) => {
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
                  <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.content }} />
                </div>
                <div className="col-4">
                  <form className="bg-blue px-4 py-3 rounded growBussiness">
                    <p>Ready to Grow Your Business with EnerBank USA? Start Here.</p>
                    <div className="form-group">
                      <label htmlFor="fName">First Name</label>
                      <input type="text" className="form-control" id="fName" name="fName" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lName">Last Name</label>
                      <input type="text" className="form-control" id="lName" name="lName" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="compName">Company Name</label>
                      <input type="text" className="form-control" id="compName" name="compName" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" className="form-control" id="email" name="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNo">Phone Number</label>
                      <input type="text" className="form-control" id="phoneNo" name="phoneNo" />
                    </div>
                    <button type="submit" className="btn btn-outline-light px-5">Submit</button>
                  </form>
                  <h3 className="mt-5 mb-4">Recent Posts</h3>
                  <div className="row mb-3">
                    <div className="col-4">
                      <img src={post1} alt="post image 1" />
                    </div>
                    <div className="col-8">
                      <h4 className="text-blue">Online Reviews: <br />What You Need to Know</h4>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="row mb-3">
                    <div className="col-4">
                      <img src={post2} alt="post image 2" />
                    </div>
                    <div className="col-8">
                      <h4 className="text-blue">7 Tips for Improving the Customer Experience</h4>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="row mb-3">
                    <div className="col-4">
                      <img src={post3} alt="post image 3" />
                    </div>
                    <div className="col-8">
                      <h4 className="text-blue">EnerBank USA Opens 2nd Call Center in Utah to Facilitate Growth of $1 Billion Bank</h4>
                    </div>
                  </div>
                  <hr className="my-4" />
                </div>              
              </div>
          </div>
      </section>
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
    }
  }
`