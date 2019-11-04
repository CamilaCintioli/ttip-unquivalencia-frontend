/* eslint-disable no-underscore-dangle */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import {
  withRouter, useHistory, useParams,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Requests from './Request/Requests';

import getStepper from '../redux/actions/stepper';
import { stepper, matchsError } from '../redux/selectors';
import Error401 from './Error/Error401';


function ViewRequest() {
  const { requestId, subjectId } = useParams();
  const data = useSelector((state) => state);
  const isAuthorized = useSelector((state) => matchsError(state));
  const [activeStepSets, setActiveStepSets] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getStepper({ requestId, subjectId }));
  }, [dispatch, requestId, subjectId]);


  const changeStep = (id, step) => {
    setActiveStep(step);
    history.push(`/solicitud/${id}`);
  };

  const changeStepSets = (id, step) => {
    setActiveStepSets(step);
    setActiveStep(0);
    history.push(`/solicitud/${id}`);
  };
  console.log('mira aca');

  console.log(data);


  return (
    <>
      {isAuthorized ? <Error401 history={history} /> : null}
      {data ? (
        <h1>
1

        </h1>
      // <Requests
      //   activeStepSets={activeStepSets}
      //   changeStepSets={changeStepSets}
      //   activeStep={activeStep}
      //   changeStep={changeStep}
      //   requestsStepper={data.requestsStepper}
      //   sets={data.sets}
      //   request={data.request}
      //   requestsMatch={data.match}
      // />
      ) : null}
    </>
  );
}

export default withRouter(ViewRequest);
