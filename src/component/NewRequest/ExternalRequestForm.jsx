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
        careerUnq: 'TPI',
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
        <Selector placeholder="careerUnq" field="careerUnq" setFieldValue={setFieldValue} />
        <ErrorMessage name="careerUnq" />
        <FormDataSelector options={unqSubjects} placeholder="Selecciona una materia de la UNQ" field="subjectUnq" setFieldValue={setFieldValue} />
        <ErrorMessage name="subjectUnq" />
        <Field name="unqSubjectWeeklyHours" component={TextField} label="Horas semanales de materia UNQ" />
        <Field name="unqSubjectTotalHours" component={TextField} label="Horas totales de materia UNQ" />
        <Field name="subjectCoreUnq" component={TextField} label="Nucleo de la materia" />
        <Field name="credits" component={TextField} label="Creditos" />

      </div>
    </>
  );
}


const unqSubjects = [
  { label: 'Introducción a la progamación', value: 'Introduccion a la programacion' },
  { label: 'Organización de Computadoras', value: 'Organización de Computadoras' },
  { label: 'Matemática', value: 'Matemática' },
  { label: 'Programación con Objetos I', value: 'Programación con Objetos I' },
  { label: 'Bases de datos', value: 'Bases de datos' },
  { label: 'Estructuras de datos', value: 'Estructuras de datos' },
  { label: 'Programación con Objetos II', value: 'Programación con Objetos II' },
  { label: 'Redes de computadoras', value: 'Redes de computadoras' },
  { label: 'Sistemas operativos', value: 'Sistemas operativos' },
  { label: 'Programación concurrente', value: 'Programación concurrente' },
  { label: 'Matemática II', value: 'Matemática II' },
  { label: 'Elementos de Ingeniería de Software', value: 'Elementos de Ingeniería de Software' },
  { label: 'Construcción de Interfaces de Usuario', value: 'Construcción de Interfaces de Usuario' },
  { label: 'Estrategias de Persistencia', value: 'Estrategias de Persistencia' },
  { label: 'Programación funcional', value: 'Programación funcional' },
  { label: 'Desarrollo de aplicaciones', value: 'Desarrollo de aplicaciones' },
  { label: 'Seguridad Informática', value: 'Seguridad Informática' },

];