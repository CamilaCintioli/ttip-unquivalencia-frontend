import axios from 'axios';

const port = `${process.env.REACT_APP_BACKEND_URL}/api/v1`;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const API = {
  getFiles: () => axios.get(`${port}/files`, config).then((response) => response.data),
  getRequests: (id) => axios.get(`${port}/requests/${id}`, config).then((response) => response.data),
  newFile: (file) => axios.post(`${port}/request`, file),

};

export default API;
