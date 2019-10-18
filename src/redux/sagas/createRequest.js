import { put, call, takeLatest } from 'redux-saga/effects';
import {
  CREATE_REQUEST_START, CREATE_REQUEST_COMPLETE, CREATE_REQUEST_ERROR,
} from '../../consts/actionTypes';

import apiCall from '../api';

export function* createRequest({ payload }) {
  try {
    const results = yield call(apiCall, '/request', payload, null, 'POST');
    yield put({ type: CREATE_REQUEST_COMPLETE, results });
  } catch (error) {
    yield put({ type: CREATE_REQUEST_ERROR, error });
  }
}
export default function* create() {
  yield takeLatest(CREATE_REQUEST_START, createRequest);
}
