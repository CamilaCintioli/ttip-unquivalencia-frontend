import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import './NewRequest.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { searchFileByFileNumber } from '../../redux/actions/search';
import { createRequest } from '../../redux/actions/createRequest';
import { fileResult } from '../../redux/selectors';
import InternalRequestForm from './InternalRequestForm';
import ExternalRequestForm from './ExternalRequestForm';
import FeedbackBar from '../FeedbackBar';
import {Selector} from './Selector';

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

  return (
    <>
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
      <div className={classes.studentData}>
        <Selector
          options={[{ label: 'Interna', value: true }, { label: 'Externa', value: false }]}
          placeholder="Seleccione una forma de equivalencia"
          onChange={setEquivalenceMode}
        />
      </div>
      {showForm
      && (isInternal ? <InternalRequestForm onSubmit={submitRequest} />
        : <ExternalRequestForm onSubmit={submitRequest} />)}
      <FeedbackBar />
    </>
  );
}

function StudentDataDisplay({
  fileNumber, name, surname, mail, dni, yearNote,
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
                    Año de nota:
          {yearNote}
        </Typography>
      </Paper>
    </>
  );
}
