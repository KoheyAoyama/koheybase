/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Koheybase.com`,
    description: `UIデザイナー 青山広平のポートフォリオサイト`,
    author: `Kohey Aoyama`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
}
