import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/v1';

const apiCall = (url, data, headers, method) => axios({
  method,
  url: baseUrl + url,
  data,
  headers,
});

export default apiCall;
