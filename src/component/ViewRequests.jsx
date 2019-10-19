/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Steapper from './Request/Stepper2';
import RequestPage from './Request/RequestPage';
import { searchRequest } from '../redux/actions/search';
import { requestResult } from '../redux/selectors';

function ViewRequest(props) {
  const requests = useSelector((state) => requestResult(state));
  const [activeStep, setActiveStep] = useState(Number.parseInt(props.match.params.index));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchRequest({ fileId: props.match.params.fileId }));
  }, [dispatch, props.match.params.fileId, props.match.params.solicitudId]);

  return (
    <>
      <div className="row justify-content-md-center">
        <Steapper activeStep={activeStep} setActiveStep={setActiveStep} requests={requests} />
      </div>
      {requests ? <RequestPage request={requests[activeStep]} /> : null}

    </>
  );
}

export default withRouter(ViewRequest);
