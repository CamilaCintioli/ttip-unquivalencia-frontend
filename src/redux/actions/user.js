import {
  GET_USER_START, GET_USERS_START,
  CREATE_USER_START, UPDATE_USER_START,
  DELETE_USER_START,
  CHANGE_PASSWORD_START,
} from '../../consts/actionTypes';

export const getUser = (payload) => ({
  type: GET_USER_START,
  payload,
});

export const getUsers = (payload) => ({
  type: GET_USERS_START,
  payload,
});

export const registerUser = (payload) => ({
  type: CREATE_USER_START,
  payload,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER_START,
  payload,
});

export const deleteUser = (payload) => ({
  type: DELETE_USER_START,
  payload,
});

export const changePassword = (payload) => ({
  type: CHANGE_PASSWORD_START,
  payload,
});
