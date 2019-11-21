/* eslint-disable no-underscore-dangle */
/* eslint-disable radix */
import React, { useState, useEffect, useCallback } from 'react';
import {
  withRouter, useHistory, useParams,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { find } from 'lodash';
import Requests from './Requests';

import getStepper from '../../redux/actions/stepper';
import getMatch from '../../redux/actions/match';
import {
  stepper, matchsError, matchs, userRole,
} from '../../redux/selectors';
import { isProfessor } from '../UserView/userRole';
import Error401 from '../Error/Error401';


function ViewRequest() {
  const { requestId, subjectId } = useParams();
  const data = useSelector((state) => stepper(state));
  const requestsMatch = useSelector((state) => matchs(state));
  const isAuthorized = useSelector((state) => matchsError(state));
  const [activeStepSets, setActiveStepSets] = useState(requestId);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => userRole(state));

  useEffect(() => {
    dispatch(getStepper({ requestId, subjectId }));
    dispatch(getMatch({ requestId, subjectId }));
  }, [dispatch, requestId, subjectId]);


  const changeStep = (_subjectId) => {
    const request = find(data.requestsStepper, ((r) => r.subjectId === _subjectId));
    history.push(`/solicitud/${activeStepSets}/materia/${request.subjectId}`);
  };

  const changeStepSets = (_requestId) => {
    setActiveStepSets(_requestId);
    const request = find(data.sets, ((r) => r.requestId === _requestId));
    history.push(`/solicitud/${_requestId}/materia/${request.firstSubject}`);
  };

  const checkProfessor = isProfessor(user);

  return (
    <>
      {!isAuthorized ? <Error401 history={history} /> : null}
      {data ? (
        <Requests
          activeStepSets={activeStepSets}
          changeStepSets={changeStepSets}
          changeStep={changeStep}
          requestsStepper={data.requestsStepper}
          sets={data.sets}
          request={data.request}
          requestsMatch={requestsMatch}
          checkProfessor={checkProfessor}

        />
      ) : null}
    </>
  );
}

export default withRouter(ViewRequest);
