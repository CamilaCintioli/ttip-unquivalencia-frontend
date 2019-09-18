/* eslint-disable no-unreachable */
import { get } from 'lodash';
import {
  SEARCH_FILE_START, SEARCH_FILE_ERROR, SEARCH_FILE_COMPLETE, SEARCH_REQUEST_START,
  SEARCH_REQUEST_COMPLETE, SEARCH_REQUEST_ERROR, SEARCH_REQUEST_BY_ID_START,
  SEARCH_REQUEST_BY_ID_COMPLETE, SEARCH_REQUEST_BY_ID_ERROR,
} from '../../consts/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_FILE_START:
      return { ...state, isLoading: true, file: null };
      break;
    case SEARCH_FILE_COMPLETE:
      return { ...state, isLoading: false, fileResult: get(action, 'results.data') };
      break;
    case SEARCH_FILE_ERROR:
      return { ...state, isLoading: false, file: null };
      break;
    case SEARCH_REQUEST_START:
      return { ...state, isLoadingRequest: true, request: null };
      break;
    case SEARCH_REQUEST_COMPLETE:
      return { ...state, isLoadingRequest: false, requestResult: get(action, 'results.data') };
      break;
    case SEARCH_REQUEST_ERROR:
      return { ...state, isLoadingRequest: false, request: null };
      break;
    case SEARCH_REQUEST_BY_ID_START:
      return { ...state, isLoading: true, requestResult: null };
      break;
    case SEARCH_REQUEST_BY_ID_COMPLETE:
      return { ...state, isLoading: false, movieResult: get(action, 'results.data') };
      break;
    case SEARCH_REQUEST_BY_ID_ERROR:
      return { ...state, isLoading: false, movieResult: null };
      break;
    default:
      return { ...state };
  }
}
