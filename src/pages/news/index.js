import * as React from "react";
// import { graphql } from "gatsby"
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
{/*        
        <div
          className="full-width-image margin-top-0 is-hidden-mobile"
          style={{
            backgroundImage: `url('../../img/AC-banner_4780_768.png')`,
            backgroundPosition: `top center`,
            backgroundAttachment: `cover`
          }}
        >       
          <h1
            className="has-text-weight-bold is-size-2 is-hidden-mobile"
            style={{
              boxShadow: "0.5rem 0 0 #002c76, -0.5rem 0 0 #002c76",
              backgroundColor: "#002c76",
              color: "white",
              padding: "1rem",
              position: "absolute",
              top: "100px"
            }}
          >
            News and Updates
          </h1>
        </div>
        */}
        {/*
        <div
	    className="full-width-image margin-top-0 is-hidden-tablet is-flex-mobile"
            style={{
            backgroundImage: `url('../../img/AC-banner_640_640.png')`,
            backgroundPosition: `top center `,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`
          }} 
        >
         */}
	{/*<div>
	              <h5
            className="mt-50 has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-3-widescreen has-text-centered"
            style={{
              boxShadow: "0.5rem 0 0 #002c76, -0.5rem 0 0#002c76",
              backgroundColor: "#002c76",
              color: "white",
              padding: "1.5rem",
              position: "absolute",
              top: "30px"
            }}
          >
          お知らせ
          </h5>
	  </div>*/}
	    
        <section className="section">
	  <h1 className="title is-size-2 is-bold-light">お知らせ</h1> 
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
