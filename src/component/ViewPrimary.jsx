import React, { useState } from 'react';
import { withRouter, useHistory, Link } from 'react-router-dom';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import List from './ViewPrimary/List';
import columnsRequest from './ViewPrimary/columnsRequest';
import columnsFile from './ViewPrimary/columnsFile';
import { searchFile, searchRequest } from '../redux/actions/search';
import { fileResults, requestResult, userRole } from '../redux/selectors';
import { isAdmin } from './User/userRole';
import FeedbackBar from './FeedbackBar';
import ListRequest from './ViewPrimary/ListRequest';

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

  const handleSearchRequest = (idRequest) => {
    history.push(`/solicitud/${idRequest}`);
  };
  console.log('asdasd');
  console.log(rowsRequest);
  return (
    <Grid container spacing={3}>
      <FeedbackBar showNotification={JSON.parse(localStorage.getItem('notification'))} />
      <Grid item xs={6}>
        {rowsFile
          ? <List key="file" title="Expedientes" columns={columnsFile} rows={rowsFile} handleSearch={handleSearchRequests} type="file" />
          : <CircularProgress size={100} color="primary" />}
      </Grid>
      <Grid item xs={6}>
        {
          rowsRequest && (
            <>
              <ListRequest requests={rowsRequest} handleSearchRequest={handleSearchRequest} />
              {isAdmin(user)
                && (
                <Link to={`file/${fileNumber}/request/new`}>
                  <Button color="primary" variant="contained">Cargar solicitud</Button>
                </Link>
                )}

            </>
          )
        }
      </Grid>
    </Grid>
  );
}

export default withRouter(ViewPrimary);
