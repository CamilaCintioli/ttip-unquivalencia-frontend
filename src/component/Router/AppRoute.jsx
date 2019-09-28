/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ViewPrimary from '../ViewPrimary';
import NewFilePage from '../NewRequest/NewFilePage';
import RequestPage from '../Request/RequestPage';
import Home from '../Home';
import SignIn from '../SignIn';
import PrivateRoute from './PriavateRoute';
import PublicRoute from './PublicRoute';

const routes = [
  { path: '/home', _component: Home },
  { path: '/expediente', _component: ViewPrimary },
  { path: '/solicitud/:solicitudId', _component: RequestPage },
  { path: '/new/solicitud', _component: NewFilePage },
];


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
