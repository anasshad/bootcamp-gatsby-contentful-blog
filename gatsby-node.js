const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
    const blogPosts = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    slug
                }
            }
        }
    }`);
    return blogPosts.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            path: `/blog/${node.slug}`,
            component: blogPostTemplate,
            context: {
                slug: node.slug
            }
        })
    });

}