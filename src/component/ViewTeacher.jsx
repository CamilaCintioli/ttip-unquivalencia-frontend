import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ViewTeacher(props) {
  const { requestId } = props.match.params;
  const requests = useSelector((state) => requestResult(state));
  const requestsMatch = useSelector((state) => matchs(state));
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();


  const changeStep = (_index) => {
    const _requestId = requests[_index].id;
    setActiveStep(_index);
    history.push(`/file/${fileId}/solicitud/${_requestId}/${_index}`);
  };

  return (
    <div />
  );
}

export default withRouter(ViewTeacher);
