import {
  GET_UNIVERSITIES_START, GET_YEAR_PLANS_START, GET_CAREERS_START, GET_SUBJECTS_START, CREATE_SUBJECT_START,
} from '../../consts/actionTypes';

export const getUniversities = (payload) => ({
  type: GET_UNIVERSITIES_START,
  payload,
});

export const getYearPlans = (payload) => ({
  type: GET_YEAR_PLANS_START,
  payload,
});

export const getCareers = (payload) => ({
  type: GET_CAREERS_START,
  payload,
});

export const getSubjects = (payload) => ({
  type: GET_SUBJECTS_START,
  payload,
});

export const createSubject = (payload) => ({
  type: CREATE_SUBJECT_START,
  payload,
});
