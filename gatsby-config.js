module.exports = {
  siteMetadata: {
    title: 'Soundsfromtheweb',
    siteUrl: 'https://needstobetheproductionurl.com',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sounds',
        path: './src/sounds/',
      },
      __key: 'sounds',
    },
  ],
};
