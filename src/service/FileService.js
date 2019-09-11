import axios from 'axios';

const port = 'http://localhost:8000/';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const API = {
  getFiles: async () => axios.get(`${port}api/v1/files`, config).then((response) => response.data),
  getRequests: async (id) => axios.get(`${port}api/v1/requests/${id}`, config).then((response) => response.data),

};

export default API;
