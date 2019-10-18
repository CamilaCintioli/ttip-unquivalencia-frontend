import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import TextFieldUI from '@material-ui/core/TextField';
import './NewRequest.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { searchFileByFileNumber } from '../../redux/actions/search';
import { createRequest } from '../../redux/actions/createRequest';
import { fileResult } from '../../redux/selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function NewRequestForm(props) {
  const file = useSelector((state) => fileResult(state));
  const dispatch = useDispatch();
  const isInternal = file ? file.universityOrigin === 'UNQ' : false;

  useEffect(() => {
    dispatch(searchFileByFileNumber({ fileNumber: props.match.params.fileId }));
  }, [dispatch, props.match.params.fileId]);

  const submitRequest = useCallback((request) => {
    const requests = {
      fileNumber: file.fileNumber,
      universityOrigin: file.universityOrigin,
      requests: [request],
    };
    dispatch(createRequest(requests));
    window.location = '/expediente';
  }, [dispatch, file]);

  return (
    <>
      {file

      && (
      <StudentDataDisplay
        fileNumber={file.fileNumber}
        name={file.name}
        surname={file.surname}
        mail={file.mail}
        dni={file.dni}
        universityOrigin={file.universityOrigin}
        yearNote={file.yearNote}
      />
      )}
      {isInternal && <InternalRequestForm onSubmit={submitRequest} />}
      {!isInternal && <ExternalRequestForm />}
    </>
  );
}

function StudentDataDisplay({
  fileNumber, name, surname, mail, dni, universityOrigin, yearNote,
}) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h6" gutterBottom>
                    Numero de expediente:
          {fileNumber}
        </Typography>
        <Typography variant="h6" gutterBottom>
                    Nombre:
          {name}
        </Typography>
        <Typography variant="h6" gutterBottom>
                    Apellido:
          {surname}
        </Typography>
        {mail && (
          <Typography variant="h6" gutterBottom>
                    Mail:
            {mail}
          </Typography>
        )}
        {dni && (
        <Typography variant="h6" gutterBottom>
                        DNI:
          {dni}
        </Typography>
        )}
        <Typography variant="h6" gutterBottom>
                    Universidad de origen:
          {universityOrigin}
        </Typography>
        <Typography variant="h6" gutterBottom>
                    Año de nota:
          {yearNote}
        </Typography>
      </Paper>
    </>
  );
}

function ExternalRequestForm() {
  return (<h3>Externa</h3>);
}

function InternalRequestForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        careerOrigin: '',
        yearPlanOrigin: '',
        subjectOrigin: '',
        yearOfApproval: '',
        careerUnq: '',
        subjectUnq: '',
      }}
      onSubmit={(values) => onSubmit(values)}
    >
      <Form>
        <Field component={InternalRequestField} />
        <Button color="primary" variant="contained" type="submit">Cargar solicitud</Button>
      </Form>

    </Formik>
  );
}

function InternalRequestField({ field: { name, value }, form: { setFieldValue } }) {
  return (
    <div className="studentForm">
      <Field name="careerOrigin" component={TextField} label="Carrera de origen" />
      <Field name="yearPlanOrigin" component={TextField} label="Año de plan" />
      <Field name="subjectOrigin" component={TextField} label="Materia de origen" />
      <ErrorMessage name="subjectOrigin" />
      <Field name="yearOfApproval" component={TextField} label="Año de aprobación" />
      <Field name="careerUnq" component={TextField} label="Carrera UNQ" />
      <ErrorMessage name="careerUnq" />
      <Field name="subjectUnq" component={TextField} label="Materia UNQ" />
      <ErrorMessage name="subjectUnq" />
    </div>
  );
}

function TextField({ form: { handleFocus, handleChange, handleBlur }, field: { name, value }, ...props }) {
  return (
    <TextFieldUI
      {...props}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
}
