module.exports = {
  siteMetadata: {
    title: 'wab',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-minimum-heading",
            options: {
              minimumDepth: 2,
            },
          },
        ],
      },
    },
    {
      resolve:'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-react-next'
  ],
};
