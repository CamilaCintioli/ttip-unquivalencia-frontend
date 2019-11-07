/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import MaterialTable from 'material-table';
import { map } from 'lodash';
import Search from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import columnsRequest from './columnsRequest';

const TableSecondary = ({ row, handleSearchRequest }) => (
  <div className="row justify-content-md-center">
    <div className="col-8">
      <span><b>Materias de origen</b></span>
      <table className="table table-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Actions</th>
            <th scope="col">Nombre</th>
            <th scope="col">Universidad</th>
            <th scope="col">carrera</th>
            <th scope="col">plan</th>
          </tr>
        </thead>
        <tbody>
          {map(row.originSubjects, (materia) => (
            <tr>
              <td>
                <Fab size="small" color="primary" aria-label="add">
                  <Search onClick={() => handleSearchRequest(row.id, materia.id)} />
                </Fab>
              </td>
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

      (rowData) => ({
        icon: 'delete',
        tooltip: 'Delete User',
        onClick: (event, rowData) => alert(`You want to delete ${rowData.name}`),
        hidden: !checkAdmin,
      }),
    ]}
    detailPanel={(rowData) => (
      <TableSecondary row={rowData} handleSearchRequest={handleSearchRequest} />
    )}
  />

);


export default ListRequest;
