/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Steappers from './Steppers/Steppers';
import State from './State/State';
import Actions from './Actions/Actions';


const Requests = ({
  activeStepSets, changeStepSets,
  changeStep, requestsStepper, request, requestsMatch, sets, checkProfessor,
}) => (
  <>
    {sets && requestsStepper
      ? (
        <Steappers
          activeStepSets={activeStepSets}
          changeStepSets={changeStepSets}
          sets={sets}
          changeStep={changeStep}
          requestsStepper={requestsStepper}
          equivalence={request.equivalence}
        />
      )
      : null}
    <br />
    <State
      request={request}
      requestsMatch={requestsMatch}
      checkProfessor={checkProfessor}
    />
    <br />
    <Actions request={request} />
  </>
);

export default Requests;
