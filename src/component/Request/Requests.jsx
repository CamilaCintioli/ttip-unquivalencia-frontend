/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Steappers from './Steppers';
import RequestPage from './RequestPage';
import Match from './Match';
import ListMatch from './Match/ListMatch';

const Requests = ({
  activeStepSets, changeStepSets,
  activeStep, changeStep, requestsStepper, request, requestsMatch, sets,
}) => (
  <>
    {sets && requestsStepper
      ? (
        <Steappers
          activeStepSets={activeStepSets}
          changeStepSets={changeStepSets}
          sets={sets}
          activeStep={activeStep}
          changeStep={changeStep}
          requestsStepper={requestsStepper}
        />
      )
      : null}
    {/* {requestsMatch ? <Match requestMatch={requestsMatch} /> : null}
    {requestsMatch ? (
      <div className="row justify-content-md-center col 1">
        <ListMatch requests={requestsMatch} />
      </div>
    ) : null} */}
    {request ? <RequestPage request={request} /> : null}
  </>
);

export default Requests;
