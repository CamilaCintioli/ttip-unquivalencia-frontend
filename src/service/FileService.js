
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
  newFile: (file) => axios.post(`${port}/request`, file, getConfig()).catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
};

export default API;
