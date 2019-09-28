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

export default function Dashboard({ history }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => userResult(state));
  const dispatch = useDispatch();
  console.log('logeado is');
  console.log(isAuthenticated(user));

  const singIn = (bodyUser) => {
    dispatch(getUser(bodyUser));
  };

  const clouseSession = () => {
    logout();
  };

  const getClass = (classs) => (isAuthenticated(user) ? classs : null);

  const layour = () => (
    <>
      <CssBaseline />
      {isAuthenticated(user)
        ? <Nav classes={classes} handleDrawerOpen={() => setOpen(true)} open={open} clouseSession={clouseSession} />
        : null}
      {isAuthenticated(user)
        ? <SideBar classes={classes} handleDrawerClose={() => setOpen(false)} open={open} />
        : null}
      <main className={classes.content}>
        <div className={getClass(classes.appBarSpacer)} />
        <Container maxWidth="xl" className={getClass(classes.container)}>
          <Switch>
            <AppRoute isAuthenticated={isAuthenticated(user)} onLogin={singIn} />
          </Switch>
        </Container>
        {isAuthenticated(user)
          ? <Footer classes={classes} />
          : null}
      </main>
    </>
  );

  return (
    <div className={classes.root}>
      {layour()}
    </div>
  );
}
