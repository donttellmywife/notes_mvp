const merge = require('webpack-merge')
const { DefinePlugin, NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')

const common = require('./common.js')

const dev = {
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        options: {
          // This is a feature of `babel-loader` for Webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          // cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      DEVELOPMENT: JSON.stringify(true),
    }), // pass variable to client
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin()
  ],

  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 8080,
    // proxy: {
    //   "/": "http://localhost:8080"
    // },
    // contentBase: './asd',
    inline: true,
    historyApiFallback: true, // send index.html for unknown routes, so client can manage them
  },
  watchOptions: {
    aggregateTimeout: 100,
  },
}

module.exports = merge(common, dev)
