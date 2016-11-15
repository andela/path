const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack/webpack.config.dev');

const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.use('/api/v1/path', proxy(process.env.MOCK_SERVER_URL || 'localhost:8080'));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // eslint-disable-line no-console
});
