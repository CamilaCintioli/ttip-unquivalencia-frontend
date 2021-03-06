import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import API from '../../service/FileService';
import { openSnackbar } from '../Dashboard/FeedbackBar';

export default function DeleteFileDialog({
  handleSearchFile, file, onClose, isOpen,
}) {
  const dispatch = useDispatch();
  const handleAccept = useCallback((fileId) => {
    API.deleteFile(fileId)
      .then(() => {
        openSnackbar('El expediente ha sido borrado exitosamente', 'success');
        handleSearchFile();
      })
      .catch(() => openSnackbar('Hubo un problema. Intente borrar el expediente más tarde', 'error'));

    onClose();
  }, [handleSearchFile, onClose]);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClose}
      >
        <DialogContent>
          <DialogContentText>
                ¿Está seguro que desea borrar el expediente
            {' '}
            {file ? file.fileNumber : null}
?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
              Cancelar
          </Button>
          <Button onClick={() => handleAccept(file.id)} color="primary" autoFocus>
              Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DeleteFileDialog.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  file: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

DeleteFileDialog.defaultProps = {
  file: null,
};
