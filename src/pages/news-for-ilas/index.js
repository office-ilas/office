import * as React from "react";
import { graphql,Link } from "gatsby"
//import styles from "./news-for-ilas.css";

const ForIlasPage = ({data})  => {
  const posts = data.allMarkdownRemark.edges
  return(
   <section classname="content latestblogs">
     <div classname="container">
       {posts.map(({node}) => (
         <div style={{marginTop:10}}>    
        <p style={{color: "black",fontSize:13}}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </p>
        <p style={{color: "green",fontSize:1}}>({node.frontmatter.date})</p>
        </div>
       ))}
      </div>
    </section>
  )
       }
export default ForIlasPage

export const query = graphql`
 query {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey
    : { eq: "blog-post" } } }, limit:5) {
                edges {
                  node {
                    id
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date(formatString: "YYYY/MM/DD HH:MM")
                    }
                  }
                }
              }
    
 }
 `