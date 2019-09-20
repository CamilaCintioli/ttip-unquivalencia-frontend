/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from './Component/Dashboard';


function App({ store }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Provider>
  );
}


App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
