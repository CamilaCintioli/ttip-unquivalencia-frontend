/* eslint-disable max-len */
import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import {
  Switch,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Footer from './dashboard/Footer';
import Nav from './dashboard/Nav';
import SideBar from './dashboard/Sidebar';
import useStyles from './dashboard/style';
import { getUser } from '../redux/actions/user';
import { userResult } from '../redux/selectors/index';
import { isAuthenticated, logout } from '../service/userService';
import AppRoute from './Router/AppRoute';
import apiCall from '../redux/api';

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => userResult(state));
  const dispatch = useDispatch();
  const isValid = isAuthenticated(user);
  console.log('logeado is');
  console.log(isValid);


  const singIn = (bodyUser) => dispatch(getUser(bodyUser));

  const getClass = (classs) => (isValid ? classs : null);

  const signOut = () => apiCall('/user/invalidate/all/sessions', null, null, 'POST').then(() => logout());

  return (
    <div className={classes.root}>
      <CssBaseline />
      {isValid
        ? <Nav classes={classes} handleDrawerOpen={() => setOpen(true)} open={open} clouseSession={signOut} />
        : null}
      {isValid
        ? <SideBar classes={classes} handleDrawerClose={() => setOpen(false)} open={open} />
        : null}
      <main className={classes.content}>
        <div className={getClass(classes.appBarSpacer)} />
        <Container maxWidth="xl" className={getClass(classes.container)}>
          <Switch>
            <AppRoute isAuthenticated={isValid} onLogin={singIn} />
          </Switch>
        </Container>
        {isValid
          ? <Footer classes={classes} />
          : null}
      </main>
    </div>
  );
}
