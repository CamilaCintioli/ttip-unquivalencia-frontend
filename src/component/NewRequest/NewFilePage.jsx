import React, { useState, useCallback } from 'react';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import StudentDataForm from './StudentDataForm';
import './NewRequest.css';
import InternalEquivalenceForm from './InternalEquivalenceForm';
import ExternalEquivalenceForm from './ExternalEquivalenceForm';


export default function NewFilePage() {
  const [studentData, setStudentData] = useState({});
  const [internalEquivalenceData, setInternalEquivalenceData] = useState(undefined);
  const [externalEquivalenceData, setExternalEquivalenceData] = useState(undefined);
  const [isInternal, setIsInternal] = useState(false);

  const handleStudentDataForm = useCallback((values) => {
    setStudentData(values);
  }, [setStudentData]);

  const handleEquivalenceMode = useCallback((values) => {
    setIsInternal(values.value);
  }, [setIsInternal, setExternalEquivalenceData, setInternalEquivalenceData]);

  const handleInternalEquivalenceDataForm = useCallback((values) => {
    setInternalEquivalenceData(values);
  }, [setInternalEquivalenceData]);

  const handleExternalEquivalenceDataForm = useCallback((values) => {
    setExternalEquivalenceData(values);
  }, [setExternalEquivalenceData]);

  const handleSubmit = () => {
    let file = {};
    // eslint-disable-next-line no-unused-expressions
    internalEquivalenceData
      ? file = Object.assign(studentData, internalEquivalenceData)
      : file = Object.assign(studentData, externalEquivalenceData);
    console.log(file);
  };

  return (


    <div className="container">
      <div>
        <StudentDataForm onChange={handleStudentDataForm} />
        <EquivalenceModeSelector onChange={handleEquivalenceMode} />
      </div>
      <div>

        {isInternal && <InternalEquivalenceForm onChange={handleInternalEquivalenceDataForm} />}
        {!isInternal && <ExternalEquivalenceForm onChange={handleExternalEquivalenceDataForm} />}
      </div>

      <div>
        <Button color="primary" variant="contained" type="submit" onClick={handleSubmit}>Cargar formulario</Button>
      </div>
    </div>


  );
}

function EquivalenceModeSelector({ onChange }) {
  const equivalenceModes = [{ label: 'Externa', value: false }, { label: 'Interna', value: true }];

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
      onChange={onChange}
    />
  );
}
