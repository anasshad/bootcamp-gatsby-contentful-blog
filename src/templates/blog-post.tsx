import * as React from 'react'
import {graphql} from 'gatsby'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

import './blog-post.css'

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}

const Post = ({data}) => {
    console.log(data);
    return(
        <Layout>
        <div className="post">
            <div><h1>{data.contentfulBlogPost.postTitle}</h1></div>
            <div className="post-excerpt">{data.contentfulBlogPost.excerpt.excerpt}</div>
            <div className="post-image"><img src={data.contentfulBlogPost.featuredImage.file.url} alt={data.contentfulBlogPost.postTitle}/></div>
            <div className="post-body">
                {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
            </div>
        </div>
        </Layout>
    )
}

export default Post;

export const query = graphql`
    query ($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    postTitle
    createdAt(fromNow: true)
    excerpt {
      excerpt
    }
    featuredImage {
      file {
        url
      }
    }
    body{
        json
    }
  }
}
`