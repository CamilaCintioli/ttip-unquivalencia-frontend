import React from 'react';
import MaterialTable from 'material-table';
import columnsRequest from '../../../shared/columnsRequest';
import TableSubject from '../../../shared/TableSubject';


const MatchNegative = ({ requestsMatch }) => (

  <MaterialTable
    title="Historial negativo"
    columns={columnsRequest}
    data={requestsMatch}
    options={{
      search: true,
    }}
    detailPanel={(rowData) => (
      <TableSubject isSearch={0} row={rowData} handleSearchRequest={null} />
    )}
  />
);

export default MatchNegative;
