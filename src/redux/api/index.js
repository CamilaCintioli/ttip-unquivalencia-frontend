import axios from 'axios';
import { get } from 'lodash';
import { loadUser } from '../../service/userService';

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/api/v1`;

console.log(process.env.REACT_APP_BACKEND_URL);

const apiCall = (url, data, headers, method) => axios({
  method,
  url: baseUrl + url,
  data,
  headers: {
    ...headers,
    Authorization: `Bearer ${get(loadUser(), 'token', '')}`,
  },
});

export default apiCall;
