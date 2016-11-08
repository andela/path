import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Router from '../../routes';
import DevTools from './DevTools';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
