/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Steapper from './Steppers/Stepper';


const Steppers = ({
  activeStepSets, changeStepSets, sets,
  activeStep, changeStep, requestsStepper,
}) => (
  <>
    <div className="row col col-lg-12">
      <Steapper
        activeStep={activeStepSets}
        changeStep={changeStepSets}
        requests={sets}
        level={1}
      />
    </div>
    <br />
    <div className="row align-items-center justify-content-md-center">
      <div className="col col-lg-6">
        <Steapper
          activeStep={activeStep}
          changeStep={changeStep}
          requests={requestsStepper}
          level={2}
        />
      </div>
    </div>
  </>
);

export default Steppers;
