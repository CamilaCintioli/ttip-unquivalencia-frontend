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
        careerUnq: 'TPI',
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
      <Selector placeholder="careerUnq" field="careerUnq" setFieldValue={setFieldValue} />
      <ErrorMessage name="careerUnq" />
      <FormDataSelector options={unqSubjects} placeholder="Selecciona una materia de la UNQ" field="subjectUnq" setFieldValue={setFieldValue} />
      <ErrorMessage name="subjectUnq" />

    </div>
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




