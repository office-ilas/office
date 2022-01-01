import * as React from "react";
//import { graphql,Link } from "gatsby"
import { graphql} from "gatsby"
//import styles from "./news-for-ilas.css";
import "../../components/bulma.min.css";

const ForIlasPage = ({data})  => {
  const posts = data.allMarkdownRemark.edges
    return(
    <div className="section">
     <div>
       {posts.map(({node}) => (
         <div className="mb-3">    
               <p className="title is-5" key={node.id}>
          {/* <Link to={node.fields.slug}>{node.frontmatter.title}</Link> */}
           <a href={`${node.fields.slug}`} target="_blank" rel="noreferrer">{node.frontmatter.title}</a>
          </p>
          <p className="subtitle is-6">({node.frontmatter.date})</p>
         </div>     
       ))
       }
      </div>
     </div>
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
