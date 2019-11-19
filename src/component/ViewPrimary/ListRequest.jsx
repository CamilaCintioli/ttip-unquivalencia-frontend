/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useCallback } from 'react';
import MaterialTable from 'material-table';
import { map } from 'lodash';
import Search from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import columnsRequest from './columnsRequest';
import DeleteRequestDialog from '../Dialogs/DeleteRequestDialog';

const TableSecondary = ({ isSearch, row, handleSearchRequest }) => (
  <div className="row justify-content-md-center">
    <div className="col-8">
      <span><b>Materias de origen</b></span>
      <table className="table table-sm">
        <thead className="thead-dark">
          <tr>
            {isSearch ? <th scope="col">Actions</th> : null}
            <th scope="col">Nombre</th>
            <th scope="col">Universidad</th>
            <th scope="col">carrera</th>
            <th scope="col">plan</th>
          </tr>
        </thead>
        <tbody>
          {map(row.originSubjects, (materia) => (
            <tr>
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


const ListRequest = ({
  title, requests, handleSearchRequest, checkAdmin, isSearch, pageSize, fileSelected,
}) => {
  const [deletingRequest, setDeletingRequest] = useState();

  const openDeleteDialog = useCallback((_, request) => {
    setDeletingRequest(request);
  }, []);

  const onClose = useCallback(() => {
    setDeletingRequest(null);
  }, []);

  return (
    <>
      <DeleteRequestDialog request={deletingRequest} isOpen={!!deletingRequest} onClose={onClose} fileId={fileSelected} />
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
            tooltip: 'Borrar solicitud',
            onClick: openDeleteDialog,
            hidden: isSearch && !checkAdmin,
          }),
        ]}
        detailPanel={(rowData) => (
          <TableSecondary isSearch={isSearch} row={rowData} handleSearchRequest={handleSearchRequest} />
        )}
      />
    </>
  );
};

export default ListRequest;
