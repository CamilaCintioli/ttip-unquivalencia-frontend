import React, { useEffect } from 'react';
import { withFormik } from 'formik';
import {
  state, string, func, arrayOf, object,
} from 'prop-types';
import FormDataSelector from './FormDataSelector';

function InternalUniversityDataForm({
  values, onChange, setFieldValue, subjectOptions,
}) {
  useEffect(() => {
    onChange(values);
  }, [onChange, values]);

  return (
    <>
      <h3>Universidad Nacional de Quilmes</h3>
      <FormDataSelector field="subjectUnq" setFieldValue={setFieldValue} options={subjectOptions} placeholder="Selecciona una materia" />
    </>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    subjectUnq: '',
  }),
})(InternalUniversityDataForm);

InternalUniversityDataForm.defaultProps = {
  subjectOptions: undefined,
};
InternalUniversityDataForm.propTypes = {
  values: state({
    subjectUnq: string,
  }).isRequired,
  onChange: func.isRequired,
  setFieldValue: func.isRequired,
  subjectOptions: arrayOf(object),
};
