import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());
// prevent mocha from trying to import styles and images because
// if it tries to parse them as JavaScript, it will throw an error
function noop() {
  return null;
}
['.scss', '.css', '.png', '.jpg', '.svg', '.ico'].forEach((ext) => {
  require.extensions[ext] = noop;
});

global.API_GATEWAY_URL = 'api-test.example.com';
