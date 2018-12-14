const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./serverCommon');

module.exports = merge(common, {
  mode: 'production'
  
});
