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
        onRowAdd: (newData) => createUser(newData),
        // onRowUpdate: (newData, oldData) => new Promise((resolve) => {
        //   setTimeout(() => {
        //     resolve();
        //     const data = [...state.data];
        //     data[data.indexOf(oldData)] = newData;
        //     setState({ ...state, data });
        //   }, 600);
        // }),
        // onRowDelete: (oldData) => new Promise((resolve) => {
        //   setTimeout(() => {
        //     resolve();
        //     const data = [...state.data];
        //     data.splice(data.indexOf(oldData), 1);
        //     setState({ ...state, data });
        //   }, 600);
        // }),
      }}
    />
  );
}

export default User;
