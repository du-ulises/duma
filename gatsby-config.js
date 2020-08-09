module.exports = {
  siteMetadata: {
    title: `Diego Ulises Martínez`,
    description: `Portfolio`,
    author: `@diego.ulisess`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#4353ff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/Deer.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: [
            "Acrom Bold,Acrom Light, Acrom Medium, Acrom Regular, Acrom Thin, MADE Evolve Sans Bold EVO, MADE Evolve Sans Light EVO, MADE Evolve Sans Medium EVO, MADE Evolve Sans Regular EVO, MADE Evolve Sans Thin EVO, MADE Evolve Sans Light",
          ],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
