import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/api/v1`;

console.log(process.env.REACT_APP_BACKEND_URL);

const apiCall = (url, data, headers, method) => axios({
  method,
  url: baseUrl + url,
  data,
  headers,
});

export default apiCall;
