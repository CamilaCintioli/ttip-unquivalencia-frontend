import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import './NewRequest.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { searchFileByFileNumber } from '../../redux/actions/search';
import { createRequest, createSubject } from '../../redux/actions/create';
import { fileResult } from '../../redux/selectors';
import InternalRequestForm from './InternalRequestForm';
import ExternalRequestForm from './ExternalRequestForm';
import FeedbackBar from '../Dashboard/FeedbackBar';
import CreateSubjectDialog from './CreateSubjectDialog';
import { Selector } from './Selector';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  studentData: {
    marginBottom: theme.spacing(5),
  },
}));

export default function NewRequestPage(props) {
  const classes = useStyles();
  const file = useSelector((state) => fileResult(state));
  const dispatch = useDispatch();
  const [isInternal, setIsInternal] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(searchFileByFileNumber({ fileNumber: props.match.params.fileId.replace('-', '/') }));
  }, [dispatch, props.match.params.fileId]);

  const submitRequest = useCallback((subjectOriginId, subjectUnqId) => {
    const request = {
      fileNumber: file.fileNumber,
      subjectOriginIds: subjectOriginId,
      subjectUnqId,
    };
    dispatch(createRequest(request));
  }, [dispatch, file]);

  const setEquivalenceMode = useCallback((equivalenceMode) => {
    setIsInternal(equivalenceMode);
    setShowForm(true);
  }, [setShowForm, setIsInternal]);

  const submitSubject = useCallback((subject) => {
    dispatch(createSubject(subject));
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-4">
        <h3>
            Datos adicionales
        </h3>
        <hr />
        <div className={classes.studentData}>
          {file

      && (
      <StudentDataDisplay
        fileNumber={file.fileNumber}
        name={file.name}
        surname={file.surname}
        mail={file.mail}
        dni={file.dni}
        yearNote={file.yearNote}
      />
      )}
        </div>
      </div>
      <div className="col-8">
        <h3>
            Nueva solicitud
        </h3>
        <hr />
        <div className={classes.studentData}>
          <Selector
            options={[{ label: 'Interna', value: true }, { label: 'Externa', value: false }]}
            placeholder="Seleccione una forma de equivalencia"
            onChange={setEquivalenceMode}
          />
        </div>

        { showForm
      && (
        <>
          {isInternal ? <InternalRequestForm onSubmit={submitRequest} onSubmit2={submitSubject} /> : <ExternalRequestForm onSubmit={submitRequest} onSubmit2={submitSubject} />}
        </>
      )}
      </div>

      <FeedbackBar />
    </div>
  );
}


function StudentDataDisplay({
  fileNumber, name, surname, mail, dni, yearNote,
}) {
  const classes = useStyles();
  return (

    <div className="card w-100">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <b>Numero de expediente: </b>
          {fileNumber}
          {' '}
        </li>
        <li className="list-group-item">
          <b>Nombre: </b>
          {name}
          {' '}
        </li>
        <li className="list-group-item">
          <b>Apellido: </b>
          {surname}
        </li>
        {mail && (
          <li className="list-group-item">
            <b>Mail: </b>
            {mail}
          </li>
        )}
        {dni && (
          <li className="list-group-item">
            <b>DNI: </b>
            {dni}
          </li>
        )}
        <li className="list-group-item">
          <b>Año de nota:</b>
          {yearNote}
        </li>
      </ul>
      {/* <Paper className={classes.root}>
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
                    Año de nota:
          {yearNote}
        </Typography>
      </Paper> */}
    </div>
  );
}
