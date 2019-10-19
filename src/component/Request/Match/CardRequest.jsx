/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { map } from 'lodash';

const CardRequest = ({ requests, getClass }) => (
  map(requests, (request) => (
    <div className={getClass()}>
      <div className="card-header ">
        <h4>{request.subjectOrigin}</h4>
      </div>
      <div className="card-body">
        <p className="card-title">
          <b>Carrera:</b>
          {request.careerOrigin}
        </p>
        <p className="card-text">
          <b>
        Plan:
          </b>
          {request.yearPlanOrigin}
        </p>
        <p className="card-text">
          <b>
        Cursada:
          </b>
          {request.courseMode}
        </p>
        <p className="card-text">
          <b>
        Horas Semanales:
          </b>
          {request.subjectOriginWeeklyHours}
        </p>
        <p className="card-text">
          <b>
        Horas Total:
          </b>
          {request.subjectOriginTotalHours}
        </p>
        <p className="card-text">
          <b>
        Asignada:
          </b>
          {request.signature}
        </p>
      </div>
    </div>
  ))
);

export default CardRequest;
