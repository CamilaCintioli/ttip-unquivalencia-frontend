import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import './NewRequest.css';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import TextField from './TextField';
import FormDataSelector from './FormDataSelector';
import Selector from './Selector';
import SubjectSelector from './SubjectSelector';

const validateExternalRequest = Yup.object().shape({
  subjectOriginIds: Yup.string().required('Por favor ingrese una materia'),
  subjectUnqId: Yup.string().required('Por favor ingrese una materia'),
});

export default function ExternalRequestForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ subjectOriginIds: [], subjectUnqId: '' }}
      validationSchema={validateExternalRequest}
      onSubmit={(values) => onSubmit(values.subjectOriginIds, values.subjectUnqId)}
    >
      <Form>
        <Field name="subjectOriginIds" component={SubjectSelector} />
        <Field name="subjectUnqId" component={SubjectSelector} />
        <Button color="primary" variant="contained" type="submit"> Cargar solicitud</Button>
      </Form>
    </Formik>
  );
}
