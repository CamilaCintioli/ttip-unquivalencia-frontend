import React, { useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import StudentDataForm from './StudentDataForm';
import ExternalUniversityDataForm from './ExternalUniversityDataForm';
import InternalUniversityDataForm from './InternalUniversityDataForm';
import './NewRequest.css';
import API from '../../service/FileService';


const universityOptions = [{ label: 'UNLP', value: 'UNLP' }, { label: 'UBA', value: 'UBA' }];
const subjectOptions = [{ label: 'Algortimos', value: 'Algoritmos' }, { label: 'Matematica', value: 'Matematica' }, { label: 'Base de datos', value: 'Base de datos' }];
const unqOptions = [{ label: 'Sistemas Operativos', value: 'Sistemas Operativos' }, { label: 'Matematica II', value: 'Matematica II' }, { label: 'Estructura de datos', value: 'Estructura de datos' }];

function NewRequestPage() {
  const [studentData, setStudentData] = useState({});
  const [externalUniversityData, setExternalUniversityData] = useState({});
  const [internalUniversityData, setInternalUniversityData] = useState({});

  const handleStudentDataFormChange = useCallback((values) => {
    setStudentData(values);
  }, [setStudentData]);

  const handleExternalUniversityDataFormChange = useCallback((values) => {
    setExternalUniversityData(values);
  }, [setExternalUniversityData]);

  const handleInternalUniversityDataFormChange = useCallback((values) => {
    setInternalUniversityData(values);
  }, [setInternalUniversityData]);


  function handleSubmit() {
    const file = Object.assign(studentData, externalUniversityData, internalUniversityData);
    file.equivalence = 'SIN EVALUAR';
    API.newFile(file)
      .then((response) => {
        alert('La solicitud ha sido cargada exitosamente');
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
            <ExternalUniversityDataForm
              onChange={handleExternalUniversityDataFormChange}
              universityOptions={universityOptions}
              subjectOptions={subjectOptions}
            />
          </div>
          <div className="universityForm">
            <InternalUniversityDataForm
              onChange={handleInternalUniversityDataFormChange}
              subjectOptions={unqOptions}
            />
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
