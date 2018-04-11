const merge = require('webpack-merge')
const common = require('./common.js')

const test = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ]
  },
}

module.exports = merge(common, test);
