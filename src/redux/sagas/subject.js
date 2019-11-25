import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_UNIVERSITIES_COMPLETE, GET_UNIVERSITIES_ERROR, GET_UNIVERSITIES_START,
  GET_CAREERS_COMPLETE, GET_CAREERS_ERROR, GET_CAREERS_START,
  GET_YEAR_PLANS_COMPLETE, GET_YEAR_PLANS_ERROR, GET_YEAR_PLANS_START,
  GET_SUBJECTS_COMPLETE, GET_SUBJECTS_ERROR, GET_SUBJECTS_START,
  CREATE_SUBJECT_COMPLETE, CREATE_SUBJECT_ERROR, CREATE_SUBJECT_START,
} from '../../consts/actionTypes';
import apiCall from '../api';

export function* getUniversities() {
  try {
    const results = yield call(apiCall, '/universities', null, null, 'GET');
    const universities = results.data;
    yield put({ type: GET_UNIVERSITIES_COMPLETE, universities });
  } catch (error) {
    yield put({ type: GET_UNIVERSITIES_ERROR, error });
  }
}

export function* getCareers({ payload }) {
  const { university } = payload;
  try {
    const results = yield call(apiCall, `/careers?university=${university}`, null, null, 'GET');
    const careers = { university, careers: results.data };
    yield put({ type: GET_CAREERS_COMPLETE, careers });
  } catch (error) {
    yield put({ type: GET_CAREERS_ERROR, error });
  }
}

export function* getYearsPlan({ payload }) {
  const { university, career } = payload;
  try {
    const results = yield call(apiCall, `/plan/years?university=${university}&career=${career}`, null, null, 'GET');
    const years = { university, career, yearsPlan: results.data };
    yield put({ type: GET_YEAR_PLANS_COMPLETE, years });
  } catch (error) {
    yield put({ type: GET_YEAR_PLANS_ERROR, error });
  }
}

export function* getSubjects() {
  try {
    const results = yield call(apiCall, '/subjects', null, null, 'GET');
    const { subjects } = results.data;
    yield put({ type: GET_SUBJECTS_COMPLETE, subjects });
  } catch (error) {
    yield put({ type: GET_SUBJECTS_ERROR, error });
  }
}

export function* createSubject({ payload }) {
  try {
    const results = yield call(apiCall, '/subject', payload, null, 'POST');
    const subject = results.data;
    yield put({ type: CREATE_SUBJECT_COMPLETE, subject });
  } catch (error) {
    yield put({ type: CREATE_SUBJECT_ERROR, error });
  }
}

export default function* subject() {
  yield takeLatest(GET_UNIVERSITIES_START, getUniversities);
  yield takeLatest(GET_CAREERS_START, getCareers);
  yield takeLatest(GET_YEAR_PLANS_START, getYearsPlan);
  yield takeLatest(GET_SUBJECTS_START, getSubjects);
  yield takeLatest(CREATE_SUBJECT_START, createSubject);
}
