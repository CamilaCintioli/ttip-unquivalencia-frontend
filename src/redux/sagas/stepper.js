import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_STEPPER_START,
  GET_STEPPER_COMPLETE,
  GET_STEPPER_ERROR,
} from '../../consts/actionTypes';

import apiCall from '../api';

export function* getStepper({ payload }) {
  try {
    const results = yield call(apiCall, `/stepper/requests/${payload.requestId}`, null, null, 'GET');
    yield put({ type: GET_STEPPER_COMPLETE, results });
  } catch (error) {
    yield put({ type: GET_STEPPER_ERROR, error });
  }
}

export default function* stepper() {
  yield takeLatest(GET_STEPPER_START, getStepper);
}
