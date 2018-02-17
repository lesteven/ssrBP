var webpack = require('webpack'); 
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: {
        server: './src/server/server.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','env','stage-3'],
                        plugins: ['transform-class-properties']
                    }
                }
            }  
        ]
    },
    plugins: [
    ]
};
