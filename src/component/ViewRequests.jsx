/* eslint-disable no-underscore-dangle */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Requests from './Request/Requests';

import getMatch from '../redux/actions/match';
import { matchs } from '../redux/selectors';

function ViewRequest(props) {
  const {
    fileId, sets, steap, requestId,
  } = props.match.params;
  const data = useSelector((state) => matchs(state));
  const [activeStepSets, setActiveStepSets] = useState(Number.parseInt(sets));
  const [activeStep, setActiveStep] = useState(Number.parseInt(steap));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getMatch({ requestId }));
  }, [dispatch, fileId, requestId]);


  const changeStep = (id, step) => {
    setActiveStep(step);
    history.push(`/file/${fileId}/solicitud/${id}/conjunto/${activeStepSets}/paso/${activeStep}`);
  };

  const changeStepSets = (id, step) => {
    setActiveStepSets(step);
    setActiveStep(0);
    history.push(`/file/${fileId}/solicitud/${id}/conjunto/${activeStepSets}/paso/${activeStep}`);
  };

  return (
    <>
      {data ? (
        <Requests
          activeStepSets={activeStepSets}
          changeStepSets={changeStepSets}
          activeStep={activeStep}
          changeStep={changeStep}
          requestsStepper={data.requestsStepper}
          sets={data.sets}
          request={data.request}
          requestsMatch={data.match}
        />
      ) : null}
    </>
  );
}

export default withRouter(ViewRequest);
