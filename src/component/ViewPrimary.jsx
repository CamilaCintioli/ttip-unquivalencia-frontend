/* eslint-disable no-return-assign */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findIndex } from 'lodash';
import List from './ViewPrimary/List';
import columnsRequest from './ViewPrimary/columnsRequest';
import columnsFile from './ViewPrimary/columnsFile';
import { searchFile, searchRequest } from '../redux/actions/search';
import { fileResults, requestResult } from '../redux/selectors';

function ViewPrimary() {
  const rowsFile = useSelector((state) => fileResults(state), shallowEqual);
  const rowsRequest = useSelector((state) => requestResult(state), shallowEqual);
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    dispatch(searchFile());
  }, [dispatch, rowsRequest]);

  const handleSearchRequests = React.useCallback((id) => {
    dispatch(searchRequest({ fileId: id }));
  }, [searchRequest]);

  const handleSearchRequest = (idFile, idRequest) => {
    const index = findIndex(rowsRequest, (request) => request.id === idRequest);
    window.location.pathname = `file/${idFile}/solicitud/${idRequest}/${index}`;
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        {rowsFile
          ? <List key="file" title="Expedientes" columns={columnsFile} rows={rowsFile} handleSearch={handleSearchRequests} type="file" />
          : <CircularProgress size={100} color="primary" />}
      </Grid>
      <Grid item xs={6}>
        {
          rowsRequest && (
          <List
            key="request"
            title="Solicitudes"
            columns={columnsRequest}
            rows={rowsRequest}
            handleSearch={handleSearchRequest}
            type="request"
          />
          )
        }
      </Grid>
    </Grid>
  );
}

export default withRouter(ViewPrimary);
