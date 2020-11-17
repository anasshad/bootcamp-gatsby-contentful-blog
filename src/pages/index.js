import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Welcome Visitor</h2>
    <Link to="/blog">Visit Blog</Link>
  </Layout>
)

export default IndexPage
