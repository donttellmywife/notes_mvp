const merge = require('webpack-merge')
const common = require('./common.js')

const Uglify = require('uglifyjs-webpack-plugin')
const { DefinePlugin } = require('webpack')

const prod = {
  output: {
    publicPath: '/build/',
  },
  devtool: 'source-map',
  plugins: [
    new Uglify({
      sourceMap: true,
    }),
    new DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
  ],
}

module.exports = merge(common, prod)
