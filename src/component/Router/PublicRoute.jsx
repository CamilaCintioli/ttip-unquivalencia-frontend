import React from 'react';
import {
  Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoot = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (!isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    ))}
  />
);


PublicRoot.prototype = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  isAuthenticated: PropTypes.bool,
};

export default PublicRoot;
