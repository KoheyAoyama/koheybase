/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Koheybase.com`,
    description: `UIデザイナー 青山広平のポートフォリオ`,
    author: `Kohey Aoyama`,
    siteUrl: `https://koheybase.com/`,
    url: 'https://koheybase.com/',
    ogpImage: '/twitter_card_large.png'
  },
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: 'b88b29e6-1eec-4b91-912f-449d5b30bded',
        serviceId: 'koheybase',
        apis: [
          {
            endpoint: 'works',
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
}
