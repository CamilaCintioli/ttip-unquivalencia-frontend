/* eslint-disable no-underscore-dangle */
/* eslint-disable radix */
import React, { useState, useEffect, useCallback } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Steapper from './Request/Stepper';
import RequestPage from './Request/RequestPage';
import { searchRequest } from '../redux/actions/search';
import getMatch from '../redux/actions/match';
import { requestResult, matchs } from '../redux/selectors';
import Match from './Request/Match';
import ListMatch from './Request/Match/ListMatch';

function ViewRequest(props) {
  const { fileId, index, requestId } = props.match.params;
  const requests = useSelector((state) => requestResult(state));
  const requestsMatch = useSelector((state) => matchs(state));
  const [activeStep, setActiveStep] = useState(Number.parseInt(index));
  const dispatch = useDispatch();
  const history = useHistory();

  const match = useCallback((requestId) => {
    dispatch(getMatch({ requestId }));
  }, [dispatch]);


  useEffect(() => {
    dispatch(searchRequest({ fileId }));
    match(requestId);
  }, [dispatch, fileId, match, requestId]);


  const changeStep = (_index) => {
    const _requestId = requests[_index].id;
    setActiveStep(_index);
    history.push(`/file/${fileId}/solicitud/${_requestId}/${_index}`);
  };

  console.log(requestsMatch);

  return (
    <>
      <div className="row justify-content-md-center">
        <Steapper activeStep={activeStep} changeStep={changeStep} requests={requests} />
      </div>
      {requestsMatch ? <Match requestMatch={requestsMatch} /> : null}
      {requestsMatch ? (
        <div className="row justify-content-md-center col 1">
          <ListMatch requests={requestsMatch} />
        </div>
      ) : null}
      {requests ? <RequestPage request={requests[activeStep]} /> : null}
    </>
  );
}

export default withRouter(ViewRequest);
