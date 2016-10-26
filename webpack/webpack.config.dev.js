var path = require('path');
var webpack = require('webpack');

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
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
