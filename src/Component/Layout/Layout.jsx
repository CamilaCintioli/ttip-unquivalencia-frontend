import React from 'react';
import {
  Route, Switch, Link,
} from 'react-router-dom';
import { Image } from 'react-bootstrap';
import File from '../File/File';
import './Layout.css';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
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
        <nav className=" col-2 bg-light nav flex-column">
          <Link className="nav-link active" to="/expediente">
            <span className="icon-holder">
              <i className="fa fa-archive" />
            </span>
            <span className="title">Expediente</span>
          </Link>
        </nav>

        <div className="col-8 bg-white">
          <br />
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
