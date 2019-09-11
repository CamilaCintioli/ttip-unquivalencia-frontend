/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';
import API from '../../service/FileService';

function RequestList(props) {
  const [data, setData] = React.useState([]);
  React.useEffect(
    () => {
      API.getRequests(props.fileId).then(setData);
    }, [props.fileId],

  );

  const handleBootom = (id) => {
    console.log(`cabiar la ruta con el ${id}`);
  };

  const rows = data.map((request, key) => (
    <tr key={key}>
      <th scope="row">{request.id}</th>
      <th>{request.univesityOrigin}</th>
      <th>{request.subjectOrigin}</th>
      <th>{request.subjectUnq}</th>
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
