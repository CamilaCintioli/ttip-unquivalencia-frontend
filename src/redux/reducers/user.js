import { get } from 'lodash';
import {
  GET_USER_START, GET_USER_ERROR, GET_USER_COMPLETE,
  GET_USERS_COMPLETE, GET_USERS_ERROR, GET_USERS_START,
  CREATE_USER_START, CREATE_USER_COMPLETE, CREATE_USER_ERROR,
  UPDATE_USER_START, UPDATE_USER_COMPLETE, UPDATE_USER_ERROR,
  DELETE_USER_START, DELETE_USER_COMPLETE, DELETE_USER_ERROR, CHANGE_PASSWORD_START, CHANGE_PASSWORD_COMPLETE, CHANGE_PASSWORD_ERROR,
} from '../../consts/actionTypes';
import { loadUser, saveUser } from '../../service/userService';


export default function (state = {
  userResult: loadUser(), users: [], userError: [], passwordError: [],
}, action) {
  switch (action.type) {
    case GET_USER_START:
      return { ...state, isLoading: true, user: null };
    case GET_USER_COMPLETE:
      saveUser(get(action, 'results.data'));
      return { ...state, isLoading: false, userResult: get(action, 'results.data') };
    case GET_USER_ERROR:
      return {
        ...state, isLoading: false, user: null, userError: get(action, 'errors'),
      };
    case GET_USERS_START:
      return { ...state, isLoading: true };
    case GET_USERS_COMPLETE:
      return { ...state, isLoading: false, users: get(action, 'results.data.users') };
    case GET_USERS_ERROR:
      return { ...state, isLoading: false };
    case CREATE_USER_START:
      return { ...state, isLoading: true };
    case CREATE_USER_COMPLETE:
      return { ...state, isLoading: false };
    case CREATE_USER_ERROR:
      return { ...state, isLoading: false };
    case UPDATE_USER_START:
      return { ...state, isLoading: true };
    case UPDATE_USER_COMPLETE:
      return { ...state, isLoading: false };
    case UPDATE_USER_ERROR:
      return { ...state, isLoading: false };
    case DELETE_USER_START:
      return { ...state, isLoading: true };
    case DELETE_USER_COMPLETE:
      return { ...state, isLoading: false };
    case DELETE_USER_ERROR:
      return { ...state, isLoading: false };
    case CHANGE_PASSWORD_START:
      return { ...state, isLoading: true };
    case CHANGE_PASSWORD_COMPLETE:
      return { ...state, isLoading: false };
    case CHANGE_PASSWORD_ERROR:
      return { ...state, isLoading: false, passwordError: get(action, 'errors') };
    default:
      return { ...state };
  }
}
