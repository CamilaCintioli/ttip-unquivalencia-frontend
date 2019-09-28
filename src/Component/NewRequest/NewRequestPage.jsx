import React from 'react';
import StudentDataForm from './StudentDataForm';
import UniversityDataForm from './UniversityDataForm';
import './NewRequest.css';
import { Button } from 'react-bootstrap';
import API from '../../service/FileService';


const universityOptions = [{ label: 'UNLP', value: 'UNLP' }, { label: 'UBA', value: 'UBA' }];
const subjectOptions = [{ label: 'Algortimos', value: 'Algoritmos' }, { label: 'Matematica', value: 'Matematica' }, { label: 'Base de datos', value: 'Base de datos' }];
const unqOptions = [{ label: 'Sistemas Operativos', value: 'Sistemas Operativos' }, { label: 'Matematica II', value: 'Matematica II' }, { label: 'Estructura de datos', value: 'Estructura de datos' }];


function NewRequestPage({ history }) {
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

    API.newFile(file)
      .then((response) => {
        alert("La solicitud ha sido cargada exitosamente")
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
