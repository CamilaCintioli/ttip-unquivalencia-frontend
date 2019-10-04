import { GET_USER_START, GET_USERS_START } from '../../consts/actionTypes';

export const getUser = (payload) => ({
  type: GET_USER_START,
  payload,
});

export const getUsers = (payload) => ({
  type: GET_USERS_START,
  payload,
});
