import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_USER_START, GET_USER_ERROR, GET_USER_COMPLETE,
  GET_USERS_COMPLETE, GET_USERS_ERROR, GET_USERS_START,
  CREATE_USER_START, CREATE_USER_COMPLETE, CREATE_USER_ERROR,
} from '../../consts/actionTypes';

import apiCall from '../api';

export function* getUser({ payload }) {
  try {
    const results = yield call(apiCall, '/user/session', payload, null, 'POST');
    yield put({ type: GET_USER_COMPLETE, results });
  } catch (error) {
    yield put({ type: GET_USER_ERROR, error });
  }
}

export function* getUsers() {
  try {
    const results = yield call(apiCall, '/users', null, null, 'GET');
    yield put({ type: GET_USERS_COMPLETE, results });
  } catch (error) {
    yield put({ type: GET_USERS_ERROR, error });
  }
}

export function* createUser({ payload }) {
  try {
    const results = yield call(apiCall, '/new/user', payload, null, 'POST');
    yield put({ type: CREATE_USER_COMPLETE, results });
  } catch (error) {
    yield put({ type: CREATE_USER_ERROR, error });
  }
}

export default function* user() {
  yield takeLatest(GET_USER_START, getUser);
  yield takeLatest(GET_USERS_START, getUsers);
  yield takeLatest(CREATE_USER_START, createUser);
}
