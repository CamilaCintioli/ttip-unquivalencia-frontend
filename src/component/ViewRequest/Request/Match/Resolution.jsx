/* eslint-disable no-nested-ternary */
/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { map, isEmpty } from 'lodash';
import {
  Typography,
} from '@material-ui/core';

const resolution = ({ subjectsToApprove, requestsTotalMatchApproved }) => (
  isEmpty(subjectsToApprove) ? isEmpty(requestsTotalMatchApproved)
    ? (
      <Typography display="block" align="center" variant="h3" gutterBottom>
        <span className="badge badge-pill badge-info">Se encontró una solicitud que concide con la actual excepto el (plan de origen)</span>
      </Typography>
    ) : (
      <Typography display="block" align="center" variant="h3" gutterBottom>
        <span className="badge badge-pill badge-success">Se encontró una solicitud que concide con la actual</span>
      </Typography>
    )
    : (
      <div className="card text-white bg-danger mb-3">
        <div className="card-body">
          <Typography variant="button" display="block" gutterBottom>
          Se encontró una solicitud en el historial pero el estudiante requiere
          </Typography>
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
