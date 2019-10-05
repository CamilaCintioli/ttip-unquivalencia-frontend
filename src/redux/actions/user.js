import {
  GET_USER_START, GET_USERS_START,
  CREATE_USER_START,
} from '../../consts/actionTypes';

export const getUser = (payload) => ({
  type: GET_USER_START,
  payload,
});

export const setUsers = (payload) => ({
  type: GET_USERS_START,
  payload,
});

export const registerUser = (payload) => ({
  type: CREATE_USER_START,
  payload,
});
