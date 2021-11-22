import * as React from "react";
// import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby";
import SeO from "../components/seo";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import { StaticImage } from "gatsby-plugin-image";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const IndexPageTemplate = ({ data }) => (
  <Layout>
    <SeO title={data.markdownRemark.frontmatter.title} description={data.markdownRemark.frontmatter.description} />
    <div
      className="full-width-image margin-top-0 is-hidden-mobile"
      style={{
        // backgroundImage: `url('/img/AC-banner_4780_768.png')`,
        backgroundImage: `url('/img/OfficeLogo.png')`,
        // backgroundImage: `url('/img/AC-banner_3840_640.png')`,
        // backgroundImage: `url('/img/AC-banner_1920_1280.png')`,
        // backgroundImage: `url('/img/AC-banner_960_640.jpg')`,
        // backgroundImage: {data.markdownRemark.image},
        backgroundPosition: `top center`,
        // backgroundPosition: `bottom center`,
        backgroundAttachment: `cover`
      }}
    >
      <h1
        className="has-text-weight-bold is-size-2 is-hidden-mobile"
        style={{
          boxShadow: "0.5rem 0 0 #002c76, -0.5rem 0 0#002c76",
          backgroundColor: "#002c76",
          color: "white",
          padding: "1rem",
          position: "absolute",
          top: "100px"
        }}
      >
        {data.markdownRemark.frontmatter.title}
      </h1>
    </div>
    <div
      className="full-width-image margin-top-0 is-hidden-tablet is-flex-mobile"
      style={{
        // backgroundImage: `url(/img/AC-banner_750_375.png)`,
        backgroundImage: `url(/img/AC-banner_640_640.png)`,
        backgroundPosition: `top center `,
        backgroundSize: `cover`,
        // backgroundAttachment: `fixed`,
        // coverとfixedが両方あるとiPhoneではうまく行かないらしいのでアプデ待ち
        backgroundRepeat: `no-repeat`
      }}
    >
      <h3
        className="mt-50 has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-2-widescreen has-text-centered"
        style={{
          boxShadow: "0.5rem 0 0 #002c76, -0.5rem 0 0#002c76",
          backgroundColor: "#002c76",
          color: "white",
          padding: "1rem",
          position: "absolute",
          top: "100px"
        }}
      >
        {data.markdownRemark.frontmatter.title}
      </h3>
    </div>

    <section className="blog-posts">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <br />
            <div className="tile box">
              <blockquote>
                <div className="content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
              </blockquote>
            </div>

            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column post is-6">
                    <article className="columns is-multiline">
                      <div className="column is-12 post-img">
                         <StaticImage src="../img/courses.png" alt="履修関係" placeholder="blurred" /> 
	                    </a> 
	                    </div>
    
                      <div className="column is-12 featured-content">
        　　　　　　　　　<h3 className="heading post-category">履修関係</h3>
        　　　　　　　　　<h1 className="title post-title">履修関係おしらせ</h1>
                        <div className="content">
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="column post is-6">
                    <article className="columns is-multiline">
                      <div className="column is-12 post-img">
                        <StaticImage src="../img/facilities.png" alt="施設関係" placeholder="blurred" />
                     </div>
	
                      <div className="column is-12 featured-content ">
                        <h3 className="heading post-category">施設関係</h3>
                        <h1 className="title post-title">施設関係お知らせ</h1>
                        <div className="content">
                        </div>
                        <br />
                        <Link className="btn" to="/division/facilities/">
                          Read more
                        </Link>
                      </div>
                    </article>
                  </div>
                </article>
              </div>
            </div>
            <hr />
            <div className="columns is-multiline">
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../img/OnlineLecture.png" alt="オンライン授業" placeholder="blurred" />
                  </div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">オンライン授業</h3>
                    <h1 className="title post-title">オンライン授業に関するお知らせ</h1>
                    <div className="content">
                    </div>
                    <br />
                    <Link className="btn" to="/division/OnlineLecture/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../img/G30.png" alt="International Programs(G30)" placeholder="blurred" />
                  </div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">G30</h3>
        <h1 className="title post-title">International Programs(G30)について</h1>
                    <div className="content">
                      <ul>
                        <li>G30とは、</li>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/division/G30/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>

              <div className="column is-12">
                <hr />
                <h3 className="has-text-weight-semibold is-size-2">News and Updates</h3>
                <br />
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/news">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPageTemplate;

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
        description
      }
      pathPrefix
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      id
      frontmatter {
        templateKey
        title
        subtitle
        heading
        description
      }
      html
    }
  }
`;
