import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SignUp from './containers/Auth/SignUpContainer';
import LogIn from './components/Auth/GoogleLogIn';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Profile from './containers/Profile/ProfileContainer';

export default (
  <Route path="/">
    <Route path="login" component={LogIn} />
    <Route path="signup" component={SignUp} />
    <Route component={Layout}>
      <IndexRoute component={Home} />
      <Route path="profile" component={Profile} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);
