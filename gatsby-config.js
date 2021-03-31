const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'Railek',
    description: 'Multi-disciplinary frontend developer based in South Africa.',
    keywords: ['React', 'Gatsby', 'JavaScript'],
    ogImage: 'images/open-graph.png',
    author: '@rail3k',
    lang: 'en',
    siteUrl: isProd ? 'https://www.railek.com' : 'http://localhost:8000',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Railek',
        short_name: 'Railek',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Bungee', 'Open Sans:400,500,700,900'],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
