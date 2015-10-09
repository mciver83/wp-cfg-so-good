var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './public/index.js',
  output: {
    filename: './public/public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ]
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css!less')
      },
      // {
      //   test: /\.sass$/,
      //   loader: ExtractTextPlugin.extract('css!sass')
      // }
      // sass entry files apperently need semicolons according to sass-loader errors
    ]
  },
  plugins: [
    // new LiveReloadPlugin(options),
    new ExtractTextPlugin('./public/public/bundle.css', {
        allChunks: true
    }),
    //new webpack.optimize.UglifyJsPlugin({minimize: true}), // uncomment when ready to minify
    // new webpack.DefinePlugin({
    //   'Promise': require('es6-promise').Promise // use this if you get a 'Promise is not defined' error below node 4.0
    // })
  ]
};
