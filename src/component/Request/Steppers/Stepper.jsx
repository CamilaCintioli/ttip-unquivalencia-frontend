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


const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


export default function HorizontalNonLinearStepper({
  activeStep, changeStep, requests, level,
}) {
  const classes = useStyles();
  const getIcon = (state) => {
    switch (state) {
      case 'APROBADA':
        return <CheckCircleIcon color="primary" />;
      case 'NEGADA':
        return <CloseIcon color="error" />;
      case 'CONSULTA':
        return <SupervisedUserCircleIcon color="secondary" />;
      case 'GIRADA':
        return <CheckCircleIcon color="primary" />;
      default:
        return <CheckBoxOutlineBlankIcon color="primary" />;
    }
  };
  const handleStep = (id) => () => changeStep(id);

  const getName = (request) => (level === 1 ? request.subjectUnq : request.subjectOrigin);
  const getId = (request) => (level === 1 ? request.requestId : request.subjectId);

  return (
    <Stepper className="border border-success" nonLinear activeStep={activeStep}>
      {map(requests, (request, index) => (
        <Step key={index}>
          <StepButton onClick={handleStep(getId(request))} completed icon={getIcon(request.equivalence)}>
            {getName(request)}
          </StepButton>
        </Step>
      ))}
    </Stepper>
  );
}
