var merge = require('webpack-merge');
var webpack = require('webpack');
var common = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
    devtool: 'source-map',

    plugins: [
        new webpack.DefinePlugin({
              'process.env.NODE_ENV': '"production"'
            }),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new CompressionPlugin({
              asset: "[path].gz[query]",
              algorithm: "gzip",
              test: /\.js$|\.css$|\.html$/,
              threshold: 10240,
              minRatio: 0.8
            })
    ]

});
