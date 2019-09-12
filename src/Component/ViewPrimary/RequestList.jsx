/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';
import API from '../../service/FileService';

function RequestList({ history, fileId }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    let isSubscribed = true;
    API.getRequests(fileId).then((request) => {
      if (isSubscribed) {
        setData(request);
      }
    });
    return () => isSubscribed = false;
  }, [fileId]);

  const handleBootom = (id) => {
    history.push(`/solicitud/${id}`);
  };

  const rows = data.map((request, key) => (
    <tr key={key}>
      <th scope="row">{request.fileNumber}</th>
      <th>{request.univesityOrigin}</th>
      <th>{request.subjectOrigin}</th>
      <th>{request.subjectUnq}</th>
      <th>{request.equivalence}</th>
      <td className="fit">
        <button className="btn btn-light" onClick={() => handleBootom(request.id)}>
          <i className="fa fa-search" />
        </button>
      </td>
    </tr>
  ));
  return (
    <div>
      <h1>Solcitudes</h1>
      <table className="table table-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Universidad</th>
            <th scope="col">Ofrece</th>
            <th scope="col">Pide</th>
            <th scope="col">Estado</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RequestList;
