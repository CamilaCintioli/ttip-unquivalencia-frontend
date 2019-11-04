/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import MaterialTable from 'material-table';
import { map } from 'lodash';
import columnsRequest from './columnsRequest';

const TableSecondary = ({ row }) => (
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
          {map(row.originSubjects, (materia) => (
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
);


const ListRequest = ({ requests, handleSearchRequest, checkAdmin }) => (

  <MaterialTable
    title="Solicitudes"
    columns={columnsRequest}
    data={requests}
    options={{
      search: true,
      pageSize: 10,
    }}
    actions={[
      {
        icon: 'search',
        tooltip: 'buscador',
        onClick: (event, rowData) => {
          handleSearchRequest(rowData.id);
        },
      },
      (rowData) => ({
        icon: 'delete',
        tooltip: 'Delete User',
        onClick: (event, rowData) => alert(`You want to delete ${rowData.name}`),
        hidden: !checkAdmin,
      }),
    ]}
    detailPanel={(rowData) => (
      <TableSecondary row={rowData} />
    )}
  />

);


export default ListRequest;
