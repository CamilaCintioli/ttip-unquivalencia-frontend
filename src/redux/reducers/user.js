import { get } from 'lodash';
import {
  GET_USER_START, GET_USER_ERROR, GET_USER_COMPLETE,
} from '../../consts/actionTypes';
import { loadUser, saveUser } from '../../service/userService';


export default function (state = { userResult: loadUser() }, action) {
  switch (action.type) {
    case GET_USER_START: {
      saveUser(get(action, 'payload'));
      return { ...state, isLoading: true, user: null };
    }
    case GET_USER_COMPLETE: {
      saveUser(get(action, 'payload'));
      return { ...state, isLoading: false, userResult: get(action, 'payload') };
    }
    case GET_USER_ERROR:
      return { ...state, isLoading: false, user: null };
    default:
      return { ...state };
  }
}
