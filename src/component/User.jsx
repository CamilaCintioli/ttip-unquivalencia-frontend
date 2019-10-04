import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import columns from './User/colums';
// import logo from './logo.jpeg';
import { getUsers } from '../redux/actions/user';
import { usersResults } from '../redux/selectors';

function User() {
  const users = useSelector((state) => usersResults(state));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  // const [state, setState] = React.useState({
  //   data: [
  //     {
  //       url: logo,
  //       name: 'Gabriela',
  //       surname: 'Arevalo',
  //       email: 'gabriela.b.arevalo@gmail.com ',
  //       role: 'Admin',
  //     },
  //     {
  //       url: logo,
  //       name: 'Evangelina Pérez',
  //       surname: 'Sobrero',
  //       email: 'eperezsobrero@gmail.com',
  //       role: 'User',
  //     },
  //     {
  //       url: logo,
  //       name: 'Susana',
  //       surname: 'Rosito',
  //       email: 'rosito.susana@gmail.com',
  //       role: 'Docente',
  //     },
  //   ],
  // });

  return (
    <MaterialTable
      title="Usuarios"
      columns={columns}
      data={users}
      editable={{
        // onRowAdd: (newData) => new Promise((resolve) => {
        //   setTimeout(() => {
        //     resolve();
        //     const data = [...state.data];
        //     data.push(newData);
        //     setState({ ...state, data });
        //   }, 600);
        // }),
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
