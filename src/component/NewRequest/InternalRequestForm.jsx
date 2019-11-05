import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import './NewRequest.css';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import SubjectSelector from './SubjectSelector';

const validateInternalRequest = Yup.object().shape({
  subjectOriginUnqIds: Yup.string().required('Por favor seleccione una materia'),
  subjectUnqId: Yup.string().required('Por favor seleccione una materia'),
});

export default function InternalRequestForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ subjectOriginUnqIds: [], subjectUnqId: '' }}
      validationSchema={validateInternalRequest}
      onSubmit={(values) => onSubmit(values.subjectOriginUnqIds, values.subjectUnqId)}
    >
      <Form>
        <Field name="subjectOriginUnqIds" component={SubjectSelector} />
        <Field name="subjectUnqId" component={SubjectSelector} />
        <Button color="primary" variant="contained" type="submit"> Cargar solicitud</Button>
      </Form>
    </Formik>
  );
}
