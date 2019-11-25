
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
  searchMailsFromUsers: () => axios.get(`${port}/mails`, getConfig())
    .catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
  getLetter: (fileId) => axios.get(`${port}/letter/${fileId}`, getConfig())
    .catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
};

export default API;
