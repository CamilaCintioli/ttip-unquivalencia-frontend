import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import './NewRequest.css';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import TextField from './TextField';

const validateExternalRequest = Yup.object().shape({
  subjectOrigin: Yup.string().required('Required'),
  careerUnq: Yup.string().required('Required'),
  subjectUnq: Yup.string().required('Required'),
});

export default function ExternalRequestForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        careerOrigin: '',
        yearPlanOrigin: '',
        subjectOrigin: '',
        courseMode: '',
        subjectOriginWeeklyHours: '',
        subjectOriginTotalHours: '',
        yearOfEquivalence: '',
        careerUnq: '',
        subjectUnq: '',
        subjectWeeklyHoursUnq: '',
        subjectTotalHoursUnq: '',
        subjectCoreUnq: '',
        credits: '',
      }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validateExternalRequest}
    >
      <Form>
        <Field component={ExternalRequestField} />
        <Button color="primary" variant="contained" type="submit">Cargar solicitud</Button>
      </Form>

    </Formik>
  );
}

function ExternalRequestField({ field: { name, value }, form: { setFieldValue } }) {
  return (
    <>
      <div className="studentForm">
        <Field name="careerOrigin" component={TextField} label="Carrera de origen" />
        <Field name="yearPlanOrigin" component={TextField} label="Año origen" />
        <Field name="subjectOrigin" component={TextField} label="Materia de origen" />
        <ErrorMessage name="subjectOrigin" />
        <Field name="courseMode" component={TextField} label="Modalidad del curso" />
        <Field name="subjectOriginWeeklyHours" component={TextField} label="Horas semanales de la materia" />
        <Field name="subjectOriginTotalHours" component={TextField} label="Horas totales de la materia" />
        <Field name="yearOfEquivalence" component={TextField} label="Año de aprobación" />
        <Field name="careerUnq" component={TextField} label="Carrera UNQ" />
        <ErrorMessage name="careerUnq" />
        <Field name="subjectUnq" component={TextField} label="Materia UNQ" />
        <ErrorMessage name="subjectUnq" />
        <Field name="unqSubjectWeeklyHours" component={TextField} label="Horas semanales de materia UNQ" />
        <Field name="unqSubjectTotalHours" component={TextField} label="Horas totales de materia UNQ" />
        <Field name="subjectCoreUnq" component={TextField} label="Nucleo de la materia" />
        <Field name="credits" component={TextField} label="Creditos" />

      </div>
    </>
  );
}

