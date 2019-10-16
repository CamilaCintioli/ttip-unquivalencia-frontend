import React, { useCallback } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import Typography from '@material-ui/core/Typography';
import TextFieldUI from '@material-ui/core/TextField';
import './NewRequest.css';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import API from '../../service/FileService';


const validateFile = Yup.object().shape({
  file: Yup.object().shape({
    fileNumber: Yup.string()
      .min(3, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    name: Yup.string().required('Required'),
    surname: Yup.string().required('Required'),
    mail: Yup.string().email('Should be a valid email'),
    dni: Yup.string().matches(/(0|1|2|3|4|5|6|7|8|9)/, { message: 'Numbers only', excludeEmptyString: true }),
    universityOrigin: Yup.string().required('Required'),
    yearNote: Yup.string().required('Required'),
  }),
});


export default function NewFilePage() {
  const submitFile = useCallback((file) => {
    API.newFile(file)
      .then(() => { alert('El expediente ha sido cargado con exito'); })
      .catch((response) => console.log(response));
  });

  return (
    <Formik
      initialValues={{
        file: {
          fileNumber: '',
          name: '',
          surname: '',
          mail: '',
          dni: '',
          universityOrigin: '',
          yearNote: '',
          requests: [],
        },
      }}
      onSubmit={({ file }) => submitFile(file)}
      validationSchema={validateFile}
    >

      <Form>
        <Typography variant="h4">Nuevo expediente</Typography>
        <Field name="file" component={StudentField} />
        <Button color="primary" variant="contained" type="submit">Crear expediente</Button>
      </Form>


    </Formik>
  );
}

function StudentField({ field: { name, value }, form: { setFieldValue } }) {
  return (
    <>
      <div className="studentForm">
        <Field name={`${name}.fileNumber`} component={TextField} label="Nro de expediente" />
        <ErrorMessage name={`${name}.fileNumber`} />
        <Field name={`${name}.name`} component={TextField} label="Nombre" />
        <ErrorMessage name={`${name}.name`} />
        <Field name={`${name}.surname`} component={TextField} label="Apellido" />
        <ErrorMessage name={`${name}.surname`} />
        <Field name={`${name}.mail`} component={TextField} label="Mail" />
        <ErrorMessage name={`${name}.mail`} />
        <Field name={`${name}.dni`} component={TextField} label="DNI" />
        <ErrorMessage name={`${name}.dni`} />
        <Field name={`${name}.universityOrigin`} component={TextField} label="Universidad de origen" />
        <ErrorMessage name={`${name}.universityOrigin`} />
        <Field name={`${name}.yearNote`} component={TextField} label="Año de la nota" />
        <ErrorMessage name={`${name}.yearNote`} />
      </div>
    </>
  );
}


function TextField({ form: { handleFocus, handleChange, handleBlur }, field: { name, value }, ...props }) {
  return (
    <TextFieldUI
      {...props}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
}
