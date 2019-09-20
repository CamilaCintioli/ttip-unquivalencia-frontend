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
  const [viewRequest, setViewRequest] = React.useState(false);
  const rowsFile = useSelector((state) => fileResults(state));
  const rowsRequest = useSelector((state) => requestResult(state));
  const [fileId, setFileId] = React.useState(undefined);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(searchFile());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(searchRequest({ fileId }));
  }, [dispatch, fileId]);


  const handleSearchRequests = (id) => {
    setViewRequest(true);
    setFileId(id);
  };

  const handleSearchRequest = (id) => {
    history.push(`/solicitud/${id}`);
  };

  const renderFile = () => (rowsFile ? <List key="file" title="Expedientes" columns={columnsFile} rows={rowsFile} handleSearch={handleSearchRequests} />
    : <CircularProgress size={100} color="primary" />);

  const renderRequest = () => (viewRequest ? <List key="request" title="Solicitudes" columns={columnsRequest} rows={rowsRequest} handleSearch={handleSearchRequest} />
    : null);

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        {renderFile()}
      </Grid>
      <Grid item xs={6}>
        {renderRequest()}
      </Grid>
    </Grid>
  );
}

ViewPrimary.propTypes = {
  history: PropTypes.object.isRequired,
};


export default ViewPrimary;
