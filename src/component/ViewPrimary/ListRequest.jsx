/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import MaterialTable from 'material-table';
import columnsRequest from '../shared/columnsRequest';
import TableSubject from '../shared/TableSubject';

const ListRequest = ({
  title, requests, handleSearchRequest, checkAdmin, isSearch, pageSize, goFile,
}) => (

  <MaterialTable
    title={title}
    columns={columnsRequest}
    data={requests}
    options={{
      search: true,
      pageSize,
    }}
    actions={[
      (rowData) => ({
        icon: 'delete',
        tooltip: 'Delete User',
        onClick: (event, rowData) => alert(`You want to delete ${rowData.name}`),
        hidden: isSearch && !checkAdmin,
      }),
    ]}
    detailPanel={(rowData) => (
      <TableSubject isSearch={isSearch} row={rowData} handleSearchRequest={handleSearchRequest} />
    )}
  />

);


export default ListRequest;
