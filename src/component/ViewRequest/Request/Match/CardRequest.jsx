/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { map } from 'lodash';
import Typography from '@material-ui/core/Typography';

const CardRequest = ({ requests, getClass }) => (
  <div className="card-columns">
    {map(requests, (request) => (
      <div className={getClass()}>
        <Typography className="text-center" variant="h3" gutterBottom>
          <b>{request.subject}</b>
        </Typography>
        <hr />
        <div className="card-body">
          <Typography className="card-title" variant="h5" gutterBottom>
            <b>Carrera:</b>
            {' '}
            {request.career}
          </Typography>
          <Typography className="card-title" variant="h5" gutterBottom>
            <b>
        Plan:
            </b>
            {' '}
            {request.year_plan}
          </Typography>
          <Typography className="card-title" variant="h5" gutterBottom>
            <b>
        Cursada:
            </b>
            {' '}

            {request.course_mode}
          </Typography>
          <Typography className="card-title" variant="h5" gutterBottom>
            <b>
        Horas Semanales:
            </b>
            {' '}

            {request.subject_weekly_hours}
          </Typography>
          <Typography className="card-title" variant="h5" gutterBottom>
            <b>
        Horas Total:
            </b>
            {' '}

            {request.subject_total_hours}
          </Typography>
        </div>
      </div>
    ))}
  </div>
);

export default CardRequest;
