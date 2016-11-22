import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { jsdom } from 'jsdom';
import injectTapEventPlugin from 'react-tap-event-plugin';

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

// Make the DOM API available on node
global.document = jsdom('<!doctype html><html><body></body></html>', {
  url: 'https://path-test.example.com'
});
global.window = document.defaultView;

Object.keys(window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

injectTapEventPlugin();
