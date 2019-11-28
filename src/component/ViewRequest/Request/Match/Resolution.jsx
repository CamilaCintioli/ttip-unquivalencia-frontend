/* eslint-disable no-nested-ternary */
/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { map, isEmpty } from 'lodash';

const resolution = ({ subjectsToApprove, requestsTotalMatchApproved }) => (
  isEmpty(subjectsToApprove) ? isEmpty(requestsTotalMatchApproved)
    ? (
      <h1><span className="badge badge-pill badge-info">Match Parcial</span></h1>
    ) : (
      <h1><span className="badge badge-pill badge-success">Match Total</span></h1>
    )
    : (
      <div className="card text-white bg-danger mb-3">
        <div className="card-body">
          <h4><b>Requiere estas materias</b></h4>
          <hr />
          {map(subjectsToApprove, (name) => (
            <h6 className="card-text text-center">
              <b>
                {name}
              </b>
            </h6>
          ))}
        </div>
      </div>
    )
);

export default resolution;
