import { withFormik } from 'formik';
import React, { useEffect } from 'react';
import { shape, string, func } from 'prop-types';

function StudentDataForm({ values, handleChange, onChange }) {
  useEffect(() => {
    onChange(values);
  }, [onChange, values]);

  return (
    <>
      <div className="studentForm">
        <h3>Datos del estudiante</h3>
        <label>Nro de expediente:</label>
        <input name="fileNumber" value={values.fileNumber} onChange={handleChange} />
        <label>Nombre:</label>
        <input name="name" value={values.name} onChange={handleChange} />
        <label>Apellido:</label>
        <input name="surname" value={values.surname} onChange={handleChange} />
        <label>Email:</label>
        <input name="mail" value={values.mail} onChange={handleChange} />
      </div>
    </>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    surname: '',
    fileNumber: '',
    mail: '',
  }),
})(StudentDataForm);


StudentDataForm.propTypes = {
  values: shape(
    {
      name: string,
      surname: string,
      fileNumber: string,
      mail: string,
    },
  ).isRequired,
  onChange: func.isRequired,
  handleChange: func.isRequired,
};
