/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import Typography from '@material-ui/core/Typography';
import './NewRequest/NewRequest.css';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import TextField from '../Fields/TextField';
import API from '../../service/FileService';
import FeedbackBar, { openSnackbar } from '../Dashboard/FeedbackBar';
import YearSelectorField from '../Fields/YearSelectorField';

const validateFile = Yup.object().shape({
  file: Yup.object().shape({
    fileNumber: Yup.string()
      .min(3, 'El número de expediente es muy corto')
      .max(20, 'El número de expediente es muy largo')
      .required('Por favor ingrese un número de expediente'),
    name: Yup.string().required('Por favor ingrese el nombre'),
    surname: Yup.string().required('Por favor ingrese el apellido'),
    mail: Yup.string().email('El email debe ser válido'),
    dni: Yup.string().matches(/(0|1|2|3|4|5|6|7|8|9)/, { message: 'Solo números', excludeEmptyString: true }),
    yearNote: Yup.string().required('Por favor seleccione el año de la nota'),
    legajo: Yup.string().required('Por favor introduzca el número de legajo'),
  }),
});


export default function NewFilePage() {
  const history = useHistory();
  const submitFile = useCallback((file) => {
    API.newFile(file)
      .then(() => {
        const notification = { message: 'El expediente ha sido creado con exito', variant: 'success' };
        localStorage.setItem('notificationFile', JSON.stringify(notification));
        history.push('/expediente');
      })
      .catch(() => openSnackbar('Hubo un problema. Intente cargar el expediente de nuevo', 'error'));
  }, [history]);

  return (
    <div className="card text-center">
      <div className="card-body">
        <Typography variant="h4">Nuevo expediente</Typography>
        <hr />
        <Formik
          initialValues={{
            file: {
              fileNumber: '',
              name: '',
              surname: '',
              mail: '',
              dni: '',
              yearNote: '',
              legajo: '',
            },
          }}
          onSubmit={({ file }) => submitFile(file)}
          validationSchema={validateFile}
          className="justify-content-md-center"
        >

          <Form className="form align-items-center">
            <Field name="file" component={StudentField} />
            <hr />
            <Button color="primary" variant="contained" type="submit">Crear expediente</Button>
            <FeedbackBar />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

function StudentField({ field: { name } }) {
  return (
    <>
      <div className="studentForm">
        <Field name={`${name}.fileNumber`} component={TextField} label="Número de expediente" />
        <div className="error"><ErrorMessage name={`${name}.fileNumber`} /></div>
        <Field name={`${name}.name`} component={TextField} label="Nombre" />
        <div className="error"><ErrorMessage name={`${name}.name`} /></div>
        <Field name={`${name}.surname`} component={TextField} label="Apellido" />
        <div className="error"><ErrorMessage name={`${name}.surname`} /></div>
        <Field name={`${name}.mail`} component={TextField} label="Mail" />
        <div className="error"><ErrorMessage name={`${name}.mail`} /></div>
        <Field name={`${name}.dni`} component={TextField} label="DNI" />
        <div className="error"><ErrorMessage name={`${name}.dni`} /></div>
        <Field name={`${name}.yearNote`} component={YearSelectorField} placeholder="Año de la nota" />
        <div className="error"><ErrorMessage name={`${name}.yearNote`} /></div>
        <Field name={`${name}.legajo`} component={TextField} label="Número de legajo" />
        <div className="error"><ErrorMessage name={`${name}.legajo`} /></div>
      </div>
    </>
  );
}
