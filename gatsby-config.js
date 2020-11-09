module.exports = {
    siteMetadata: {
      title: `EnerBankUSA`,
      description: `America's home improvement lender of choice`,
      author: `@enerbank`,
      siteURL: 'https://enerbank.com',
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
                typeName: `WPGraphQL`,
                // typeName: `WordPress`,
                fieldName: `wpgraphql`,
                // fieldName: `WordPress`,
                url: `https://devgbpress.enerbank.com/graphql`,
                refetchInterval: 60,
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                // background_color: `#663399`,
                // theme_color: `#663399`,
                // display: `minimal-ui`,
                icon: `src/images/favicon-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-plugin-hubspot",
            options: {
                trackingCode: "381510",
                respectDNT: true,
                productionOnly: true,
            },
        },
    ],
}
