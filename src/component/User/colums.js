/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Avatar } from '@material-ui/core';

const columns = [
  {
    field: 'url',
    title: 'Avatar',
    render: (rowData) => <Avatar src={rowData.url} />,
  },
  { title: 'Nombre', field: 'name' },
  { title: 'Apellido', field: 'surname' },
  { title: 'Email', field: 'email' },
  { title: 'Role', field: 'role', initialEditValue: 'User' },

];

export default columns;
