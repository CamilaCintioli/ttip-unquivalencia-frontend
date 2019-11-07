import { put, call, takeLatest } from 'redux-saga/effects';
import {
  APPROVE_EQUIVALENCE_START, APPROVE_EQUIVALENCE_COMPLETE, APPROVE_EQUIVALENCE_ERROR,
  REJECT_EQUIVALENCE_START, REJECT_EQUIVALENCE_COMPLETE, REJECT_EQUIVALENCE_ERROR,
  SEARCH_REQUEST_START, CONSULT_EQUIVALENCE_START, CONSULT_EQUIVALENCE_ERROR,
  CONSULT_EQUIVALENCE_COMPLETE, DELEGATE_EQUIVALENCE_START, DELEGATE_EQUIVALENCE_COMPLETE,
  DELEGATE_EQUIVALENCE_ERROR,
} from '../../consts/actionTypes';

import apiCall from '../api';
import { openSnackbar } from '../../component/FeedbackBar';

export function* approveEquivalence({ payload }) {
  try {
    const results = yield call(apiCall, `/request/${payload.requestId}`, { equivalence: 'APROBADA' }, null, 'POST');
    openSnackbar('La solicitud ha sido aprobada', 'success');
    yield put({ type: APPROVE_EQUIVALENCE_COMPLETE, results });
    yield put({ type: SEARCH_REQUEST_START, payload });
  } catch (error) {
    openSnackbar('Hubo un problema. Intentelo más tarde.', 'error');
    yield put({ type: APPROVE_EQUIVALENCE_ERROR, error });
  }
}

export function* rejectEquivalence({ payload }) {
  try {
    const results = yield call(apiCall, `/request/${payload.requestId}`, { equivalence: 'NEGADA', motive: payload.motive }, null, 'POST');
    openSnackbar('La solicitud ha sido rechazada', 'success');
    yield put({ type: REJECT_EQUIVALENCE_COMPLETE, results });
    yield put({ type: SEARCH_REQUEST_START, payload });
  } catch (error) {
    openSnackbar('Hubo un problema. Intentelo más tarde.', 'error');
    yield put({ type: REJECT_EQUIVALENCE_ERROR, error });
  }
}

export function* consultEquivalence({ payload }) {
  try {
    const { requestId, ...rest } = payload;
    const results = yield call(apiCall, `/consult/requests/${requestId}`, rest, null, 'POST');
    openSnackbar(`La consulta ha sido enviada a ${rest.email}`, 'success');
    yield put({ type: CONSULT_EQUIVALENCE_COMPLETE, results });
    yield put({ type: SEARCH_REQUEST_START, payload });
  } catch (error) {
    openSnackbar('Hubo un problema. Intentelo más tarde', 'error');
    yield put({ type: CONSULT_EQUIVALENCE_ERROR, error });
  }
}

export function* delegateEquivalence({ payload }) {
  try {
    const { requestId, department } = payload;
    const results = yield call(apiCall, `/request/${requestId}`, { equivalence: 'GIRADA' }, null, 'POST');
    openSnackbar(`La consulta ha sido delegada a ${department}`, 'success');
    yield put({ type: DELEGATE_EQUIVALENCE_COMPLETE, results });
    yield put({ type: SEARCH_REQUEST_START, payload });
  } catch (error) {
    openSnackbar('Hubo un problema. Intentelo más tarde', 'error');
    yield put({ type: DELEGATE_EQUIVALENCE_ERROR, error });
  }
}

export default function* updateEquivalence() {
  yield takeLatest(APPROVE_EQUIVALENCE_START, approveEquivalence);
  yield takeLatest(REJECT_EQUIVALENCE_START, rejectEquivalence);
  yield takeLatest(CONSULT_EQUIVALENCE_START, consultEquivalence);
  yield takeLatest(DELEGATE_EQUIVALENCE_START, delegateEquivalence);
}
