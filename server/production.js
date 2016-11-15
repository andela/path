const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();

app.use('/api/v1/path', proxy(process.env.MOCK_SERVER_URL || 'localhost:8080'));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // eslint-disable-line no-console
});
