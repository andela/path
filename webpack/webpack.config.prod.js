var path = require('path');
var webpack = require('webpack');

var assetsPath = path.join(__dirname, '..', 'public', 'assets');

module.exports = {
  entry: [
    path.join(__dirname, '../app/index.jsx')
  ],
  devtool: 'cheap-module-source-map',
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
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
