import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import API from '../../service/FileService';
import { searchRequest } from '../../redux/actions/search';
import { openSnackbar } from '../Dashboard/FeedbackBar';

export default function DeleteRequestDialog({
  request, onClose, isOpen, fileId,
}) {
  const dispatch = useDispatch();
  const handleAccept = useCallback((requestId) => {
    API.deleteRequest(requestId)
      .then(() => {
        openSnackbar('La solicitud ha sido borrada exitosamente', 'success');
        dispatch(searchRequest({ fileId }));
      })
      .catch(() => openSnackbar('Hubo un problema. Intente borrar la solicitud más tarde', 'error'));
    onClose();
  }, [dispatch, fileId, onClose]);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClose}
      >
        <DialogContent>
          <DialogContentText>
                ¿Está seguro que desea borrar la solicitud?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
              Cancelar
          </Button>
          <Button onClick={() => handleAccept(request.id)} color="primary" autoFocus>
              Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DeleteRequestDialog.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  request: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  fileId: PropTypes.number.isRequired,
};

DeleteRequestDialog.defaultProps = {
  request: null,
};
