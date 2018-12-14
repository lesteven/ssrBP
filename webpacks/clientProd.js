const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./clientCommon');
// const CompressionPlugin = require("compression-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
/*
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$|\.svg$/,
        minRatio: 0.8
      }),
*/
  ],
/*
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true 
      }),
    new OptimizeCSSAssetsPlugin({})

    ],
  }
*/
});
