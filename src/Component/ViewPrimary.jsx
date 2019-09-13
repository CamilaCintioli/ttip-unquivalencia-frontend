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
    let isSubscribed = true;
    API.getFiles().then((files) => {
      if (isSubscribed) {
        setRowsFile(files);
      }
    });
    return () => isSubscribed = false;
  }, []);


  React.useEffect(() => {
    let isSubscribed = true;
    API.getRequests(fileId).then((request) => {
      if (isSubscribed) {
        setRowsRequest(request);
      }
    });
    return () => isSubscribed = false;
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
        <List columns={columnsFile} rows={rowsFile} handleSearch={handleSearchRequests} />
      </Grid>
      {viewRequest
        ? (
          <Grid item xs={6}>
            <List columns={columnsRequest} rows={rowsRequest} handleSearch={handleSearchRequest} />
          </Grid>
        )
        : null}
    </Grid>
  );
}

export default ViewPrimary;
