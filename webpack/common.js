const { resolve } = require('path')

// webpack plugins
const { NoEmitOnErrorsPlugin } = require('webpack')
const Cleanup = require('clean-webpack-plugin')
const MakeIndex = require('html-webpack-plugin')
const ExtractText = require('extract-text-webpack-plugin')

const extractCss = new ExtractText('style.css')


module.exports = {
  context: resolve('src'), // needs to be absolute
  entry: './js/_modules/clientApp',
  output: {
    path: resolve('build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: ['node_modules', 'src/js'],
    // alias: {
    //   '@US': 'js',
    // },
    extensions: [ // can require('a') instead of require('a.pug')
      '.js',
      '.jsx',
      '.json',
      '.pug',
      '.styl',
      '.scss',
      '.sass',
    ],
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractText.extract({ // styles in separate css, can be chuncked
          fallback: 'style-loader',

          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false
              },
            },
            'stylus-loader?resolve url'
          ]
        }),
      },
      {
        test: /\.sass$|\.scss$/,
        use: ExtractText.extract({ // styles in separate css, can be chuncked
          fallback: 'style-loader',

          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              },
            },
            'sass-loader',
          ]
        }),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },

  plugins: [
    new NoEmitOnErrorsPlugin(), // dont go if any errors
    new Cleanup(['build'], {
      root: resolve('./'),
    }),
    new MakeIndex({
      template: 'index.html',
      title: 'woot',
    }),
    extractCss,
  ],

  devtool: 'eval', // source-maps
}
