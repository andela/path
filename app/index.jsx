import 'muicss/dist/css/mui.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import SignUp from './containers/SignUpContainer';
import LogIn from './containers/LogInContainer';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Home from './components/Home';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="login" component={LogIn} />
      <Route path="signup" component={SignUp} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
