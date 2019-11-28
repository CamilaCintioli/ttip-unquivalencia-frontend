import { put, call, takeLatest } from 'redux-saga/effects';
import {
    GET_FILE_START,
    GET_FILE_COMPLETE,
    GET_FILE_ERROR,
} from '../../consts/actionTypes';

import apiCall from '../api';
import { openSnackbar } from '../../component/Dashboard/FeedbackBar';

export function* getFile({ payload }) {
    try {
        const results = yield call(apiCall, '/files', null, null, 'GET', payload.query);
        // openSnackbar('Busqueda realizada exitosamente', 'success');
        yield put({ type: GET_FILE_COMPLETE, results });
    } catch (error) {
        // openSnackbar('Hubo un problema. Intente buscar mas tarde', 'error');
        yield put({ type: GET_FILE_ERROR, error });
    }
}

export default function* create() {
    yield takeLatest(GET_FILE_START, getFile);
}