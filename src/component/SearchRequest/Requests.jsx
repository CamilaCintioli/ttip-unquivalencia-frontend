/* eslint-disable react/prop-types */
import React from 'react';
import MaterialTable from 'material-table';
import TableSubject from '../shared/TableSubject';

const columnsRequest = [
  { title: 'M.Unq', field: 'unqSubject.subject' },
  { title: 'Carreta Unq', field: 'unqSubject.career' },
  { title: 'Asignacion', field: 'signature' },
  { title: 'Observacion', field: 'observations' },
  { title: 'Estado', field: 'equivalence' },
];

const Requests = ({
  title, requests, handleSearchRequest, isSearch, pageSize,
}) => (
  <MaterialTable
    title={title}
    columns={columnsRequest}
    data={requests}
    options={{
      search: false,
      pageSize,
    }}
    detailPanel={(rowData) => (
      <TableSubject isSearch={isSearch} row={rowData} handleSearchRequest={handleSearchRequest} />
    )}
  />
);

export default Requests;
