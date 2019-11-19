/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { pickBy, isEmpty } from 'lodash';
import Pagination from 'semantic-ui-react-button-pagination';
import { isNumber } from 'util';
import Search from './Search';
import Requests from './Requests';
import api from '../../redux/api/index';


function SearchRequest() {
  const history = useHistory();
  const [rowsRequest, setRowsRequest] = useState([]);

  const [controlPage, setControlPage] = useState({
    total_pages: 3,
    offset: '',
  });

  const [search, setSearch] = useState({
    universityOrigin: '',
    careerOrigin: '',
    yearPlanOrigin: '',
    subjectOrigin: '',
    careerUnq: '',
    subjectUnq: '',
    type: '',
    page: 1,
    limit: 5,

  });

  const handleSearchRequests = React.useCallback((query = {}) => {
    const data = { ...pickBy(search, (x) => !isEmpty(x) || isNumber(x)), ...query };
    api('/requests', null, null, 'GET', data).then(({ data: { requests, total_pages } }) => {
      setRowsRequest(requests);
      const offset = (search.page - 1) * search.limit;
      setControlPage({ ...controlPage, total_pages, offset });
      return data;
    });
  }, [controlPage, search]);

  const handleChange = ({ target: { name, value } }) => {
    setSearch({ ...search, [name]: value });
    return handleSearchRequests();
  };
  const handleSearchRequest = (requestId, subjectId) => history.push(`/solicitud/${requestId}/materia/${subjectId}`);
  const handleClick = (offset) => {
    const { limit } = search;
    const page = offset / limit;
    setControlPage({ ...controlPage, offset });
    setSearch({ ...search, page });
    handleSearchRequests({ limit, page });
  };

  return (
    <div className="row">
      <div className="col-4">
        <h3>
            Buscador
        </h3>
        <hr />
        <Search form={search} handleChange={handleChange} />
      </div>
      <div className="col-8">
        <h3>
            Solicitudes
        </h3>
        <hr />
        <Requests
          title="Solicitudes"
          isSearch={1}
          requests={rowsRequest}
          handleSearchRequests={handleSearchRequests}
          handleSearchRequest={handleSearchRequest}
          pageSize={5}
        />
        <hr />
        {/* <Pagination
          limit={search.limit}
          total={controlPage.total_pages}
          offset={controlPage.offset}
          onClick={(e, props, offset) => handleClick(offset)}
        /> */}
      </div>
    </div>
  );
}

export default withRouter(SearchRequest);
