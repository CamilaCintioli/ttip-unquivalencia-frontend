import React, { useEffect } from 'react';
import Select from 'react-select';
import { withFormik } from 'formik';
import './NewRequest.css';
import FormDataSelector from './FormDataSelector';

const subjectOptions = [{ label: 'Sistemas Operativos', value: 'Sistemas Operativos' }, { label: 'Matematica II', value: 'Matematica II' }, { label: 'Estructura de datos', value: 'Estructura de datos' }];


function InternalEquivalenceForm({
  values, handleChange, onChange, setFieldValue,
}) {
  useEffect(() => {
    onChange(values);
  }, [onChange, values]);

  return (
    <>
      <form className="studentForm">
        <label>
                          Universidad origen: <br/>
          <input type="text" name="universityOrigin" readOnly value={values.universityOrigin} />
        </label>
        <label>
                          Carrera de origen: <br/>
          <input type="text" name="careerOrigin" onChange={handleChange} value={values.careerOrigin} />
        </label>
        <label>
                          Año del plan: <br/>
          <input type="text" name="yearPlan" onChange={handleChange} value={values.yearPlan} />
        </label>
        <label>
                          Materia de origen:
          <FormDataSelector
            field="subjectOrigin"
            setFieldValue={setFieldValue}
            options={subjectOptions}
            placeholder="Selecciona una materia"
          />
        </label>
        <label>
                          Año de la cursada aprobada: <br/>
          <input type="text" name="yearOfApproval" onChange={handleChange} value={values.yearOfApproval} />
        </label>
        <label>
                          Carrera UNQ:
          <EquivalenceModeSelector onChange={handleChange} />
        </label>
        <label>
                          Materia TPI-LI solicitada: <br/>
          <FormDataSelector
            field="subjectUnq"
            setFieldValue={setFieldValue}
            options={subjectOptions}
            placeholder="Selecciona una materia"
          />

        </label>
      </form>
    </>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    universityOrigin: 'Universidad Nacional de Quilmes',
    careerOrigin: '',
    yearPlan: '',
    subjectOrigin: '',
    yearOfApproval: '',
    universityCareer: '',
    subjectUnq: '',
  }),
})(InternalEquivalenceForm);


function EquivalenceModeSelector({ onChange }) {
  const equivalenceModes = [{ label: 'TPI', value: 'TPI' }, { label: 'LIC', value: 'LIC' }];

  return (
    <Select
      className="basic-single"
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
