/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import MaterialTable from 'material-table';
import columnsFile from './columnsFile';

const ListFile = ({
  files, handleSearch, addRequest, checkAdmin, checkLetter,
}) => (

  <MaterialTable
    title="Listado"
    columns={columnsFile}
    data={files}
    options={{
      search: false,
      paging: false,
    }}

    actions={[
      {
        icon: 'search',
        tooltip: 'buscador solicitud',
        onClick: (event, rowData) => {
          handleSearch(rowData.id, rowData.fileNumber);
        },
      },
      {
        icon: 'add_circle',
        hidden: !checkAdmin,
        tooltip: 'agregar solicitud',
        onClick: (event, rowData) => {
          addRequest(rowData.fileNumber);
        },
      },
      {
        icon: 'file_copy',
        hidden: !checkAdmin,
        tooltip: 'Duplicar expediente',
        onClick: (event, rowData) => { },
      },
      (rowData) => ({
        icon: 'send',
        hidden: !checkLetter(rowData.status),
        tooltip: 'Crear carta',
        onClick: (event, rowData) => { },
      }),
      (rowData) => ({
        icon: 'delete',
        tooltip: 'Delete User',
        onClick: (event, rowData) => alert(`You want to delete ${rowData.name}`),
        hidden: !checkAdmin,
      }),
    ]}
  />

);

export default ListFile;
