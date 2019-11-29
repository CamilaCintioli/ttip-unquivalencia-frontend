/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import {
  Formik, Form, Field, FieldArray,
} from 'formik';
import { Button } from '@material-ui/core';
import * as Yup from 'yup';
import { UnqCareerSelector } from './NewRequestFormSelectors/CareerSelector';
import YearSelector from './NewRequestFormSelectors/YearSelector';
import { Selector } from '../Selectors/Selector';
import SubjectUnqSelector from './NewRequestFormFields/SubjectUnqSelector';
import InternalSubjectsFieldArray from './NewRequestFormFields/SubjectsFieldArray';
import FieldDependency from './NewRequestFormFields/FieldDependency';
import useStyles from './style';
import ConnectSubjectsDetailDialog from '../SubjectsDetailDialog';

const validateInternalForm = Yup.object().shape({
  origin: Yup.object().shape({
    subjects: Yup.array().of(Yup.object().shape({
      id: Yup.object().required('Por favor seleccione una materia'),
      yearOfApproval: Yup.string().required('Por favor seleccione el año de aprobación'),
      mark: Yup.string().notRequired(),
    })).required('Por favor agregue al menos una materia'),
  }),
  unq: Yup.object().shape({
    subject: Yup.object().required('Por favor seleccione una materia').nullable(),
  }),
});


export default function InternalForm({ onSubmit }) {
  const classes = useStyles();
  const handleSubmit = useCallback((values) => {
    const originIds = values.origin.subjects.map((subject) => ({ ...subject, id: subject.id.id }));
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
        <ConnectSubjectsDetailDialog />
      </Form>
    </Formik>
  );
}

function SubjectOriginSelector({ field: { name } }) {
  return (
    <>
      <Selector defaultOption={{ label: 'UNQ', value: 'UNQ' }} disable />
      <Field name={`${name}.career`} component={UnqCareerSelector} />
      <Field name={`${name}.year`} component={YearSelector} />
      <FieldArray name={`${name}.subjects`} component={InternalSubjectsFieldArray} />
      <FieldDependency field={`${name}.career`} dependsOn={`${name}.university`} />
      <FieldDependency field={`${name}.year`} dependsOn={`${name}.career`} />
      <FieldDependency field={`${name}.subjects`} dependsOn={`${name}.year`} />
    </>
  );
}
