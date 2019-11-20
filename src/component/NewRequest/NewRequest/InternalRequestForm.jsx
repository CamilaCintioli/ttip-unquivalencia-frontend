/* eslint-disable react/prop-types */
import React, { useEffect, useState, useCallback } from 'react';
import {
  Formik, Form, Field, getIn, connect, ErrorMessage,
} from 'formik';
import { Button } from '@material-ui/core';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import UniversitySelector from './NewRequestFormSelectors/UniversitySelector';
import { UnqCareerSelector } from './NewRequestFormSelectors/CareerSelector';
import YearSelector from './NewRequestFormSelectors/YearSelector';
import SubjectSelector from './NewRequestFormSelectors/SubjectSelector';
import SubjectMultiSelector from './NewRequestFormSelectors/SubjectMultiSelector';
import { Selector } from '../Selectors/Selector';


const validateInternalForm = Yup.object().shape({
  origin: Yup.object().shape({
    subjects: Yup.array().required('Por favor selecciona al menos una materia').nullable(),
  }),
  unq: Yup.object().shape({
    subject: Yup.object().required('Por favor selecciona una materia').nullable(),
  }),
});

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    marginButton: theme.spacing(3),
  },
  selector: {
    marginBottom: theme.spacing(5),
  },
  error: {
    color: 'red',
  },

}));

export default function InternalForm({ onSubmit }) {
  const classes = useStyles();
  const handleSubmit = useCallback((values) => {
    const originIds = values.origin.subjects.map((option) => option.value);
    onSubmit(originIds, values.unq.subject.id);
  }, [onSubmit]);
  return (
    <Formik
      initialValues={{
        origin: {
          university: 'UNQ',
          career: '',
          year: '',
          subjects: [],
        },
        unq: {
          university: 'UNQ', career: '', year: '', subject: '',
        },
      }}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validateInternalForm}
    >
      <Form>
        <div className={classes.selector}>
          <h5>Selecciona una o más materias</h5>
          <Field name="origin" component={SubjectOriginSelector} />
        </div>
        <h5>Selecciona una materia de la Universidad Nacional de Quilmes</h5>
        <Field name="unq" component={SubjectUnqSelector} />

        <Button className={classes.button} color="primary" variant="contained" type="submit">Crear solicitud</Button>
      </Form>
    </Formik>
  );
}

const FieldDependency = connect(({
  formik: { values, setFieldValue },
  field,
  dependsOn,
}) => {
  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setFirstRender(false);
    } else {
      setFieldValue(field, null);
    }
  }, [setFieldValue, getIn(values, dependsOn), field, isFirstRender]);

  return false;
});

function SubjectOriginSelector({ field: { name } }) {
  const classes = useStyles();
  return (
    <>
      <Selector defaultOption={{ label: 'UNQ', value: 'UNQ' }} disable />
      <Field name={`${name}.career`} component={UnqCareerSelector} />
      <Field name={`${name}.year`} component={YearSelector} />
      <Field name={`${name}.subjects`} component={SubjectMultiSelector} />
      <div className={classes.error}>
        <ErrorMessage name={`${name}.subjects`} />
      </div>
      <FieldDependency field={`${name}.career`} dependsOn={`${name}.university`} />
      <FieldDependency field={`${name}.year`} dependsOn={`${name}.career`} />
      <FieldDependency field={`${name}.subjects`} dependsOn={`${name}.year`} />
    </>
  );
}

function SubjectUnqSelector({ field: { name } }) {
  const classes = useStyles();
  return (
    <>
      <Field name={`${name}.university`} component={UniversitySelector} />
      <Field name={`${name}.career`} component={UnqCareerSelector} />
      <Field name={`${name}.year`} component={YearSelector} />
      <Field name={`${name}.subject`} component={SubjectSelector} />
      <div className={classes.error}>
        <ErrorMessage name={`${name}.subject`} />
      </div>
      <FieldDependency field={`${name}.career`} dependsOn={`${name}.university`} />
      <FieldDependency field={`${name}.year`} dependsOn={`${name}.career`} />
      <FieldDependency field={`${name}.subject`} dependsOn={`${name}.year`} />
    </>
  );
}