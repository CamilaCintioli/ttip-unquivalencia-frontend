
import axios from 'axios';
import { get } from 'lodash';
import { loadUser, logout } from './userService';
import apiCall from '../redux/api';

const port = `${process.env.REACT_APP_BACKEND_URL}/api/v1`;

const getConfig = () => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${get(loadUser(), 'token', '')}`,
  },
});

const API = {
  searchUniversities: () => axios.get(`${port}/universities`, getConfig())
    .catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
  searchCareers: (university) => axios.get(`${port}/careers?university=${university}`, getConfig())
    .catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
  searchPlanYears: (university, career) => axios.get(`${port}/plan/years?university=${university}&career=${career}`, getConfig())
    .catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
  searchSubjectsByUniversityCareerAndPlan: (university, career, yearPlan) => axios.get(`${port}/subjects?university=${university}&career=${career}&yearPlan=${yearPlan}`, getConfig())
    .catch((error) => { if (error.response.status === 450) { logout(); } throw error; }),
};

export default API;
