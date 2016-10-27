const express = require('express');
const path = require('path');

const app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable import/no-extraneous-dependencies, global-require */
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack/webpack.config.dev');
  /* eslint-enable import/no-extraneous-dependencies, global-require */
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!'); // eslint-disable-line no-console
});
