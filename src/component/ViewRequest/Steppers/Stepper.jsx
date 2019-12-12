import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import { map } from 'lodash';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { useParams } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function HorizontalNonLinearStepper({
  changeStep, requests, level,
}) {
  const { requestId, subjectId } = useParams();
  const classes = useStyles();
  const getIcon = (state, active, name) => {
    switch (state) {
      case 'APROBADA':
        return active ? (
          <Button variant="contained" color="inherit" variant="outlined">
            <CheckCircleIcon color="primary" />
          </Button>
        ) : (
          <>
            <CheckCircleIcon color="primary" />
            {name}
          </>
        );

      case 'NEGADA':
        return active ? (
          <Button variant="contained" color="inherit" variant="outlined">
            <CloseIcon color="error" />
          </Button>
        ) : (
          <>
            <CloseIcon color="primary" />
            {name}
          </>
        );
      case 'CONSULTA':
        return active ? (
          <Button variant="contained" color="inherit" variant="outlined">
            <SupervisedUserCircleIcon color="secondary" />
          </Button>
        ) : (
          <>
            <SupervisedUserCircleIcon color="primary" />
            {name}
          </>
        );
      case 'GIRADA':
        return active ? (
          <Button variant="contained" color="inherit" variant="outlined">
            <CheckCircleIcon color="primary" />
          </Button>
        ) : (
          <>
            <CheckCircleIcon color="primary" />
            {name}
          </>
        );
      default:
        return active ? (
          <Button variant="contained" color="inherit" variant="outlined">
            <CheckBoxOutlineBlankIcon color="primary" />
            {name}
          </Button>
        ) : (
          <>
            <CheckBoxOutlineBlankIcon color="primary" />
            {name}
          </>
        );
    }
  };
  const handleStep = (id) => () => changeStep(id);
  const getName = (request) => (level ? request.subjectUnq : request.subjectOrigin);
  const getId = (request) => (level ? request.requestId : request.subjectId);
  const getParam = () => (level ? requestId : subjectId);
  const active = (request) => parseInt(getId(request), 10) === parseInt(getParam(), 10);

  return (
    <Stepper
      className={classes}
      nonLinear
      color="blue"
    >
      {map(requests, (request, index) => (
        <Step key={index}>
          <StepButton onClick={handleStep(getId(request))} completed icon={getIcon(request.equivalence, active(request), getName(request))} />
        </Step>
      ))}
    </Stepper>
  );
}
