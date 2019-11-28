import React, { useState, useCallback, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import TextField from '../../../Fields/TextField';
import { Selector, createOptions } from '../../../NewRequest/Selectors/Selector';
import API from '../../../../service/SearchService';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'flex-end',
  },
  consultButton: {
    marginRight: theme.spacing(2),
  },
  error: {
    color: 'red',
  },
  pepe: {
    zIndex: '100 !important',
  },
}));


export default function FormDialog({ consultEquivalence }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const handleSend = useCallback((email, message) => { consultEquivalence(email, message); handleClose(); });
  const [mails, setMails] = useState([]);

  useEffect(() => {
    API.searchMailsFromUsers()
      .then((response) => setMails(response.data));
  }, [setMails]);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        aria-label="primary button "
        onClick={handleOpen}
        className={classes.consultButton}
      >
      CONSULTAR
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="md">
        <DialogTitle id="form-dialog-title">Consulta de equivalencia</DialogTitle>
        <DialogContent className={classes.menu}>
          <ConsultForm handleSubmit={handleSend} handleClose={handleClose} mails={createOptions(mails)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

const validateForm = Yup.object().shape({
  email: Yup.string().email('Debe ser un email válido').required('Por favor seleccione un email'),
});


function ConsultForm({ handleSubmit, handleClose, mails }) {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ email: '', message: '' }}
      onSubmit={({ email, message }) => handleSubmit(email, message)}
      validationSchema={validateForm}
    >

      {({ setFieldValue }) => (
        <Form className={classes.container}>
          <div className={classes.pepe}>
            <Selector options={mails} onChange={(email) => setFieldValue('email', email)} placeholder="Seleccione un email" />
          </div>
          <div className={classes.error}>
            <ErrorMessage name="email" />
          </div>
          <Field name="message" component={TextField} label="Comentario" variant="outlined" multiline rows="5" className={classes.dense} />
          <div className={classes.buttonGroup}>
            <Button type="submit" color="primary" className={classes.button}>Enviar</Button>
            <Button color="primary" onClick={handleClose} className={classes.button}>Cancelar</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

// http://localhost:8000/api/v1/consult/requests/2
// ===> /consult/requests/1/subject/2
