/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Component/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
