/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { map } from 'lodash';

const CardRequest = ({ requests, getClass }) => (
  <div className="card-columns">
    {map(requests, (request) => (
      <div className={getClass()}>
        <h3 className="text-center">{request.subject}</h3>
        <hr />
        <div className="card-body">
          <p className="card-title">
            <b>Carrera:</b>
            {request.career}
          </p>
          <p className="card-text">
            <b>
        Plan:
            </b>
            {request.year_plan}
          </p>
          <p className="card-text">
            <b>
        Cursada:
            </b>
            {request.course_mode}
          </p>
          <p className="card-text">
            <b>
        Horas Semanales:
            </b>
            {request.subject_weekly_hours}
          </p>
          <p className="card-text">
            <b>
        Horas Total:
            </b>
            {request.subject_total_hours}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default CardRequest;
