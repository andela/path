import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import SignUp from './containers/Auth/SignUpContainer';
import LogIn from './containers/Auth/LogInContainer';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Profile from './containers/Profile/ProfileContainer';

function Routes(props) {
  return (
    <Router history={props.history}>
      <Route path="login" component={LogIn} />
      <Route path="signup" component={SignUp} />
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="profile" component={Profile} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  );
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
