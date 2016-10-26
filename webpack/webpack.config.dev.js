var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var assetsPath = path.join(__dirname, '..', 'public', 'assets');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '../app/index.jsx')
  ],
  devtool: 'eval-source-map',
  output: {
    path: assetsPath,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: path.join(__dirname, '..', 'node_modules')
    }, {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("style.css")
  ]
};
