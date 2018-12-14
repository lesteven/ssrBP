const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const assetsPath = path.resolve(__dirname, '../dist');

/* Shared webpack between clientDev and clientProd.
*  - shares entry, output, css
*/

module.exports = merge(common, {
  entry: {
    client: [
      '@babel/polyfill',
      './src/client/index.jsx'
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.ttf$/,
        use: 'file-loader',

      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.css',
  })]


});
