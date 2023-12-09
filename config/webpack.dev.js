const paths = require('./paths');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const port = 3001;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      // ... autres règles existantes
  
      // Nouvelle règle pour les fichiers SCSS avec Tailwind et PostCSS
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              // Ici, tu ajoutes les plugins nécessaires pour Tailwind et Autoprefixer
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                  // D'autres plugins PostCSS si nécessaire
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    clientLogLevel: 'warn',
    overlay: true,
    stats: 'minimal',
    open: false,
    compress: true,
    hot: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    port,
  },
});
