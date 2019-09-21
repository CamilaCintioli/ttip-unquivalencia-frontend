import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './Layout.css';
import { useSelector, useDispatch } from 'react-redux';
import ViewPrimary from '../ViewPrimary';
import Logo from './logo.jpeg';
import NewRequestPage from '../NewRequest/NewRequestPage';
import RequestPage from '../Request/RequestPage';
import { getUser } from '../../redux/actions/user';
import SinIn from '../SingIn';
import { userResult } from '../../redux/selectors/index';

const Home = () => (
  <div className="row justify-content-md-center">
    <Image src={Logo} className=" img-fluid" alt="Responsive image" />
  </div>
);

function Layout() {
  const user = useSelector((state) => userResult(state));
  const dispatch = useDispatch();

  const singIn = (bodyUser) => {
    dispatch(getUser(bodyUser));
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (!user ? <Redirect to="/home" /> : <SinIn onLogin={singIn} />)}
      />
      <Route path="/home" component={Home} />
      <Route path="/expediente" component={ViewPrimary} />
      <Route path="/solicitud/new" component={NewRequestPage} />
      <Route path="/solicitud/:solicitudId" component={RequestPage} />
    </Switch>

  );
}

export default Layout;
