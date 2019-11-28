/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import clsx from 'clsx';
import {
  Card, CardContent, Grid, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import VerticalStepper from './VerticalStepper';
import Steapper from './HorizontalStepper';


const styleCard = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    fontWeight: 700,
  },
  avatar: {
    height: 56,
    width: 56,
    backgroundColor: '#36A2EB',
  },
  icon: {
    height: 32,
    width: 32,
    backgroundColor: '#36A2EB',
    hoverBackgroundColor: '#36A2EB',
  },
  difference: {
    display: 'flex',
    alignItems: 'center',
  },
}));


const Steppers = ({
  activeStepSets,
  changeStepSets,
  sets,
  activeStep,
  changeStep,
  requestsStepper,
}) => {
  const classes = styleCard();

  return (
    <Card
      className={clsx(classes.root)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <div className="row align-items-center justify-content-md-center">
              <Typography align="center" variant="h4" color="textPrimary">Materias UNQ solicitadas</Typography>
              <div className="row align-items-center justify-content-md-center col col-lg-12 ">
                <Steapper
                  activeStep={activeStepSets}
                  changeStep={changeStepSets}
                  requests={sets}
                  level={1}
                />
              </div>
            </div>
            <br />
            <div className="row align-items-center justify-content-md-center">
              <div className="col col-lg-6">
                <Typography align="center" variant="h4" color="textPrimary">Materias origen</Typography>
                <div className="row align-items-center justify-content-md-center col col-lg-12 ">
                  <VerticalStepper
                    activeStep={activeStep}
                    changeStep={changeStep}
                    requests={requestsStepper}
                    level={2}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>

  );
};

export default Steppers;
