import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './Layout.css';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import ViewPrimary from '../ViewPrimary';
import Logo from './logo.jpeg';


const Home = () => (
  <div className="row justify-content-md-center">
    <Image src={Logo} className=" img-fluid" alt="Responsive image" />
  </div>
);

function Layout() {
  return (
    <div className="m-100 h-100">
      <Nav />
      <div className="row m-75 h-75">
        <Sidebar />
        <div className="col-8 bg-white">
          <br />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/expediente" component={ViewPrimary} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
