import * as React from "react";
import { graphql,Link } from "gatsby"
//import Layout from "../../components/Layout";

const ForIlasPage = ({data})  => {
  const posts = data.allMarkdownRemark.edges
  return(
   <section classname="content latestblogs">
     <div classname="container">
       {posts.map(({node}) => (
       <div classname="posts">
        <table><tr>
        <td><Link to={node.fields.slug}><h3>{node.frontmatter.title}</h3></Link></td>
        <td><h6><font color="green">({node.frontmatter.date})</font></h6></td>
        </tr></table>
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