/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import SignIn from '../SingIn/SignIn';
import PrivateRoute from './PriavateRoute';
import PublicRoute from './PublicRoute';
import routes from '../../app.route';
import ResetPassword from '../SingIn/ResetPassword';

const privates = (isAuthenticated) => (
  routes.map(({ path, _component }, i) => (
    <PrivateRoute
      key={i}
      path={path}
      isAuthenticated={isAuthenticated}
      component={_component}
    />
  ))
);

const AppRoute = ({ isAuthenticated, onLogin }) => (
  <Switch>
    <Route path="/recuperar-contraseña" component={() => ResetPassword()} />
    {privates(isAuthenticated)}
    { !isAuthenticated ? (
      <PublicRoute
        path="/"
        isAuthenticated={isAuthenticated}
        component={() => SignIn({ onLogin })}
      />
    ) : null}
  </Switch>
);


export default AppRoute;
