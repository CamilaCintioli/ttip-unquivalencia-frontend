import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_USER_START, GET_USER_ERROR, GET_USER_COMPLETE,
} from '../../consts/actionTypes';

import apiCall from '../api';

export function* getUser({ payload }) {
  try {
    console.log(payload);
    const results = yield call(apiCall, '/user/session', payload, null, 'POST');
    yield put({ type: GET_USER_COMPLETE, results });
  } catch (error) {
    yield put({ type: GET_USER_ERROR, error });
  }
}

export default function* user() {
  yield takeLatest(GET_USER_START, getUser);
}
