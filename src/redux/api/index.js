import axios from 'axios';
import { get } from 'lodash';
import { loadUser, logout } from '../../service/userService';

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/api/v1`;

const apiCall = (url, data, headers, method, params = {}) => axios({
  method,
  url: baseUrl + url,
  data,
  params,
  headers: {
    ...headers,
    Authorization: `Bearer ${get(loadUser(), 'token', '')}`,
  },
}).catch((error) => {
  if (error.response.status === 450) {
    logout();
    return;
  }
  throw error;
});

export default apiCall;
