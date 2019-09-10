import React, { Fragment } from 'react';
import StudentDataForm from './StudentDataForm';
import UniversityDataForm from './UniversityDataForm';
import axios from 'axios';
import './NewRequest.css';
import { Button } from 'react-bootstrap';

const universityOptions = [{ label: 'UNLP', value: 'UNLP' }, { label: 'UBA', value: 'UBA' }];
const subjectOptions = [{ label: 'Algortimos', value: 'Algoritmos' }, { label: 'Matematica', value: 'Matematica' }, { label: 'Base de datos', value: 'Base de datos' }];
const unqOptions = [{ label: 'Sistemas Operativos', value: 'Sistemas Operativos' }, { label: 'Matematica II', value: 'Matematica II' }, { label: 'Estructura de datos', value: 'Estructura de datos' }];


function NewRequestPage() {
  const [formValues, setFormValues] = React.useState({
    studentData: {},
    universityData: {},
    unqData: {},
  });

  function handleStudentDataFormChange(values) {
    setFormValues({
      ...formValues,
      studentData: values,
    });
  }

  function handleUniversityDataFormChange(values) {
    setFormValues({
      ...formValues,
      universityData: values,
    });
  }

  function handleUnqDataFormChange(values) {
    setFormValues({
      ...formValues,
      unqData: values,
    });
  }

  function handleSubmit() {
    formValues.universityData.subjectUnq = formValues.unqData.subjectUnq;
    const file = Object.assign(formValues.studentData, formValues.universityData);
    file.equivalence = 'SIN EVALUAR';

    axios.post('//localhost:8000/api/v1/request', file)
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  return (
    <>
      <div className="form">
        <StudentDataForm onChange={handleStudentDataFormChange} />

        <div className="universityForms">
          <div className="universityForm">
            <UniversityDataForm onChange={handleUniversityDataFormChange} universityOptions={universityOptions} subjectOptions={subjectOptions} university="external" />
          </div>
          <div className="universityForm">
            <UniversityDataForm onChange={handleUnqDataFormChange} subjectOptions={unqOptions} university="inside" />
          </div>
        </div>

        <div className="button">
          <Button onClick={handleSubmit}>CARGAR SOLICITUD</Button>
        </div>
      </div>
    </>


  );
}

export default NewRequestPage;
