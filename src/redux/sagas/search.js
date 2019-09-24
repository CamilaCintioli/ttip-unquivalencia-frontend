import { put, call, takeLatest } from 'redux-saga/effects';
import {
  SEARCH_FILE_START, SEARCH_FILE_ERROR, SEARCH_FILE_COMPLETE, SEARCH_REQUEST_START,
  SEARCH_REQUEST_COMPLETE, SEARCH_REQUEST_ERROR, SEARCH_REQUEST_BY_ID_START,
  SEARCH_REQUEST_BY_ID_COMPLETE, SEARCH_REQUEST_BY_ID_ERROR,
} from '../../consts/actionTypes';

import apiCall from '../api';

export function* searchFile() {
  try {
    const results = yield call(apiCall, '/files', null, null, 'GET');
    yield put({ type: SEARCH_FILE_COMPLETE, results });
  } catch (error) {
    yield put({ type: SEARCH_FILE_ERROR, error });
  }
}

export function* searchRequest({ payload }) {
  try {
    const results = yield call(apiCall, `/requests/${payload.fileId}`, null, null, 'GET');
    yield put({ type: SEARCH_REQUEST_COMPLETE, results });
  } catch (error) {
    yield put({ type: SEARCH_REQUEST_ERROR, error });
  }
}

export function* searchRequestById({ payload }) {
  try {
    const movie = yield call(apiCall, `/${payload.movieId}`, null, null, 'GET');
    yield put({ type: SEARCH_REQUEST_BY_ID_COMPLETE, movie });
  } catch (error) {
    yield put({ type: SEARCH_REQUEST_BY_ID_ERROR, error });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_FILE_START, searchFile);
  yield takeLatest(SEARCH_REQUEST_START, searchRequest);
  yield takeLatest(SEARCH_REQUEST_BY_ID_START, searchRequestById);
}
