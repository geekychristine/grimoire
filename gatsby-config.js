module.exports = {
  proxy: {
    prefix: "/api",
    url: "http://localhost:3000"
  },
  siteMetadata: {
    title: `Grimoire`,
    description: `A PWA for D&D 5th Edition Spells.`,
    author: `@gatsbyjs`,
    baseApi: "http://dnd5eapi.co/api"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }`gatsby-plugin-offline` // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
  ]
};
