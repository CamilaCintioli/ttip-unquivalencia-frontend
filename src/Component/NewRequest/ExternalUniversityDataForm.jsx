import React, { useEffect } from 'react';
import { withFormik } from 'formik';
import {
  state, string, func, arrayOf, object,
} from 'prop-types';
import FormDataSelector from './FormDataSelector';

function ExternalUniversityDataForm({
  values, handleChange, onChange, setFieldValue, universityOptions, subjectOptions,
}) {
  useEffect(() => {
    onChange(values);
  }, [onChange, values]);


  return (
    <>
      <h3> Datos universidad</h3>
      <FormDataSelector field="univesityOrigin" setFieldValue={setFieldValue} options={universityOptions} placeholder="Selecciona una universidad" />
      <FormDataSelector field="subjectOrigin" setFieldValue={setFieldValue} options={subjectOptions} placeholder="Selecciona una materia" />
      <label>Año:  </label>
      <input name="year" value={values.year} onChange={handleChange} />
      {' '}
      <br />
    </>


  );
}

export default withFormik({
  mapPropsToValues: () => ({
    year: '',
    univesityOrigin: '',
    subjectOrigin: '',
  }),
})(ExternalUniversityDataForm);


ExternalUniversityDataForm.defaultProps = {
  universityOptions: undefined,
  subjectOptions: undefined,
};
ExternalUniversityDataForm.propTypes = {
  values: state({
    year: string,
    univesityOrigin: string,
    subjectOrigin: string,
  }).isRequired,
  handleChange: func.isRequired,
  onChange: func.isRequired,
  setFieldValue: func.isRequired,
  subjectOptions: arrayOf(object),
  universityOptions: arrayOf(object),
};
