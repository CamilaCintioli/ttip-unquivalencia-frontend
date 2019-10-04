import React from 'react';
import {
  Formik, Form, Field, FieldArray, getIn,
} from 'formik';
import TextFieldUI from '@material-ui/core/TextField';
import './NewRequest.css';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import API from '../../service/FileService';


const emptyExternalRequest = {
  universityOrigin: '',
  careerOrigin: '',
  originYear: '',
  subjectOrigin: '',
  courseMode: '',
  subjectOriginWeeklyHours: '',
  subjectOriginTotalHours: '',
  yearOfApproval: '',
  universityCareer: '',
  subjectUnq: '',
  unqSubjectWeeklyHours: '',
  unqSubjectTotalHours: '',
  subjectCore: '',
  credits: '',
};

const emptyInternalRequest = {
  universityOrigin: 'Universidad Nacional de Quilmes',
  careerOrigin: '',
  yearPlan: '',
  subjectOrigin: '',
  yearOfApproval: '',
  universityCareer: '',
  subjectUnq: '',
};

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
            const file = Object.assign(values.student, values.requests[0]);
            API.newFile(file)
              .then(() => { alert('Las solicitudes han sido cargadas exitosamente'); })
              .catch((response) => console.log(response));
          }

      }
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
      <Field name={`${name}.yearPlan`} component={TextField} label="Año de plan" />
      <Field name={`${name}.subjectOrigin`} component={TextField} label="Materia de origen" />
      <Field name={`${name}.yearOfApproval`} component={TextField} label="Año de aprobación" />
      <Field name={`${name}.universityCareer`} component={TextField} label="Carrera UNQ" />
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
        <Field name={`${name}.originYear`} component={TextField} label="Año origen" />
        <Field name={`${name}.subjectOrigin`} component={TextField} label="Materia de origen" />
        <Field name={`${name}.courseMode`} component={TextField} label="Modalidad del curso" />
        <Field name={`${name}.subjectOriginWeeklyHours`} component={TextField} label="Horas semanales de la materia" />
        <Field name={`${name}.subjectOriginTotalHours`} component={TextField} label="Horas totales de la materia" />
        <Field name={`${name}.yearOfApproval`} component={TextField} label="Año de aprobación" />
        <Field name={`${name}.universityCareer`} component={TextField} label="Carrera UNQ" />
        <Field name={`${name}.subjectUnq`} component={TextField} label="Materia UNQ" />
        <Field name={`${name}.unqSubjectWeeklyHours`} component={TextField} label="Horas semanales de materia UNQ" />
        <Field name={`${name}.unqSubjectTotalHours`} component={TextField} label="Horas totales de materia UNQ" />
        <Field name={`${name}.subjectCore`} component={TextField} label="Nucleo de la materia" />
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
        <Field name={`${name}.name`} component={TextField} label="Nombre" />
        <Field name={`${name}.surname`} component={TextField} label="Apellido" />
        <Field name={`${name}.mail`} component={TextField} label="Mail" />
        <Field name={`${name}.dni`} component={TextField} label="DNI" />
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
