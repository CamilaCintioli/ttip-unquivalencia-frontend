import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout';


function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
export default App;
