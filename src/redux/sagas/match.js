import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_MATCH_START,
  GET_MATCH_COMPLETE,
  GET_MATCH_ERROR,
} from '../../consts/actionTypes';

import apiCall from '../api';

export function* searchFile({ payload }) {
  try {
    const results = yield call(apiCall, `/matchs/requests/${payload.requestId}`, null, null, 'GET');
    yield put({ type: GET_MATCH_COMPLETE, results });
  } catch (error) {
    yield put({ type: GET_MATCH_ERROR, error });
  }
}

export default function* match() {
  yield takeLatest(GET_MATCH_START, searchFile);
}
