import React from 'react';
import { Grid } from '@material-ui/core';
import List from './ViewPrimary/List';
import API from '../service/FileService';
import columnsRequest from './ViewPrimary/columnsRequest';
import columnsFile from './ViewPrimary/columnsFile';

function ViewPrimary({ history }) {
  const [viewRequest, setViewRequest] = React.useState(false);
  const [fileId, setFileId] = React.useState(undefined);
  const [rowsFile, setRowsFile] = React.useState([]);

  const [rowsRequest, setRowsRequest] = React.useState([]);


  React.useEffect(() => {
    API.getFiles().then((files) => {
      setRowsFile(files);
    });
  }, []);


  React.useEffect(() => {
    API.getRequests(fileId).then((request) => {
      setRowsRequest(request);
    });
  }, [fileId]);


  const handleSearchRequests = (id) => {
    setViewRequest(true);
    setFileId(id);
  };

  const handleSearchRequest = (id) => {
    history.push(`/solicitud/${id}`);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <List key="file" title="Expedientes" columns={columnsFile} rows={rowsFile} handleSearch={handleSearchRequests} />
      </Grid>
      {viewRequest
        ? (
          <Grid item xs={6}>
            <List key="request" title="Solicitudes" columns={columnsRequest} rows={rowsRequest} handleSearch={handleSearchRequest} />
          </Grid>
        )
        : null}
    </Grid>
  );
}

export default ViewPrimary;
