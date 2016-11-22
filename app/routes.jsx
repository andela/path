import React from 'react';
import { Route, IndexRoute } from 'react-router';
import GoogleLogIn from 'components/auth/GoogleLogIn';
import App from 'containers/app/App';
import Guest from 'containers/app/Guest';
import NotFound from 'components/app/NotFound';
import Dashboard from 'components/dashboard/Dashboard';

export default (
  <Route path="/">
    <Route component={Guest}>
      <Route path="login" component={GoogleLogIn} />
    </Route>
    <Route component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);
