/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import SignIn from '../SingIn/SignIn';
import PrivateRoute from './PriavateRoute';
import PublicRoute from './PublicRoute';
import routes from './route';

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
  <>
    {privates(isAuthenticated)}
    { !isAuthenticated ? (
      <PublicRoute
        path="/"
        isAuthenticated={isAuthenticated}
        component={() => SignIn({ onLogin })}
      />
    ) : null}
  </>
);


export default AppRoute;
