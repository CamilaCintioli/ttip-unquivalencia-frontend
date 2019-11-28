import React, { useState, useCallback } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Pagination } from 'semantic-ui-react';
import { pickBy, isEmpty } from 'lodash';
import { isNumber } from 'util';
import { searchRequest } from '../../redux/actions/search';
import { getFile } from '../../redux/actions/file';
import {
  requestResult, userRole, files, totalPageFile,
} from '../../redux/selectors';
import { isAdmin, isAdminOrUser } from '../UserView/userRole';
import FeedbackBar from '../Dashboard/FeedbackBar';
import ListRequest from './ListRequest';
import ListFile from './ListFile';
import api from '../../redux/api/index';
import Search from './Search';
import Messages, { useStyles } from '../shared/Messages';


function ViewPrimary() {
  // Style
  const classes = useStyles();
  // Selectors
  const rowsRequest = useSelector((state) => requestResult(state), shallowEqual);
  const rowsFile = useSelector((state) => files(state));
  const totalPage = useSelector((state) => totalPageFile(state));
  const user = useSelector((state) => userRole(state));
  // Hook Extra
  const dispatch = useDispatch();
  const history = useHistory();
  const [fileIdSelected, setFileIdSelected] = useState();
  const [isRequest, setIsRequest] = useState(false);

  const [search, setSearch] = useState({
    fileNumber: '',
    name: '',
    surname: '',
    mail: '',
    dni: '',
    yearNote: '',
    status: '',
    legajo: '',
    page: 1,
    limit: 8,
  });

  const handleSearchFile = useCallback((query = {}) => {
    const data = { ...pickBy(search, (x) => !isEmpty(x) || isNumber(x)), ...query };
    dispatch(getFile({ query: data }));
  }, [dispatch, search]);

  const onClick = (event, data) => {
    const page = data.activePage;
    setSearch({ ...search, page });
    handleSearchFile({ page });
  };

  const handleChange = ({ target: { name, value } }) => {
    console.log(`name:${name}-value:${value}`);
    setSearch({ ...search, [name]: value });
    console.log(search);
  };


  const handleSearchRequests = React.useCallback((id) => {
    setFileIdSelected(id);
    dispatch(searchRequest({ fileId: id }));
    setIsRequest(true);
  }, [dispatch]);

  const handleSearchRequest = (requestId, subjectId) => history.push(`/solicitud/${requestId}/materia/${subjectId}`);


  const addRequest = (file) => history.push(`file/${file.replace('/', '-')}/request/new`);

  const checkAdmin = isAdmin(user);

  const checkLetter = (status) => isAdminOrUser(user) && status === 0;

  const onClickSearch = () => {
    const page = 1;
    setSearch({ ...search, page });
    console.log(search);
    handleSearchFile({ page });
  };

  const goFile = () => {
    setIsRequest(false);
  };

  return (
    <div className="row">
      <FeedbackBar showNotification={JSON.parse(localStorage.getItem('notificationFile'))} />
      {!isRequest
        ? (
          <>
            <div className="col-2">
              <h2>Buscador</h2>
              <hr />
              <Search
                form={search}
                handleChange={handleChange}
                onClick={onClickSearch}
              />
            </div>
            <div className="col-10">
              {!isEmpty(rowsFile)
                ? (
                  <>
                    <h2>Expedientes</h2>
                    <hr />
                    <ListFile
                      files={rowsFile}
                      handleSearch={handleSearchRequests}
                      addRequest={addRequest}
                      checkAdmin={checkAdmin}
                      checkLetter={checkLetter}
                      handleSearchFile={handleSearchFile}
                    />
                    <div className="row justify-content-md-center">
                      <Pagination
                        defaultActivePage={1}
                        totalPages={1}
                        onPageChange={onClick}
                      />
                    </div>
                  </>
                )
                : (
                  <Messages
                    variant="info"
                    className={classes.margin}
                    message="No se encontraron expediente"
                  />
                )}
            </div>
          </>
        )
        : (
          <div className="col-12">
            {
          rowsRequest && (
            <>
              <h2>
                Solicitudes
                {' '}
                {'  '}
                <button className="btn btn-outline-secondary" onClick={goFile}>Volver</button>
              </h2>
              <hr />
              <ListRequest
                title="Listado"
                isSearch={1}
                requests={rowsRequest}
                handleSearchRequest={handleSearchRequest}
                checkAdmin={checkAdmin}
                pageSize={5}
                fileSelected={fileIdSelected}
              />
            </>
          )
        }
          </div>
        )}
    </div>
  );
}

export default withRouter(ViewPrimary);
