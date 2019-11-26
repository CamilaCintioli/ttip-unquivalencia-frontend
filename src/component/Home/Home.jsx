/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  isObject, reduce, values, tail,
} from 'lodash';
import Torta from './Torta';
import Card from './Card';
import Logo from './Logo';
import { getHome } from '../../redux/actions/home';
import { dataHome } from '../../redux/selectors/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  const data = useSelector((state) => dataHome(state), shallowEqual);
  const dispatch = useDispatch();

  const sizeRequest = () => (isObject(data)
    ? reduce(data, (sum, n) => sum + n, 0) - data.files
    : 'Evaluando');

  const sizeFile = () => (isObject(data) ? data.files : 'Evaluando');
  const getTorta = () => (isObject(data) ? tail(values(data)) : []);

  useLayoutEffect(() => {
    dispatch(getHome());
  }, []);
  console.log(data);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className="animated fadeIn">
        <Grid item xs={5}>
          <Card
            title="Total de expediente"
            body={sizeFile()}
            type={1}
          />
        </Grid>
        <Grid item xs={2}>
          <Logo />
        </Grid>
        <Grid item xs={5}>
          <Card
            title="Total de solicitudes"
            body={sizeRequest()}
            type={0}
          />
        </Grid>
        <Grid item xs={4} />

        <Grid item xs={4} className="w-50 h-50">
          <Torta
            title="Estado de solicitudes"
            data={getTorta()}
          />
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </div>
  );
};

export default Home;
