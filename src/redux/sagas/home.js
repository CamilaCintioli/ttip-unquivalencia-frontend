import { put, call, takeLatest } from 'redux-saga/effects';
import {
    GET_HOME_START,
    GET_HOME_COMPLETE,
    GET_HOME_ERROR,
} from '../../consts/actionTypes';

import apiCall from '../api';

export function* getHome({ payload }) {
    try {
        const results = yield call(apiCall, '/home', null, null, 'GET');
        yield put({ type: GET_HOME_COMPLETE, results });
    } catch (error) {
        yield put({ type: GET_HOME_ERROR, error });
    }
}

export default function* stepper() {
    yield takeLatest(GET_HOME_START, getHome);
}