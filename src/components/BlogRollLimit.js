import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
//import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column post is-4" key={post.id}>
              <article className={`blog-list-item tile is-child box notification is-featured`}>
              {/*  {post.frontmatter.featuredimage ? (
                  <div className="column is-12 featured-content ">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`
                      }}
                    />
                  </div>
                ) : null}
                    */}
                <p className="post-meta">
                  <Link className="title has-text-black is-size-4" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-6 is-block">{post.frontmatter.date}</span>
                </p>
                <p>
                  {post.frontmatter.description}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default function BlogRollQuery() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "blog-post" } } }, limit:6) {
            edges {
              node {
                excerpt(pruneLength: 100)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  description
                  ## featuredpost
                  ## featuredimage {
                  ##  childImageSharp {
                  ##    gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
                  ##  }
                  ## }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRoll data={data} count={count} />}
    />
  );
}
