import 'muicss/dist/css/mui.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiFramework from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SignUp from './containers/Auth/SignUpContainer';
import LogIn from './containers/Auth/LogInContainer';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Profile from './components/Profile/Profile';

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

const App = () => (
  <MuiFramework muiTheme={andelaBaseTheme}>
    <Router history={browserHistory}>
      <Route path="login" component={LogIn} />
      <Route path="signup" component={SignUp} />
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="profile" component={Profile} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </MuiFramework>
);

ReactDOM.render(<App />, document.getElementById('app'));
