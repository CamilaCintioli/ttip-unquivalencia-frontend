/* eslint-disable no-nested-ternary */
/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { map, isEmpty } from 'lodash';

const resolution = ({ subjectsToApprove, requestsTotalMatchApproved }) => (
  isEmpty(subjectsToApprove) ? isEmpty(requestsTotalMatchApproved)
    ? (
      <h1><span className="badge badge-pill badge-info">No coincide los planes</span></h1>
    ) : (
      <h1><span className="badge badge-pill badge-success">Coincide</span></h1>
    )
    : (
      <div className="card text-white bg-danger mb-3">
        <div className="card-body">
          <h4><b>Falta:</b></h4>
          {map(subjectsToApprove, (name) => (
            <p className="card-text">
              <b>
                {name}
              </b>
            </p>
          ))}
        </div>
      </div>
    )
);

export default resolution;
