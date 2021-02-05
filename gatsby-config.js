require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'Soundsfromtheweb',
    siteUrl: 'https://needstobetheproductionurl.com',
  },
  plugins: [
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: {
          type: process.env.FIREBASE_TYPE,
          project_id: process.env.FIREBASE_PROJECT_ID,
          private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
          private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          client_email: process.env.FIREBASE_CLIENT_EMAIL,
          client_id: process.env.FIREBASE_CLIENT_ID,
          auth_uri: process.env.FIREBASE_AUTH_URI,
          token_uri: process.env.FIREBASE_TOKEN_URI,
          auth_provider_x509_cert_url:
            process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
          client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
        },
        types: [
          {
            type: 'Sound',
            collection: 'sounds',
            map: (doc) => ({
              title: doc.title,
              mp3: doc.mp3,
              WAV: doc.WAV,
            }),
          },
        ],
      },
    },
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
