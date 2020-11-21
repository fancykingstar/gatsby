import React from "react";
import Helmet from "react-helmet"

import { graphql, Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
// font awesome library icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Pagination from "../components/pagination"

const CareerPage = ({data}) => {
  const changePage = (page) => {
    console.log(page)
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
                {/* <h3 className="text-blue" dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.title }} /> */}
                {/* <h4 className="f-bold mb-3 my-1">Posted {moment(data.wpgraphql.post.date).format("MMMM D, Y")} by EnerBank USA</h4>
                <img src={data.wpgraphql.post.featuredImage.sourceUrl} alt={data.wpgraphql.post.featuredImage.altText} className="img-fluid" />
                <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.content }} /> */}
                {
                  data.wpgraphql.posts.edges.map((item, i) => {
                    if(i === 0){
                      console.log(item)
                      return(
                        <div key={item.node.id}>
                          {item.node.featuredImage ? <img src={item.node.featuredImage.sourceUrl} alt="item.node.featuredImage.altText" className="w-100 mb-4" /> : ''}
                          <h3 className="text-blue mb-2"><Link to={item.node.slug}>{item.node.title}</Link></h3>
                          <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
                        </div>
                      )
                    }
                  })
                }
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
              </div> 
            </div>
            <hr className="mt-4 mb-5" />
            <div className="row">
                {
                  data.wpgraphql.posts.edges.sort( (a, b) => b.node.date - a.node.date ).map((item, i) => {
                    // if(i < 10){
                      return(
                          <div className="col-md-6 col-lg-4 mb-5 blog-post" key={item.node.id} >
                            {item.node.featuredImage ? <img src={item.node.featuredImage.sourceUrl} alt="item.node.featuredImage.altText" /> : ''}
                            <h3 className="text-blue mt-4"><Link to={item.node.slug}>{item.node.title}</Link></h3>
                            <strong className="mb-2">
                                {(()=>{
                                  const d = new Date(item.node.date);
                                  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                                  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                                  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                                  return (`${mo} ${da}, ${ye}`)
                                })()}
                            </strong>
                            <div  dangerouslySetInnerHTML={{__html: item.node.excerpt}} className="mb-auto" />
                            <Link to={item.node.slug} className="btn-link p-0">Read More</Link>
                          </div>
                      )
                    // }
                  })
                }          
              {/* <Pagination records_per_page={10} objLength={data.wpgraphql.posts.edges.length} currentPage={1} /> */}
            </div>
        </div>
        </section>
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