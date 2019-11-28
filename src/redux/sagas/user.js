import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_USER_START, GET_USER_ERROR, GET_USER_COMPLETE,
  GET_USERS_COMPLETE, GET_USERS_ERROR,
  CREATE_USER_COMPLETE, CREATE_USER_ERROR,
  GET_USERS_START, CREATE_USER_START,
  UPDATE_USER_START, DELETE_USER_START,
  UPDATE_USER_COMPLETE, DELETE_USER_COMPLETE,
  UPDATE_USER_ERROR, DELETE_USER_ERROR, CHANGE_PASSWORD_START, CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_COMPLETE,
} from '../../consts/actionTypes';
import { openSnackbar } from '../../component/Dashboard/FeedbackBar';

import apiCall from '../api';

const createUserErrorMessage = (error) => {
  switch (error.response.data[0]) {
    case "should have required property 'name'":
      return 'Por favor complete el nombre del nuevo usuario';
    case "should have required property 'lastName'":
      return 'Por favor complete el apellido del nuevo usuario';
    case "should have required property 'email'":
      return 'Por favor complete el email del nuevo usuario';
    case "should have required property 'role'":
      return 'Por favor seleccione el rol del nuevo usuario';
    case 'Ya existe el email':
      return 'Ya existe un usuario con ese email';
    default:
      return 'Hubo un problema. Intente crear un usuario más tarde';
  }
};

export function* getUser({ payload }) {
  try {
    const results = yield call(apiCall, '/user/session', payload.bodyUser, null, 'POST');
    yield put({ type: GET_USER_COMPLETE, results });
    const location = localStorage.location.split('/')[1].toString() === 'solicitud' ? localStorage.location : '/home';
    yield payload.history.push(location);
  } catch (error) {
    const errors = error.response.data;
    handleFormErrors(payload.bodyUser.showError, errors);
    yield put({ type: GET_USER_ERROR, errors });
  }
}

export function* getUsers() {
  try {
    const results = yield call(apiCall, '/users', null, null, 'GET');
    yield put({ type: GET_USERS_COMPLETE, results });
  } catch (error) {
    yield put({ type: GET_USERS_ERROR, error });
  }
}

export function* createUser({ payload }) {
  try {
    const results = yield call(apiCall, '/new/user', payload, null, 'POST');
    yield put({ type: CREATE_USER_COMPLETE, results });
    openSnackbar('El usuario ha sido creado exitosamente', 'success');
    yield put({ type: GET_USERS_START, results });
  } catch (error) {
    yield put({ type: CREATE_USER_ERROR, error });
    openSnackbar(createUserErrorMessage(error), 'error');
  }
}

export function* updateUser({ payload }) {
  try {
    const results = yield call(apiCall, '/update/user', payload, null, 'POST');
    yield put({ type: UPDATE_USER_COMPLETE, results });
    openSnackbar('El usuario ha sido actualizado', 'success');
    yield put({ type: GET_USERS_START, results });
  } catch (error) {
    yield put({ type: UPDATE_USER_ERROR, error });
    openSnackbar('Se ha podido al actualizar al usuario', 'error');
  }
}

export function* deleteUser({ payload }) {
  try {
    const results = yield call(apiCall, `/delete/user/${payload.id}`, null, null, 'DELETE');
    yield put({ type: DELETE_USER_COMPLETE, results });
    openSnackbar('El usuario ha sido eliminado', 'success');
    yield put({ type: GET_USERS_START, results });
  } catch (error) {
    yield put({ type: DELETE_USER_ERROR, error });
    openSnackbar('Se ha podido al eliminar al usuario', 'error');
  }
}

export function* changePassword({ payload }) {
  try {
    const results = yield call(apiCall, '/password/new', payload, null, 'POST');
    yield put({ type: CHANGE_PASSWORD_COMPLETE, results });
    openSnackbar('La contraseña ha sido cambiada exitosamente', 'success');
  } catch (error) {
    const errors = error.response.data;
    yield put({ type: CHANGE_PASSWORD_ERROR, errors });
    handleFormErrors(payload.showError, errors);
  }
}


export default function* user() {
  yield takeLatest(GET_USER_START, getUser);
  yield takeLatest(GET_USERS_START, getUsers);
  yield takeLatest(CREATE_USER_START, createUser);
  yield takeLatest(UPDATE_USER_START, updateUser);
  yield takeLatest(DELETE_USER_START, deleteUser);
  yield takeLatest(CHANGE_PASSWORD_START, changePassword);
}

const handleFormErrors = (showError, errors) => {
  switch (errors[0]) {
    case 'Email inexistente': showError('email', 'El mail ingresado es incorrecto'); break;
    case 'Password incorrecto': showError('password', 'La contraseña ingresada es incorrecta'); break;
    default:
      openSnackbar('Hubo un problema. Intentelo más tarde');
  }
};
