/* eslint-disable max-len */
import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { Switch, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Footer from './Footer';
import Nav from './Navbar/Nav';
import SideBar from './Sidebar/Sidebar';
import useStyles from './Styles/style';
import { getUser } from '../../redux/actions/user';
import { userResult } from '../../redux/selectors/index';
import { isAuthenticated, logout } from '../../service/userService';
import AppRoute from '../Router/AppRoute';
import apiCall from '../../redux/api';

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => userResult(state));
  const dispatch = useDispatch();
  const history = useHistory();
  const isValid = isAuthenticated(user, history);


  const singIn = (bodyUser) => dispatch(getUser({ bodyUser, history }));


  const getClass = (classs) => (isValid ? classs : null);

  const signOut = () => apiCall('/user/invalidate/all/sessions', null, null, 'POST').then(() => logout());

  const changePassword = () => history.push('/password');
  return (
    <div className={classes.root}>
      <CssBaseline />
      {isValid
        ? <Nav classes={classes} handleDrawerOpen={() => setOpen(true)} open={open} clouseSession={signOut} changePassword={changePassword} />
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
