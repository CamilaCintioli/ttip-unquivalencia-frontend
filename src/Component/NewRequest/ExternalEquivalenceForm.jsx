import React, { useEffect } from 'react';
import Select from 'react-select';
import { withFormik } from 'formik';
import './NewRequest.css';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormDataSelector from './FormDataSelector';


const universityOptions = [{ label: 'UNLP', value: 'UNLP' }, { label: 'UBA', value: 'UBA' }];
const subjectOptions = [{ label: 'Algortimos', value: 'Algoritmos' }, { label: 'Matematica', value: 'Matematica' }, { label: 'Base de datos', value: 'Base de datos' }];
const unqOptions = [{ label: 'Sistemas Operativos', value: 'Sistemas Operativos' }, { label: 'Matematica II', value: 'Matematica II' }, { label: 'Estructura de datos', value: 'Estructura de datos' }];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    length: "10px",
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

function ExternalEquivalenceForm({
  values, handleChange, onChange, setFieldValue,
}) {
  useEffect(() => {
    onChange(values);
  }, [onChange, values]);

  const classes = useStyles();
  return (
    <>
      <form className="studentForm">
        <label>
                          Universidad origen:
          <FormDataSelector
            field="universityOrigin"
            setFieldValue={setFieldValue}
            options={universityOptions}
            placeholder="Selecciona una materia"
          />

        </label>
        <TextField
          required
          name="careerOrigin"
          label="Carrera origen:"
          className={classes.textField}
          value={values.careerOrigin}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField

          name="originYear"
          label="Año de origen:"
          className={classes.textField}
          value={values.originYear}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />

        <label>
                          Materia de origen:
          <FormDataSelector
            field="subjectOrigin"
            setFieldValue={setFieldValue}
            options={subjectOptions}
            placeholder="Selecciona una materia"
          />

        </label>
        <TextField

          name="courseMode"
          label="Modalidad de cursada:"
          className={classes.textField}
          value={values.courseMode}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField

          name="subjectOriginWeeklyHours"
          label="Carga horaria semanal de materia origen:"
          className={classes.textField}
          value={values.subjectOriginWeeklyHours}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField

          name="subjectOriginWeeklyHours"
          label="Carga horaria semanal de materia origen:"
          className={classes.textField}
          value={values.subjectOriginWeeklyHours}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField

          name="subjectOriginTotalHours"
          label="Carga horaria total de materia origen:"
          className={classes.textField}
          value={values.subjectOriginTotalHours}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />

        <TextField

          name="yearOfApproval"
          label="Año de la cursada aprobada:"
          className={classes.textField}
          value={values.yearOfApproval}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />

        <label>
                          Carrera UNQ:
          <EquivalenceModeSelector onChange={handleChange} />
          <input type="text" name="universityCareer" onChange={handleChange} value={values.universityCareer} />
        </label>
        <label>
                          Materia solicitada:
          <FormDataSelector
            field="unqSubject"
            setFieldValue={setFieldValue}
            options={unqOptions}
            placeholder="Selecciona una materia"
          />

        </label>
        <TextField

          name="unqSubjectWeeklyHours"
          label="Carga horaria semanal:"
          className={classes.textField}
          value={values.unqSubjectWeeklyHours}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField

          name="unqSubjectTotalHours"
          label="Carga horaria total:"
          className={classes.textField}
          value={values.unqSubjectTotalHours}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField

          name="subjectCore"
          label="Nucleo al que pertenece:"
          className={classes.textField}
          value={values.subjectCore}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField

          name="credits"
          label="Creditos:"
          className={classes.textField}
          value={values.credits}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />

      </form>
    </>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    universityOrigin: '',
    careerOrigin: '',
    originYear: '',
    subjectOrigin: '',
    courseMode: '',
    subjectOriginWeeklyHours: '',
    subjectOriginTotalHours: '',
    yearOfApproval: '',
    universityCareer: '',
    unqSubject: '',
    unqSubjectWeeklyHours: '',
    unqSubjectTotalHours: '',
    subjectCore: '',
    credits: '',
  }),
})(ExternalEquivalenceForm);


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
