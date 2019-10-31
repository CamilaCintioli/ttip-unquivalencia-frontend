import { get } from 'lodash';
import {
  GET_USER_START, GET_USER_ERROR, GET_USER_COMPLETE,
  GET_USERS_COMPLETE, GET_USERS_ERROR, GET_USERS_START,
  CREATE_USER_START, CREATE_USER_COMPLETE, CREATE_USER_ERROR,
} from '../../consts/actionTypes';
import { loadUser, saveUser } from '../../service/userService';


export default function (state = { userResult: loadUser(), users: [], userError: [] }, action) {
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
    default:
      return { ...state };
  }
}
