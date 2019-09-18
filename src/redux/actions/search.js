import { SEARCH_FILE_START, SEARCH_REQUEST_START, SEARCH_REQUEST_BY_ID_START } from '../../consts/actionTypes';

export const searchFile = (payload) => ({
  type: SEARCH_FILE_START,
  payload,
});

export const searchRequest = (payload) => ({
  type: SEARCH_REQUEST_START,
  payload,
});

export const searchRequestById = (payload) => ({
  type: SEARCH_REQUEST_BY_ID_START,
  payload,
});
