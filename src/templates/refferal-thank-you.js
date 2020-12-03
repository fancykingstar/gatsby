import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPolicy = () => {

  return (  
    <Layout>
      <SEO title={'Refferal Thankyou!'} />
      {/* section-gap */}
      <section  className="container my-5 py-4">
        <div className="row">
          <div className="col-10 mx-auto text-center">
              <h1 className="mb-4">THANK YOU!</h1>
              <h3 className="mb-3 text-blue">Thank you for inviting a contractor to Enerbank. We will be contacting them shortly.</h3>
              <p className="mb-5">Do you have additional contractors you’d like to invite?<br/>Don’t forget, you’ll receive an additional chance to earn <strong>$300 for every contractor you invite.</strong></p>
              <Link to={'/contractor-referral'} className="btn btn-primary">Invite Another contractor</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
 }
export default PrivacyPolicy