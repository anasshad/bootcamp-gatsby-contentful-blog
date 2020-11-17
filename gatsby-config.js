module.exports = {
  siteMetadata: {
    title: `Shad's Gatsby Contentful Blog`,
    description: `Gatsby blog powered by Contentful`,
    author: `anasshad`,
  },
  plugins: [
      `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xfadd4spatu5`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'cWcmlEAa9uiewXvpjzgkYPWu4RZAtssfjm98-aYZ5oY',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
