import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import List from './ViewPrimary/List';
import columnsRequest from './ViewPrimary/columnsRequest';
import columnsFile from './ViewPrimary/columnsFile';
import { searchFile, searchRequest } from '../redux/actions/search';
import { fileResults, requestResult } from '../redux/selectors';

function ViewPrimary({ history }) {
  const rowsFile = useSelector((state) => fileResults(state));
  const rowsRequest = useSelector((state) => requestResult(state));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(searchFile());
  }, [dispatch]);

  const handleSearchRequests = React.useCallback((id) => {
    dispatch(searchRequest({ fileId: id }));
  }, [searchRequest]);

  const handleSearchRequest = (id) => {
    history.push(`/solicitud/${id}`);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        {rowsFile
          ? <List key="file" title="Expedientes" columns={columnsFile} rows={rowsFile} handleSearch={handleSearchRequests} />
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
          />
          )
        }
      </Grid>
    </Grid>
  );
}

ViewPrimary.propTypes = {
  history: PropTypes.object.isRequired,
};


export default ViewPrimary;
