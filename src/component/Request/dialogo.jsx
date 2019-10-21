import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import TextField from '../NewRequest/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
}));


export default function FormDialog({ consultEquivalence }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const handleSend = useCallback((values) => console.log(values));

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        aria-label="primary button "
        onClick={handleOpen}
      >
        CONSULTAR
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="md">
        <DialogTitle id="form-dialog-title">Consulta de equivalencia</DialogTitle>
        <DialogContent className={classes.menu}>
          <ConsultForm handleSubmit={handleSend} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

const validateForm = Yup.object().shape({
  email: Yup.string().email('Should be a valid email').required('Required'),
});


function ConsultForm({ handleSubmit, handleClose }) {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ email: '', comment: '' }}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validateForm}
    >
      <Form className={classes.container}>
        <Field name="email" component={TextField} label="Ingrese el mail" />
        <ErrorMessage name="email" />
        <Field name="comment" component={TextField} label="Comentario" variant="outlined" multiline rows="5" className={classes.dense} />
        <div className={classes.buttonGroup}>
          <Button type="submit" color="primary" className={classes.button}>Enviar</Button>
          <Button color="primary" onClick={handleClose} className={classes.button}>Cancelar</Button>
        </div>
      </Form>
    </Formik>
  );
}
