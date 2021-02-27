import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './index';

function PrivateRoute({ component: Component, ...rest }) {
  if (isAuthenticated()) {
    return <Route {...rest} render={Component} />
  } else {
    return <Redirect to="/" />
  }

}

export default PrivateRoute;