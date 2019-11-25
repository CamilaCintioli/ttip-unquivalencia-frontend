import React from 'react';
import { getIn, Field, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button';
import useStyles from '../style';
import SubjectSelector from '../NewRequestFormSelectors/SubjectSelector';
import TextField from '../../../Fields/TextField';


const emptySubject = {
  id: '',
  yearOfApproval: '',
  mark: '',
};

const SubjectArrayErrors = (errors) => {
  const classes = useStyles();
  if (errors.origin === undefined) {
    return null;
  }
  return (typeof errors.origin.subjects === 'string' ? <div className={classes.error}><ErrorMessage name="origin.subjects" /></div> : null);
};

export default function SubjectsFieldArray({
  form: { values, errors }, push, pop, name, ...props
}) {
  const subjects = getIn(values, name);
  const showRemoveButton = subjects.length !== 0;
  return (
    <div>
      { subjects.map((subject, index) => (
        <div>
          <h6>
  Materia
            {' '}
            {index + 1}
          </h6>
          <Field name={`${name}[${index}]`} component={SubjectField} />

        </div>
      ))}
      <Button color="primary" variant="outlined" onClick={() => push(emptySubject)}>Agregar materia</Button>
      { showRemoveButton
        && <Button color="primary" variant="outlined" onClick={() => pop()}>Quitar materia</Button>}
      {SubjectArrayErrors(errors)}
    </div>
  );
}

function SubjectField({ field: { name } }) {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <Field name={`${name}.id`} component={SubjectSelector} />
      <div className={classes.error}><ErrorMessage name={`${name}.id`} /></div>
      <Field name={`${name}.yearOfApproval`} component={TextField} label="Año de aprobación" />
      <div className={classes.error}><ErrorMessage name={`${name}.yearOfApproval`} /></div>
      <Field name={`${name}.mark`} component={TextField} label="Nota de la materia" />
    </div>
  );
}
