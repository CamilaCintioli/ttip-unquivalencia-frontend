/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    marginButton: theme.spacing(2),
    marginRight: theme.spacing(2),

  },

}));

export default function SubjectInformationDisplay({ subject }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {subject.subject ? <Typography align="center" variant="body1" gutterBottom>Materia: {subject.subject}</Typography> : null}
      {subject.career ? <Typography align="center" variant="body1" gutterBottom>Carrera: {subject.career}</Typography> : null}
      {subject.yearPlan ? <Typography align="center" variant="body1" gutterBottom>Año del plan: {subject.yearPlan}</Typography> : null}
      {subject.subjectWeeklyHours ? <Typography align="center" variant="body1" gutterBottom>Horas semanales: {subject.subjectWeeklyHours}</Typography> : null}
      {subject.subjectTotalHours ? <Typography align="center" variant="body1" gutterBottom>Horas totales: {subject.subjectTotalHours}</Typography> : null}
      {subject.courseMode ? <Typography align="center" variant="body1" gutterBottom>Modalidad: {subject.courseMode}</Typography> : null}
      {subject.subjectCore ? <Typography align="center" variant="body1" gutterBottom>Núcleo: {subject.subjectCore}</Typography> : null}
      {subject.credits ? <Typography align="center" variant="body1" gutterBottom>Creditos: {subject.credits}</Typography> : null}
    </Paper>
  );
}


SubjectInformationDisplay.propTypes = {
  subject: PropTypes.object,
};

SubjectInformationDisplay.defaultProps = {
  subject: {},
};
