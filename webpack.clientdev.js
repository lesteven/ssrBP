var merge = require('webpack-merge');
var common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        publicPath: '/',
        contentBase: './src/client/public',
        inline: true,
        port: 8080, 
        proxy: {
            '**': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure:false
            }
        }
    },

});
