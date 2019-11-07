import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Grid, CircularProgress } from '@material-ui/core';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { searchFile, searchRequest } from '../redux/actions/search';
import { fileResults, requestResult, userRole } from '../redux/selectors';
import { isAdmin, isAdminOrUser } from './User/userRole';
import FeedbackBar from './FeedbackBar';
import ListRequest from './ViewPrimary/ListRequest';
import ListFile from './ViewPrimary/ListFile';

function ViewPrimary() {
  const rowsFile = useSelector((state) => fileResults(state), shallowEqual);
  const rowsRequest = useSelector((state) => requestResult(state), shallowEqual);
  const dispatch = useDispatch();
  const [fileNumber, setFileNumber] = useState(undefined);
  const history = useHistory();
  const user = useSelector((state) => userRole(state));

  React.useLayoutEffect(() => {
    dispatch(searchFile());
  }, [dispatch, rowsRequest]);

  const handleSearchRequests = React.useCallback((id, fileNum) => {
    dispatch(searchRequest({ fileId: id }));
    setFileNumber(fileNum.replace('/', '-'));
  }, [dispatch]);

  const handleSearchRequest = (requestId, subjectId) => history.push(`/solicitud/${requestId}/materia/${subjectId}`);


  const addRequest = () => history.push(`file/${fileNumber}/request/new`);

  const checkAdmin = isAdmin(user);

  const checkLetter = (status) => isAdminOrUser(user) && status === 0;

  return (
    <Grid container spacing={3}>
      <FeedbackBar showNotification={JSON.parse(localStorage.getItem('notification'))} />
      <Grid item xs={6}>
        {rowsFile
          ? <ListFile files={rowsFile} handleSearch={handleSearchRequests} addRequest={addRequest} checkAdmin={checkAdmin} checkLetter={checkLetter} />
          : <CircularProgress size={100} color="primary" />}
      </Grid>
      <Grid item xs={6}>
        {
          rowsRequest && (
            <>
              <ListRequest requests={rowsRequest} handleSearchRequest={handleSearchRequest} checkAdmin={checkAdmin} />
            </>
          )
        }
      </Grid>
    </Grid>
  );
}

export default withRouter(ViewPrimary);
