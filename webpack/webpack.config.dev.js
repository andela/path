var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var assetsPath = path.join(__dirname, '..', 'public', 'assets');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '../app/index')
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
      loader: 'babel',
      exclude: path.join(__dirname, '..', 'node_modules')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(['css'])
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(png|jpg|ico|svg)$/,
      loader: 'file'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      API_GATEWAY_URL: JSON.stringify(process.env.API_GATEWAY_URL || 'https://api-staging.andela.com')
    }),
    new ExtractTextPlugin('style.css')
  ]
};
