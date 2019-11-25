import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Card, CardContent, Typography,
} from '@material-ui/core';
import {
  withoutEvaluating,
  approved,
  rejected,
  consulting,
  finished,
} from '../../consts/stateRequest';
import styleCard from './styleCard';

const getData = (data) => ({
  labels: [
    withoutEvaluating,
    approved,
    rejected,
    consulting,
    finished,
  ],
  datasets: [{
    data,
    backgroundColor: [
      '#006400',
      '#36A2EB',
      '#FFCE56',
      '#FF0000',
      '#FF00FF',
    ],
    hoverBackgroundColor: [
      '#006400',
      '#36A2EB',
      '#FFCE56',
      '#FF0000',
      '#FF00FF',
    ],
  }],
});

const Torta = (props) => {
  const classes = styleCard();
  const {
    className,
    title,
    data,
    ...rest
  } = props;

  return (
    <Card>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {title}
        </Typography>
        <Doughnut
          data={getData(data)}
          width="200px"
          height="200px"
        />
      </CardContent>
    </Card>
  );
};

export default Torta;
