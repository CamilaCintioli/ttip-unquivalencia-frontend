/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useCallback } from 'react';
import MaterialTable from 'material-table';
import columnsRequest from '../shared/columnsRequest';
import TableSubject from '../shared/TableSubject';
import DeleteRequestDialog from '../Dialogs/DeleteRequestDialog';

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
      <DeleteRequestDialog fileId={fileSelected} request={deletingRequest} isOpen={!!deletingRequest} onClose={onClose} />
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
            tooltip: 'Eliminar solicitud',
            onClick: openDeleteDialog,
            hidden: isSearch && !checkAdmin,
          }),
        ]}
        detailPanel={(rowData) => (
          <TableSubject isSearch={isSearch} row={rowData} handleSearchRequest={handleSearchRequest} />
        )}
      />
    </>
  );
};

export default ListRequest;
