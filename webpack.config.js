var webpack = require('webpack'); 
var path = require('path');


module.exports = {
    entry: {
        index: './src/client/public/index.jsx'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
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

    ]
};
