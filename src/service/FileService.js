import axios from 'axios';
import { get } from 'lodash';
import { loadUser } from '../service/userService';

const port = `${process.env.REACT_APP_BACKEND_URL}/api/v1`;

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${get(loadUser(), 'token', '')}`
  },
};

const API = {
  getFiles: () => axios.get(`${port}/files`, config).then((response) => response.data),
  getRequests: (id) => axios.get(`${port}/requests/${id}`, config).then((response) => response.data),
  newFile: (file) => axios.post(`${port}/request`, file),
  getUsersAxios: () => axios.get(`${port}/users`, config).then((response) => response.data.users),
  addUserAxios: user => axios.post(`${port}/new/user`, user, config)
};

export default API;
