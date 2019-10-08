import React from 'react';
import {
  Formik, Form, Field, FieldArray, getIn, ErrorMessage,
} from 'formik';
import TextFieldUI from '@material-ui/core/TextField';
import './NewRequest.css';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import * as Yup from 'yup';
import API from '../../service/FileService';


const emptyExternalRequest = {
  universityOrigin: '',
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
};

const emptyInternalRequest = {
  universityOrigin: 'Universidad Nacional de Quilmes',
  careerOrigin: '',
  yearPlanOrigin: '',
  subjectOrigin: '',
  yearOfApproval: '',
  careerUnq: '',
  subjectUnq: '',
};

const validateSchema = Yup.object().shape({
  student: Yup.object().shape({
    fileNumber: Yup.string()
      .min(3, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    name: Yup.string().required('Required'),
    surname: Yup.string().required('Required'),
    mail: Yup.string().email('Should be a valid email'),
    dni: Yup.string().matches(/(0|1|2|3|4|5|6|7|8|9)/, { message: 'Numbers only', excludeEmptyString: true }),
  }),
});


export default function NewFilePage() {
  return (
    <Formik
      initialValues={{
        student: {
          fileNumber: '',
          name: '',
          surname: '',
          mail: '',
          dni: '',
        },
        equivalenceMode: 'Externa',
        requests: [],
      }}
      onSubmit={
          (values) => {
            const file = Object.assign(values.student);
            file.universityOrigin = values.requests[0].universityOrigin;
            file.requests = values.requests;
            API.newFile(file)
              .then(() => { alert('Las solicitudes han sido cargadas exitosamente'); })
              .catch((response) => console.log(response));
          }
}
      validationSchema={validateSchema}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Field name="student" component={StudentField} />
          <EquivalenceModeSelector onChange={setFieldValue} />
          {values.equivalenceMode === 'Interna' && <FieldArray name="requests" component={InternalRequestsFieldArray} />}
          {values.equivalenceMode === 'Externa' && <FieldArray name="requests" component={ExternalRequestsFieldArray} />}


          <Button color="primary" variant="contained" type="submit">Cargar solicitudes</Button>
        </Form>
      )}

    </Formik>
  );
}

function ExternalRequestsFieldArray({
  form: { values }, push, name, ...props
}) {
  const requests = getIn(values, name);

  return (
    <div>
      { requests.map((request, index) => (
        <div>
          <h4>
            Solicitud
            {' '}
            {index + 1}
          </h4>
          <Field name={`${name}[${index}]`} component={ExternalRequestField} />

        </div>
      ))}
      <Button color="primary" variant="outlined" onClick={() => push(emptyExternalRequest)}>Agregar solicitud externa</Button>
    </div>
  );
}

function InternalRequestsFieldArray({
  form: { values }, push, name, ...props
}) {
  const requests = getIn(values, name);

  return (
    <div>
      { requests.map((request, index) => (
        <div>
          <h4>
Solicitud
            {' '}
            {index + 1}
          </h4>
          <Field name={`${name}[${index}]`} component={InternalRequestField} />

        </div>
      ))}
      <Button color="primary" variant="outlined" onClick={() => push(emptyInternalRequest)}>Agregar solicitud interna</Button>
    </div>
  );
}


function InternalRequestField({ field: { name, value }, form: { setFieldValue } }) {
  return (
    <div className="studentForm">
      <Field name={`${name}.universityOrigin`} component={TextField} label="Universidad de origen" />
      <Field name={`${name}.careerOrigin`} component={TextField} label="Carrera de origen" />
      <Field name={`${name}.yearPlanOrigin`} component={TextField} label="Año de plan" />
      <Field name={`${name}.subjectOrigin`} component={TextField} label="Materia de origen" />
      <Field name={`${name}.yearOfApproval`} component={TextField} label="Año de aprobación" />
      <Field name={`${name}.careerUnq`} component={TextField} label="Carrera UNQ" />
      <Field name={`${name}.subjectUnq`} component={TextField} label="Materia UNQ" />
    </div>
  );
}

function ExternalRequestField({ field: { name, value }, form: { setFieldValue } }) {
  return (
    <>
      <div className="studentForm">
        <Field name={`${name}.universityOrigin`} component={TextField} label="Universidad de origen" />
        <Field name={`${name}.careerOrigin`} component={TextField} label="Carrera de origen" />
        <Field name={`${name}.yearPlanOrigin`} component={TextField} label="Año origen" />
        <Field name={`${name}.subjectOrigin`} component={TextField} label="Materia de origen" />
        <Field name={`${name}.courseMode`} component={TextField} label="Modalidad del curso" />
        <Field name={`${name}.subjectOriginWeeklyHours`} component={TextField} label="Horas semanales de la materia" />
        <Field name={`${name}.subjectOriginTotalHours`} component={TextField} label="Horas totales de la materia" />
        <Field name={`${name}.yearOfEquivalence`} component={TextField} label="Año de aprobación" />
        <Field name={`${name}.careerUnq`} component={TextField} label="Carrera UNQ" />
        <Field name={`${name}.subjectUnq`} component={TextField} label="Materia UNQ" />
        <Field name={`${name}.unqSubjectWeeklyHours`} component={TextField} label="Horas semanales de materia UNQ" />
        <Field name={`${name}.unqSubjectTotalHours`} component={TextField} label="Horas totales de materia UNQ" />
        <Field name={`${name}.subjectCoreUnq`} component={TextField} label="Nucleo de la materia" />
        <Field name={`${name}.credits`} component={TextField} label="Creditos" />

      </div>
    </>
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

function EquivalenceModeSelector({ onChange }) {
  const equivalenceModes = [{ label: 'Externa', value: false }, { label: 'Interna', value: true }];
  const handleChange = (value) => {
    onChange('equivalenceMode', value.label);
  };
  return (

    <Select
      className="selector"
      classNamePrefix="select"
      defaultValue={equivalenceModes[0]}
      isDisabled={false}
      isLoading={false}
      isClearable={false}
      isSearchable
      options={equivalenceModes}
      onChange={handleChange}

    />

  );
}
