
module.exports = {
  siteMetadata: {
    title: `EnerBankUSA`,
    description: `America's home improvement lender of choice`,
    author: `@enerbank`,
  },
  plugins: [
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
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // typeName: `WordPress`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // fieldName: `WordPress`,
        // Url to query from
        url: `localhost:8000/graphql`,
        refetchInterval: 60
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "my-website-bucket",
      },
    }
  ],
}
