module.exports = {
  siteMetadata: {
    title: `Matt Developer`,
    author: `Matt Developer`,
    description: `Full stack developer focused on React and React Native development.`,
    siteUrl: `https://mattdeveloper.github.io`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `code`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // {
          //   resolve: "gatsby-remark-images",
          //   options: {
          //     maxWidth: 590,
          //   },
          // },
          // "gatsby-remark-copy-linked-files",
          // "gatsby-remark-responsive-iframe",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matt Developer`,
        short_name: `Matt Developer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#263238`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148369352-1",
      },
    },
  ],
}
