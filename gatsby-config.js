module.exports = {
  siteMetadata: {
    title: `Lotus Experience - Criamos Experiências Digitais Execpcionais`,
    description: `Especialistas em desenvolvimento de produtos digitais. Podemos te ajudar a tirar sua idéia do papel e transformá-lo em um negócio promissor!`,
    author: `@lotusexpierience`,
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lotus Experience`,
        short_name: `lotus`,
        start_url: `/`,
        background_color: `#4A4EDD`,
        theme_color: `#4A4EDD`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
