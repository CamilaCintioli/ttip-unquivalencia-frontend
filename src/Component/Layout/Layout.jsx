import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';

import File from '../File/File';
import './Layout.css';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Logo from './logo.jpeg';

const Home = () => (
  <div className="row justify-content-md-center">
    <img src={Logo} className="img-fluid" alt="Responsive image" />
  </div>
);

function Layout() {
  return (
    <div>
      <Nav />
      <br />
      <div className="row justify-content-md-center">
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/expediente" component={File} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
