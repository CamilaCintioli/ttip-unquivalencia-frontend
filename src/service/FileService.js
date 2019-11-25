
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
  newFile: (file) => axios.post(`${port}/file`, file, getConfig()).catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
  deleteFile: (fileId) => axios.delete(`${port}/file/${fileId}`, getConfig(), null).catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
  duplicateFile: (fileId) => axios.post(`${port}/duplicate/file/${fileId}`, null, getConfig()).catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
  deleteRequest: (requestId) => axios.delete(`${port}/request/${requestId}`, getConfig(), null).catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
};

export default API;
