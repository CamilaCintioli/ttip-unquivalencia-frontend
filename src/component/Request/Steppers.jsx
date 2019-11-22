/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Steapper from './Steppers/Stepper';


const Steppers = ({
  activeStepSets, changeStepSets, sets,
  activeStep, changeStep, requestsStepper, equivalence,
}) => (
  <>
    <div className="row align-items-center justify-content-md-center">
      <div className="row align-items-center justify-content-md-center col col-lg-12 ">
        <h3>Materias UNQ solicitadas</h3>
      </div>
      <Steapper
        activeStep={activeStepSets}
        changeStep={changeStepSets}
        requests={sets}
        level={1}
      />
    </div>
    <hr />
    <div className="row align-items-center justify-content-md-center">
      <div className="col col-lg-6">
        <h3>Materias origen</h3>
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
