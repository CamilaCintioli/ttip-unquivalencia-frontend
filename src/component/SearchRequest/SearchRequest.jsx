/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useCallback } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { pickBy, isEmpty } from 'lodash';
import { isNumber } from 'util';
import { Pagination } from 'semantic-ui-react';
import Search from './Search';
import Requests from './Requests';
import api from '../../redux/api/index';
import Messages, { useStyles } from '../shared/Messages';

function SearchRequest() {
  const classes = useStyles();
  const history = useHistory();
  const [rowsRequest, setRowsRequest] = useState([]);

  const [controlPage, setControlPage] = useState({
    total_pages: 0,
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
    limit: 8,
  });

  const handleSearchRequests = useCallback((query = {}) => {
    const data = { ...pickBy(search, (x) => !isEmpty(x) || isNumber(x)), ...query };
    api('/requests', null, null, 'GET', data).then(({ data: { requests, total_pages } }) => {
      setRowsRequest(requests);
      setControlPage({ ...controlPage, total_pages });
      return data;
    });
  }, [controlPage, search]);

  const handleChange = ({ target: { name, value } }) => {
    console.log(`name:${name}-value:${value}`);
    setSearch({ ...search, [name]: value });
    console.log(search);
  };

  const onClickSearch = () => {
    const page = 1;
    setSearch({ ...search, page });
    console.log(search);
    handleSearchRequests({ page });
  };
  const handleSearchRequest = (requestId, subjectId) => history.push(`/solicitud/${requestId}/materia/${subjectId}`);

  const onClick = (event, data) => {
    const page = data.activePage;
    setSearch({ ...search, page });
    console.log(search);
    handleSearchRequests({ page });
  };

  return (
    <div className="row">
      <div className="col-4">
        <h3>
            Buscador de solicitudes
        </h3>
        <hr />
        <Search
          form={search}
          handleChange={handleChange}
          onClick={onClickSearch}
        />
      </div>
      <div className="col-8">
        {!isEmpty(rowsRequest)

          ? (
            <>
              <h3>
            Solicitudes
              </h3>
              <hr />
              <Requests
                title="Solicitudes"
                isSearch={1}
                requests={rowsRequest}
                handleSearchRequest={handleSearchRequest}
                pageSize={5}
              />
              <hr />
              <div className="row justify-content-md-center">
                <Pagination
                  defaultActivePage={1}
                  totalPages={controlPage.total_pages}
                  onPageChange={onClick}
                />
              </div>
            </>
          )
          : (
            <Messages
              variant="info"
              className={classes.margin}
              message="No se encontraron solicitudes"
            />
          )}
      </div>
    </div>
  );
}

export default withRouter(SearchRequest);
