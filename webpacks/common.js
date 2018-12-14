const webpack = require('webpack');


/* Shared webpack between client and server.
*  - takes care of react code and images
*/

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
    ] 
  }
}

