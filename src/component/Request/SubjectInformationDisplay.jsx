/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    marginButton: theme.spacing(2),
    width: '50%',
  },

}));

export default function SubjectInformationDisplay({ subject }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {subject.subject ? <h5>Materia: {subject.subject}</h5> : null}
      {subject.career ? <h5>Carrera: {subject.career}</h5> : null}
      {subject.yearPlan ? <h5>Año del plan: {subject.yearPlan}</h5> : null}
      {subject.subjectWeeklyHours ? <h5>Horas semanales: {subject.subjectWeeklyHours}</h5> : null}
      {subject.subjectTotalHours ? <h5>Horas totales: {subject.subjectTotalHours}</h5> : null}
      {subject.courseMode ? <h5>Modalidad: {subject.courseMode}</h5> : null}
      {subject.subjectCore ? <h5>Núcleo: {subject.subjectCore}</h5> : null}
      {subject.credits ? <h5>Creditos: {subject.credits}</h5> : null}
    </Paper>
  );
}
