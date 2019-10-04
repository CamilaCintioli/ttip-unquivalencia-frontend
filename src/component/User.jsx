import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import columns from './User/colums';
import { registerUser, getUsers } from '../redux/actions/user';
import { usersResults } from '../redux/selectors';

function User() {
  const users = useSelector((state) => usersResults(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const createUser = useCallback((newData) => {
    dispatch(registerUser(newData));
  }, [dispatch]);

  return (
    <MaterialTable
      title="Usuarios"
      columns={columns}
      data={users}
      editable={{
        onRowAdd: (newData) => new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            createUser(newData);
          }, 600);
        }),
        onRowUpdate: (newData, oldData) => new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 600);
        }),
        onRowDelete: (oldData) => new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 600);
        }),
      }}
    />
  );
}

export default User;
