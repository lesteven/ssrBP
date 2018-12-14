const webpack = require('webpack'); 
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const common = require('./common');
const merge = require('webpack-merge');
const assetsPath = path.resolve(__dirname, '../distServer');


module.exports = merge(common, {
  target: 'node',
  externals: [nodeExternals()],
  entry: [
    '@babel/polyfill',
   './src/server/server.js'
  ],
  output: {
    path: assetsPath,
    filename: 'server.bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: {
          loader: 'ignore-loader',
        }
      }, 
    ]
  },
});
