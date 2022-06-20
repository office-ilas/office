import React from "react";
// import { graphql } from "gatsby"
// import { navigate } from 'gatsby-link'
import Layout from "../../components/Layout";

const ContactUsPage = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">お問い合わせ/CONTACT</h2>
              <h3 className="is-size-4 has-text-weight-bold">名古屋大学</h3>
              <a href="http://www.nagoya-u.ac.jp/contact-us/index.html">http://www.nagoya-u.ac.jp/contact-us/index.html</a>
              <br />
              <h3 className="is-size-4 has-text-weight-bold">岐阜大学</h3>
              <a href="https://www.gifu-u.ac.jp/contact/">https://www.gifu-u.ac.jp/contact/</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactUsPage;
