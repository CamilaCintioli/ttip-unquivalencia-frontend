import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import API from '../../service/FileService';
import { searchFile } from '../../redux/actions/search';
import { openSnackbar } from '../Dashboard/FeedbackBar';

export default function DuplicateFileDialog({ file, onClose, isOpen }) {
  const dispatch = useDispatch();
  const handleAccept = useCallback((fileId) => {
    API.duplicateFile(fileId)
      .then(() => {
        openSnackbar('El expediente ha sido duplicado exitosamente', 'success');
        dispatch(searchFile());
      })
      .catch(() => openSnackbar('Hubo un problema. Intente duplicar el expediente más tarde', 'error'));
    onClose();
  }, [dispatch, onClose]);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClose}
      >
        <DialogContent>
          <DialogContentText>
                ¿Está seguro que desea duplicar el expediente
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

DuplicateFileDialog.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  file: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
