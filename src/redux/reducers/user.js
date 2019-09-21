import { get } from 'lodash';
import {
  GET_USER_START, GET_USER_ERROR, GET_USER_COMPLETE,
} from '../../consts/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_START:
      return { ...state, isLoading: true, file: null };
    case GET_USER_COMPLETE:
      return { ...state, isLoading: false, fileResult: get(action, 'results.data') };
    case GET_USER_ERROR:
      return { ...state, isLoading: false, file: null };
    default:
      return { ...state };
  }
}
