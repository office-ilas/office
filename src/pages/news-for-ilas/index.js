import * as React from "react";
//import { graphql,Link } from "gatsby"
import { graphql} from "gatsby"
//import styles from "./news-for-ilas.css";

const BaseURL="https://officetest.ilas.nagoya-u.ac.jp"
const ForIlasPage = ({data})  => {
  const posts = data.allMarkdownRemark.edges
  return(
   <section classname="content latestblogs">
     <div classname="container">
       {posts.map(({node}) => (
         <div style={{marginTop:10}}>    
          <p style={{color: "black",fontSize:13}}>
          {/* <Link to={node.fields.slug}>{node.frontmatter.title}</Link> */}
          {/* <a href={`${BaseURL}${node.fields.slug}`} target="_blank" rel="noreferrer">{node.frontmatter.title}</a> */}
          <a href={`${node.fields.slug}`} target="_blank" rel="noreferrer">{node.frontmatter.title}</a>
          </p>
          <p style={{color: "green",fontSize:1}}>({node.frontmatter.date})</p>
         </div>
       ))
       }
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