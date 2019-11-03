/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import MaterialTable from 'material-table';
import { map } from 'lodash';

const ListRequest = ({ requests, handleSearchRequest }) => (

  <MaterialTable
    title="Solicitud"
    columns={[
      { title: 'Materia Unq', field: 'unqSubject.subject' },
      { title: 'Asignacion', field: 'signature' },
      { title: 'Observacion', field: 'observations' },
      { title: 'Estado', field: 'equivalence' },

    ]}
    data={requests}
    options={{
      search: true,
    }}
    actions={[
      {
        icon: 'search',
        tooltip: 'buscador',
        onClick: (event, rowData) => {
          handleSearchRequest(rowData.id);
        },
      },
    ]}
    detailPanel={(rowData) => (
      <div className="row justify-content-md-center">
        <div className="col-8">
          <span><b>Materias de origen</b></span>
          <table className="table table-sm">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Universidad</th>
                <th scope="col">carrera</th>
                <th scope="col">plan</th>
              </tr>
            </thead>
            <tbody>
              {map(rowData.originSubjects, (materia) => (
                <tr>
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

    )}
  />

);

export default ListRequest;
