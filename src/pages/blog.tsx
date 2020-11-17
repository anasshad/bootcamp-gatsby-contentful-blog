import * as React from 'react';
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"

import './blog.css'

interface BlogProps {
    data: any;
}

const Blog: React.FC<BlogProps> = ({ data }) => {
    return (
        <Layout>
            <div>{
                data.allContentfulBlogPost.edges.map(({ node }, index) => {
                    return (
                        <div key={index} className="blog">
                            <div className="blog-image" >
                                <Img
                                    fluid={node.featuredImage.fluid}
                                    key={node.featuredImage.fluid.src}
                                    alt={node.featuredImage.title}>
                                </Img>
                                <img src={node.featuredImage.fluid.src} alt="asdf" />
                            </div>
                            <div className="blog-text">
                                <div className="blog-postTitle"><Link to={`/blog/${node.slug}`}>{node.postTitle}</Link></div>
                                <div className="blog-createdAt">{node.createdAt}</div>
                                <div className="blog-excerpt">{node.excerpt.excerpt}</div>
                                <div >
                                    <Link className="blog-readMore" to={`/blog/${node.slug}`}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }</div>
        </Layout>)
}

export default Blog;

export const query = graphql`
    {
  allContentfulBlogPost {
    edges {
      node {
        slug
        postTitle
        createdAt(fromNow: true)
        excerpt {
          excerpt
        }
        featuredImage {
          fluid(maxWidth: 613) {
          sizes
          src
          srcSet
        }
        }
      }
    }
  }
}

`