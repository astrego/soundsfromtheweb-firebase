let activeEnv = process.env.ACTIVE_ENV;

if (!activeEnv) {
  activeEnv = 'development';
}

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

console.log(activeEnv);

module.exports = {
  siteMetadata: {
    title: 'Soundsfromtheweb',
    siteUrl: 'https://soundsfromtheweb.com',
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
