/* eslint-disable react/prop-types */
import React from 'react';
import { map } from 'lodash';
import Search from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';

const TableSubject = ({
  isSearch, row, handleSearchRequest,
}) => (
  <div className="row justify-content-md-center">
    <div className="col-8">
      <span><b>Materias de origen</b></span>
      <table className="table table-sm">
        <thead className="thead-dark">
          <tr>
            {isSearch ? <th scope="col">Aciones</th> : null}
            <th scope="col">Nombre</th>
            <th scope="col">Universidad</th>
            <th scope="col">Carrera</th>
            <th scope="col">Plan</th>
          </tr>
        </thead>
        <tbody>
          {map(row.originSubjects, (materia, i) => (
            <tr key={i}>
              {isSearch
                ? (
                  <td>
                    <Fab size="small" color="primary" aria-label="add">
                      <Search onClick={() => handleSearchRequest(row.id, materia.id)} />
                    </Fab>
                  </td>
                )
                : null}
              <td>{materia.subject}</td>
              <td>{materia.university}</td>
              <td>{materia.career}</td>
              <td>{materia.yearPlan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TableSubject;
