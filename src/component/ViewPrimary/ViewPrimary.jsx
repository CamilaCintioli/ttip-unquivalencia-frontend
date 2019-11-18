import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Grid, CircularProgress } from '@material-ui/core';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { searchFile, searchRequest } from '../../redux/actions/search';
import { fileResults, requestResult, userRole } from '../../redux/selectors';
import { isAdmin, isAdminOrUser } from '../UserView/userRole';
import FeedbackBar from '../Dashboard/FeedbackBar';
import ListRequest from './ListRequest';
import ListFile from './ListFile';

function ViewPrimary() {
  const rowsFile = useSelector((state) => fileResults(state), shallowEqual);
  const rowsRequest = useSelector((state) => requestResult(state), shallowEqual);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => userRole(state));
  const [fileIdSelected, setFileIdSelected] = useState();

  React.useLayoutEffect(() => {
    dispatch(searchFile());
  }, [dispatch, rowsRequest]);

  const handleSearchRequests = React.useCallback((id) => {
    setFileIdSelected(id);
    dispatch(searchRequest({ fileId: id }));
  }, [dispatch, setFileIdSelected]);

  const handleSearchRequest = (requestId, subjectId) => history.push(`/solicitud/${requestId}/materia/${subjectId}`);


  const addRequest = (file) => { history.push(`file/${file.replace('/', '-')}/request/new`); };

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
              <ListRequest
                title="Solicitudes"
                isSearch={1}
                requests={rowsRequest}
                handleSearchRequest={handleSearchRequest}
                checkAdmin={checkAdmin}
                pageSize={10}
                fileSelected={fileIdSelected}
              />
            </>
          )
        }
      </Grid>
    </Grid>
  );
}

export default withRouter(ViewPrimary);
