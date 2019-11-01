import { put, call, takeLatest } from 'redux-saga/effects';
import {
  SEARCH_FILE_START, SEARCH_FILE_ERROR, SEARCH_FILE_COMPLETE, SEARCH_REQUEST_START,
  SEARCH_REQUEST_COMPLETE, SEARCH_REQUEST_ERROR, SEARCH_REQUEST_BY_ID_START,
  SEARCH_REQUEST_BY_ID_COMPLETE, SEARCH_REQUEST_BY_ID_ERROR,
  SEARCH_FILE_BY_FILE_NUMBER_START, SEARCH_FILE_BY_FILE_NUMBER_COMPLETE,
  SEARCH_FILE_BY_FILE_NUMBER_ERROR,
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
    const equivalenceRequest = yield call(apiCall, `/request/${payload.requestId}`, null, null, 'GET');
    yield put({ type: SEARCH_REQUEST_BY_ID_COMPLETE, equivalenceRequest });
  } catch (error) {
    yield put({ type: SEARCH_REQUEST_BY_ID_ERROR, error });
  }
}

export function* searchFileByFileNumber({ payload }) {
  try {
    const file = yield call(apiCall, `/file?fileNumber=${payload.fileNumber}`, null, null, 'GET');
    yield put({ type: SEARCH_FILE_BY_FILE_NUMBER_COMPLETE, file });
  } catch (error) {
    yield put({ type: SEARCH_FILE_BY_FILE_NUMBER_ERROR, error });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_FILE_START, searchFile);
  yield takeLatest(SEARCH_REQUEST_START, searchRequest);
  yield takeLatest(SEARCH_REQUEST_BY_ID_START, searchRequestById);
  yield takeLatest(SEARCH_FILE_BY_FILE_NUMBER_START, searchFileByFileNumber);
}
