/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/react-in-jsx-scope */
import React, { useCallback, useState } from 'react';
import MaterialTable from 'material-table';
import columnsFile from './columnsFile';
import DeleteFileDialog from '../Dialogs/DeleteFileDialog';
import DuplicateFileDialog from '../Dialogs/DuplicateFileDialog';

const ListFile = ({
  files, handleSearch, addRequest, checkAdmin, checkLetter,
}) => {
  const [deletingFile, setDeletingFile] = useState();

  const openDeleteDialog = useCallback((_, file) => {
    setDeletingFile(file);
  }, []);

  const onClose = useCallback(() => {
    setDeletingFile(null);
  }, []);

  const [duplicatingFile, setDuplicatingFile] = useState();

  const openDuplicateDialog = useCallback((_, file) => {
    setDuplicatingFile(file);
  }, []);

  const onCloseDuplicateDialog = useCallback(() => {
    setDuplicatingFile(null);
  }, []);

  return (
    <>
      <DeleteFileDialog file={deletingFile} isOpen={!!deletingFile} onClose={onClose} />
      <DuplicateFileDialog file={duplicatingFile} isOpen={!!duplicatingFile} onClose={onCloseDuplicateDialog} />
      <MaterialTable
        title="Expedientes"
        columns={columnsFile}
        data={files}
        options={{
          search: false,
          pageSize: 10,
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
          (rowData) => ({
            icon: 'file_copy',
            hidden: !checkAdmin,
            tooltip: 'Duplicar expediente',
            onClick: openDuplicateDialog,
          }),
          (rowData) => ({
            icon: 'send',
            hidden: !checkLetter(rowData.status),
            tooltip: 'Crear carta',
            onClick: (event, rowData) => { },
          }),
          (rowData) => ({
            icon: 'delete',
            tooltip: 'Borrar expediente',
            onClick: openDeleteDialog,
            hidden: !checkAdmin,
          }),
        ]}
      />
    </>
  );
};

export default ListFile;
