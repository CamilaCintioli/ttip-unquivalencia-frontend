import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Dashboard from './dashboard/Dashboard';


function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}
export default App;
