import 'muicss/dist/css/mui.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SignUp from './containers/Auth/SignUpContainer';
import LogIn from './containers/Auth/LogInContainer';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Profile from './components/profile';

injectTapEventPlugin();

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="login" component={LogIn} />
      <Route path="signup" component={SignUp} />
      <Route path="profile" component={Profile} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
