/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from './Component/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}


App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
