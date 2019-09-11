import React from 'react';
import FileList from './ViewPrimary/FileList';
import RequestList from './ViewPrimary/RequestList';

function ViewPrimary() {
  const [viewRequest, setViewRequest] = React.useState(false);
  const [fileId, setFileId] = React.useState(undefined);

  const handleOnClick = (id) => {
    setViewRequest(true);
    setFileId(id);
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col col-lg-6">
        <FileList fatherFunction={() => handleOnClick} />
      </div>
      {viewRequest
        ? (
          <div className="col col-lg-6">
            <RequestList fileId={fileId} />
          </div>
        )
        : null}
    </div>
  );
}

export default ViewPrimary;
