import { get } from 'lodash';
import {
  GET_MATCH_START,
  GET_MATCH_COMPLETE,
  GET_MATCH_ERROR,
} from '../../consts/actionTypes';

const initialState = { request: {} };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MATCH_START:
      return { ...state, isLoading: true, match: null };
    case GET_MATCH_COMPLETE:
      return { ...state, isLoading: false, matchResult: get(action, 'results.data') };
    case GET_MATCH_ERROR:
      return {
        ...state, isLoading: false, match: null, error: get(action, 'error.response'),
      };
    default:
      return { ...state };
  }
}
