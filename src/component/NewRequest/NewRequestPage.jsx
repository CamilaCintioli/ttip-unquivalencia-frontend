import React, { useEffect, useCallback } from 'react';
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
import FeedbackBar from '../FeedbackBar';
import CreateSubjectDialog from './CreateSubjectDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function NewRequestPage(props) {
  const file = useSelector((state) => fileResult(state));
  const dispatch = useDispatch();
  const isInternal = file ? file.universityOrigin === 'UNQ' : false;

  useEffect(() => {
    dispatch(searchFileByFileNumber({ fileNumber: props.match.params.fileId.replace('-', '/') }));
  }, [dispatch, props.match.params.fileId]);

  const submitRequest = useCallback((request) => {
    const requests = {
      fileNumber: file.fileNumber,
      universityOrigin: file.universityOrigin,
      requests: [request],
    };
    dispatch(createRequest(requests));
    // window.location = '/expediente';
  }, [dispatch, file]);

  const submitSubject = useCallback((subject) => {
    dispatch(createSubject(subject));
  }, [dispatch]);

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
      {isInternal && (
        <>
          <InternalRequestForm onSubmit={submitRequest} />
          <CreateSubjectDialog />
        </>
      )}
      {!isInternal && (
        <>
          <ExternalRequestForm onSubmit={submitRequest} />
          <CreateSubjectDialog onSubmit={submitSubject} />
        </>
      )}
      <FeedbackBar />
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
