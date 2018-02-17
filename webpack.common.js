var webpack = require('webpack'); 
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        client: './src/client/public/index.jsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
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
            },   
            {
                test: /\.(png|svg|jpg|gif)$/, 
                use: ['file-loader']
            },
            {
                test: /\.css$/, 
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
//        new HtmlWebpackPlugin()
    ]
};
