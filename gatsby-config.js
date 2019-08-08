module.exports = {
  siteMetadata: {
    title: `ACE-IDS Web`,
    description: `Web simulation of ACE-IDS system.`,
    author: `Maxim Salikhov`,
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
  ],
}
