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
        <SEO title={data.wpgraphql.page.title} description={data.wpgraphql.page.excerpt}/>
        <section className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    id="name"
                    aria-invalid={errors.name ? "true" : "false"}
                    ref={register({ required: true, maxLength: 30 })}
                />
                {errors.name && errors.name.type === "required" && (
                    <span role="alert">This is required</span>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                    <span role="alert">Max length exceeded</span>
                )}

                {/* <textarea value={value} className="form-control mb-3" name="leave_feedback" onChange={handleChange} style={{height: '100px' }} placeholder="Leave feedback here ..." /> */}
                <button className="btn btn-primary">Submit</button>
            </form>
        </section>
    </Layout>
  
)}

export default Feedback

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
        }
    }
`