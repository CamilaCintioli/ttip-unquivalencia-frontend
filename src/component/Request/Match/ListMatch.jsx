/* eslint-disable no-nested-ternary */
/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import MaterialTable from 'material-table';
import { isEmpty } from 'lodash';

const ListMatch = ({ requests }) => (

  isEmpty(requests.requestsMatch) ? null
    : (
      <MaterialTable
        title="Historial Negativo"
        columns={[
          { title: 'Nº', field: 'fileNumber', defaultGroupOrder: 0 },
          { title: 'Carrera Origen', field: 'careerOrigin' },
          { title: 'Materia Origen', field: 'subjectOrigin' },
          { title: 'Año Plan ', field: 'yearPlanOrigin', type: 'numeric' },
          { title: 'cursada', field: 'yearPlanOrigin' },
          { title: 'Hora semanales', field: 'subjectOriginWeeklyHours', type: 'numeric' },
          { title: 'Hora total', field: 'subjectOriginTotalHours', type: 'numeric' },
          { title: 'Asignada', field: 'subjectOriginTotalHours' },

        ]}
        data={requests.requestsMatch}
        options={{
          grouping: true,
        }}
      />
    )


);

export default ListMatch;
