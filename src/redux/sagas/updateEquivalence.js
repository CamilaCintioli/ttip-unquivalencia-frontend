import { put, call, takeLatest } from 'redux-saga/effects';
import {
  APPROVE_EQUIVALENCE_START, APPROVE_EQUIVALENCE_COMPLETE, APPROVE_EQUIVALENCE_ERROR,
  REJECT_EQUIVALENCE_START, REJECT_EQUIVALENCE_COMPLETE, REJECT_EQUIVALENCE_ERROR,
  SEARCH_REQUEST_START, CONSULT_EQUIVALENCE_START, CONSULT_EQUIVALENCE_ERROR, CONSULT_EQUIVALENCE_COMPLETE,
} from '../../consts/actionTypes';

import apiCall from '../api';

export function* approveEquivalence({ payload }) {
  try {
    const results = yield call(apiCall, `/request/${payload.requestId}`, { equivalence: 'APROBADA' }, null, 'POST');
    yield put({ type: APPROVE_EQUIVALENCE_COMPLETE, results });
    yield put({ type: SEARCH_REQUEST_START, payload });
  } catch (error) {
    yield put({ type: APPROVE_EQUIVALENCE_ERROR, error });
  }
}

export function* rejectEquivalence({ payload }) {
  try {
    const results = yield call(apiCall, `/request/${payload.requestId}`, { equivalence: 'NEGADA' }, null, 'POST');
    yield put({ type: REJECT_EQUIVALENCE_COMPLETE, results });
    yield put({ type: SEARCH_REQUEST_START, payload });
  } catch (error) {
    yield put({ type: REJECT_EQUIVALENCE_ERROR, error });
  }
}

export function* consultEquivalence({ payload }) {
  try {
    const results = yield call(apiCall, `/consult/requests/${payload.requestId}`, { payload }, null, 'POST');
    yield put({ type: CONSULT_EQUIVALENCE_COMPLETE, results });
    yield put({ type: SEARCH_REQUEST_START, payload });
  } catch (error) {
    yield put({ type: CONSULT_EQUIVALENCE_ERROR, error });
  }
}

export default function* updateEquivalence() {
  yield takeLatest(APPROVE_EQUIVALENCE_START, approveEquivalence);
  yield takeLatest(REJECT_EQUIVALENCE_START, rejectEquivalence);
  yield takeLatest(CONSULT_EQUIVALENCE_START, consultEquivalence);
}
