import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './Layout.css';
import ViewPrimary from '../ViewPrimary';
import Logo from './logo.jpeg';
import NewRequestPage from '../NewRequest/NewRequestPage';
import RequestPage from '../Request/RequestPage';

const Home = () => (
  <div className="row justify-content-md-center">
    <Image src={Logo} className=" img-fluid" alt="Responsive image" />
  </div>
);

function Layout() {
  return (

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/expediente" component={ViewPrimary} />
        <Route path="/solicitud/new" component={NewRequestPage} />
        <Route path="/solicitud/:solicitudId" component={RequestPage} />
      </Switch>

  );
}

export default Layout;
