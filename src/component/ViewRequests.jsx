import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { size } from 'lodash';
import Steapper from './Request/Stepper';
import RequestPage from './Request/RequestPage';
import { searchRequest } from '../redux/actions/search';
import { requestResult } from '../redux/selectors';

function ViewRequest(props) {
  const [activeStep, setActiveStep] = useState(0);
  const requests = useSelector((state) => requestResult(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchRequest({ fileId: props.match.params.solicitudId }));
  }, [dispatch, props.match.params.solicitudId]);

  console.log(requests);
  console.log(size(requests));

  return (
    <>
      <div className="row justify-content-md-center">
        <Steapper activeStep={activeStep} setActiveStep={setActiveStep} size={size(requests)} />
      </div>
      {requests ? <RequestPage request={requests[activeStep]} /> : null}

    </>
  );
}

export default withRouter(ViewRequest);
