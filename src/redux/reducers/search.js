import { get } from 'lodash';
import {
  SEARCH_FILE_START, SEARCH_FILE_ERROR, SEARCH_FILE_COMPLETE, SEARCH_REQUEST_START,
  SEARCH_REQUEST_COMPLETE, SEARCH_REQUEST_ERROR, SEARCH_REQUEST_BY_ID_START,
  SEARCH_REQUEST_BY_ID_COMPLETE, SEARCH_REQUEST_BY_ID_ERROR,
  SEARCH_FILE_BY_FILE_NUMBER_START, SEARCH_FILE_BY_FILE_NUMBER_COMPLETE,
  SEARCH_FILE_BY_FILE_NUMBER_ERROR,
} from '../../consts/actionTypes';

const initialState = { request: {} };

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_FILE_START:
      return { ...state, isLoading: true, file: null };
    case SEARCH_FILE_COMPLETE:
      return { ...state, isLoading: false, fileResult: get(action, 'results.data') };
    case SEARCH_FILE_ERROR:
      return { ...state, isLoading: false, file: null };
    case SEARCH_REQUEST_START:
      return { ...state, isLoadingRequest: true, request: null };
    case SEARCH_REQUEST_COMPLETE:
      return { ...state, isLoadingRequest: false, requestResult: get(action, 'results.data') };
    case SEARCH_REQUEST_ERROR:
      return { ...state, isLoadingRequest: false, request: null };
    case SEARCH_REQUEST_BY_ID_START:
      return { ...state, isLoading: true };
    case SEARCH_REQUEST_BY_ID_COMPLETE:
      return { ...state, isLoading: false, request: get(action, 'equivalenceRequest.data') };
    case SEARCH_REQUEST_BY_ID_ERROR:
      return { ...state, isLoading: false };
    case SEARCH_FILE_BY_FILE_NUMBER_START:
      return { ...state, isLoading: true };
    case SEARCH_FILE_BY_FILE_NUMBER_COMPLETE:
      return { ...state, isLoading: false, file: get(action, 'file.data') };
    case SEARCH_FILE_BY_FILE_NUMBER_ERROR:
      return { ...state, isLoading: false };
    default:
      return { ...state };
  }
}
