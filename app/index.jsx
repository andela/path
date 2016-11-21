import 'muicss/dist/css/mui.min.css';
import 'styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiFramework from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import cookie from 'react-cookie';
import Root from 'containers/app/Root';
import configureStore from 'store/configureStore';

const andelaBaseTheme = getMuiTheme({
  appBar: {
    color: '#3359DF',
    padding: 30,
    height: 58,
  },
  palette: {
    primary1Color: '#3359DF',
  },
});

injectTapEventPlugin();

const initialState = {
  auth: {
    token: cookie.load('jwt-token')
  }
};

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <MuiFramework muiTheme={andelaBaseTheme}>
    <Root store={store} history={history} />
  </MuiFramework>,
  document.getElementById('app')
);
