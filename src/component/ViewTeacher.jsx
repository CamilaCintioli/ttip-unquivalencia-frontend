import React, { useState, useEffect, useCallback } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { string } from 'prop-types';
import { stepper, matchs } from '../redux/selectors';
import getMatch from '../redux/actions/match';
import getStepper from '../redux/actions/stepper';

function ViewTeacher(props) {
  const { requestId } = props.match.params;
  const data = useSelector((state) => stepper(state));
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const { requestsStepper, request, requestsMatch } = data;

  const match = useCallback(() => {
    dispatch(getMatch({ requestId }));
  }, [dispatch, requestId]);

  useEffect(() => {
    dispatch(getStepper({ requestId }));
    match(requestId);
  }, [dispatch, match, requestId]);


  const changeStep = (index) => {
    const { id } = requestsStepper[index];
    setActiveStep(_index);
    history.push(`/docente/solicitud/${_requestId}/${_index}`);
  };

  return (
    <>
      <div className="row justify-content-md-center">
        <Steapper activeStep={activeStep} changeStep={changeStep} requests={requestsStepper} />
      </div>
    </>
  );
}

ViewTeacher.propTypes = {
  requestId: string.isRequired,
};


export default withRouter(ViewTeacher);
