/* eslint-disable react/prop-types */
import React from 'react';
import MaterialTable from 'material-table';
import TableSubject from '../shared/TableSubject';

const columnsRequest = [
  { title: 'Materia UNQ', field: 'unqSubject.subject' },
  { title: 'Carrera UNQ', field: 'unqSubject.career' },
  { title: 'Firma', field: 'signature' },
  { title: 'Observacion', field: 'observations' },
  { title: 'Estado', field: 'equivalence' },
  { title: 'Año', field: 'yearOfEquivalence' },

];

const Requests = ({
  title, requests, handleSearchRequest, isSearch,
}) => (
  <MaterialTable
    title={title}
    columns={columnsRequest}
    data={requests}
    options={
      {
        search: false,
        paging: false,
      }
    }
    detailPanel={(rowData) => (
      <TableSubject isSearch={isSearch} row={rowData} handleSearchRequest={handleSearchRequest} />
    )}
  />
);

export default Requests;
