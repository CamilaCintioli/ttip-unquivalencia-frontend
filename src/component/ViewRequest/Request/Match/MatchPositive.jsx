/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { isEmpty } from 'lodash';
import {
  Typography,
} from '@material-ui/core';
import CardRequest from './CardRequest';
import Resolution from './Resolution';
import useStyles from './style';

export default function Match({ requestMatch }) {
  const classes = useStyles();
  const {
    requestsTotalMatchApproved,
    requestsMatchWithoutYearPlanApproved,
    subjectsToApprove,

  } = requestMatch;
  const getClass = () => (isEmpty(requestsTotalMatchApproved) ? 'card p-3 text-white bg-warning mb-3' : 'card p-3 text-white bg-info mb-3');
  const requests = isEmpty(requestsTotalMatchApproved) ? requestsMatchWithoutYearPlanApproved : requestsTotalMatchApproved;
  return (
    isEmpty(requestsTotalMatchApproved) && isEmpty(requestsMatchWithoutYearPlanApproved) ? null
      : (
        <div className={classes.paper}>
          <Typography className="text-center" variant="h3" gutterBottom>
            Materias de origen en solicitud de historial positivo
          </Typography>
          <hr />
          <div className="contain row justify-content-around">
            <CardRequest requests={requests} getClass={getClass} />
          </div>
          <div className="contain row justify-content-around">
            <Resolution subjectsToApprove={subjectsToApprove} requestsTotalMatchApproved={requestsTotalMatchApproved} />
          </div>
        </div>
      )
  );
}
