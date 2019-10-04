/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Avatar } from '@material-ui/core';

import logo from '../logo.jpeg';

const columns = [
  {
    field: 'id',
    title: 'Avatar',
    render: () => <Avatar src={logo} />,
  },
  { title: 'Nombre', field: 'name' },
  { title: 'Apellido', field: 'lastName' },
  { title: 'Email', field: 'email' },
  { title: 'Role', field: 'role', initialEditValue: 'User' },

];

export default columns;

//     {
//       url: logo,
//       name: 'Evangelina Pérez',
//       surname: 'Sobrero',
//       email: 'eperezsobrero@gmail.com',
//       role: 'User',
//     },
