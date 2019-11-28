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
import TextField from '../Fields/TextField';
import YearSelectorField from '../Fields/YearSelectorField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    color: 'red',
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
  consultButton: {
    marginRight: theme.spacing(2),
  },
}));


export default function CreateSubjectDialog({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const handleSend = useCallback((subject) => { onSubmit(subject); handleClose(); });

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        aria-label="primary button "
        onClick={handleOpen}
        className={classes.consultButton}
      >
        NUEVA MATERIA
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="md">
        <DialogTitle id="form-dialog-title">Cargar materia</DialogTitle>
        <DialogContent className={classes.menu}>
          <NewSubjectForm handleSubmit={handleSend} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

const validationSchema = Yup.object().shape({
  code: Yup.string().required('Por favor ingrese el código de la materia'),
  university: Yup.string().required('Por favor ingrese una universidad'),
  career: Yup.string().required('Por favor ingrese una carrera'),
  yearPlan: Yup.string().required('Por favor seleccione un año de plan'),
  subject: Yup.string().required('Por favor ingrese una materia'),
  url: Yup.string().url('Ingrese una dirección valida').required('Por favor ingrese el url del plan'),
});

function NewSubjectForm({ handleSubmit, handleClose }) {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        code: '',
        university: '',
        career: '',
        yearPlan: '',
        subject: '',
        courseMode: '',
        subjectWeeklyHours: '',
        subjectTotalHours: '',
        subjectCore: '',
        credits: '',
        url: '',
      }}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validationSchema}
    >
      <Form className={classes.container}>
        <Field name="code" component={TextField} label="Código" />
        <ErrorMessage name="code" />
        <Field name="subject" component={TextField} label="Nombre" />
        <ErrorMessage name="subject" />
        <Field name="university" component={TextField} label="Universidad" />
        <ErrorMessage name="university" />
        <Field name="career" component={TextField} label="Carrera" />
        <ErrorMessage name="career" />
        <Field name="yearPlan" component={YearSelectorField} placeholder="Año del plan" />
        <ErrorMessage name="yearPlan" />
        <Field name="courseMode" component={TextField} label="Modalidad" />
        <Field name="subjectWeeklyHours" component={TextField} label="Horas semanales" />
        <Field name="subjectTotalHours" component={TextField} label="Horas totales" />
        <Field name="subjectCore" component={TextField} label="Núcleo" />
        <Field name="credits" component={TextField} label="Creditos" />
        <Field name="url" component={TextField} label="URL del plan" />
        <ErrorMessage name="url" />
        <div className={classes.buttonGroup}>
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>Cargar materia</Button>
          <Button color="primary" variant="outlined" onClick={handleClose} className={classes.button}>Cancelar</Button>
        </div>
      </Form>
    </Formik>
  );
}
