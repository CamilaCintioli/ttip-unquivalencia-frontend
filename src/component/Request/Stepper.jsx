import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

export default function Stepper({ activeStep, setActiveStep, size }) {
  const classes = useStyles();
  const theme = useTheme();


  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);


  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


  return (
    <MobileStepper
      variant="dots"
      steps={size}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={(
        <Button size="small" onClick={handleNext} disabled={activeStep === size - 1}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
)}
      backButton={(
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
)}
    />
  );
}
