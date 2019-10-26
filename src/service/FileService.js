
import axios from 'axios';
import { get } from 'lodash';
import { loadUser, logout } from './userService';

const port = `${process.env.REACT_APP_BACKEND_URL}/api/v1`;

const getConfig = () => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${get(loadUser(), 'token', '')}`,
  },
});

const API = {
  getFiles: () => axios.get(`${port}/files`, getConfig()).then((response) => response.data).catch((error) => (error.response.status === 450 ? logout() : console.log(error))),
  getRequests: (id) => axios.get(`${port}/requests/${id}`, getConfig()).then((response) => response.data).catch((error) => (error.response.status === 450 ? logout() : console.log(error))),
  newFile: (file) => axios.post(`${port}/request`, file, getConfig()).catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
  getUsersAxios: () => axios.get(`${port}/users`, getConfig()).then((response) => response.data.users).catch((error) => (error.response.status === 450 ? logout() : console.log(error))),
  addUserAxios: (user) => axios.post(`${port}/new/user`, user, getConfig()).catch((error) => (error.response.status === 450 ? logout() : console.log(error))),
};

export default API;
