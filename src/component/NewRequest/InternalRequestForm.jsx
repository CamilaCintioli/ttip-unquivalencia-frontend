import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import './NewRequest.css';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import TextField from './TextField';

const validateInternalRequest = Yup.object().shape({
  subjectOrigin: Yup.string().required('Required'),
  careerUnq: Yup.string().required('Required'),
  subjectUnq: Yup.string().required('Required'),
});

export default function InternalRequestForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        careerOrigin: '',
        yearPlanOrigin: '',
        subjectOrigin: '',
        yearOfApproval: '',
        careerUnq: '',
        subjectUnq: '',
      }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validateInternalRequest}
    >
      <Form>
        <Field component={InternalRequestField} />
        <Button color="primary" variant="contained" type="submit">Cargar solicitud</Button>
      </Form>

    </Formik>
  );
}

function InternalRequestField({ field: { name, value }, form: { setFieldValue } }) {
  return (
    <div className="studentForm">
      <Field name="careerOrigin" component={TextField} label="Carrera de origen" />
      <Field name="yearPlanOrigin" component={TextField} label="Año de plan" />
      <Field name="subjectOrigin" component={TextField} label="Materia de origen" />
      <ErrorMessage name="subjectOrigin" />
      <Field name="yearOfApproval" component={TextField} label="Año de aprobación" />
      <Field name="careerUnq" component={TextField} label="Carrera UNQ" />
      <ErrorMessage name="careerUnq" />
      <Field name="subjectUnq" component={TextField} label="Materia UNQ" />
      <ErrorMessage name="subjectUnq" />
    </div>
  );
}
