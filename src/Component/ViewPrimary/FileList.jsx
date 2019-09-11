/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';
import API from '../../service/FileService';
import usePromise from '../../hooks/usePromise';

function File(props) {
  const [data] = usePromise(() => API.getFiles(), [], []);

  const rows = data.map((file, i) => (
    <tr key={i}>
      <th scope="row">{file.fileNumber}</th>
      <th>{file.name}</th>
      <th>{file.surname}</th>
      <td className="fit">
        <button className="btn btn-light" onClick={() => props.fatherFunction()(file.id)}>
          <i className="fa fa-search" />
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h1>Expedientes</h1>
      <table className="table table-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
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

export default File;
