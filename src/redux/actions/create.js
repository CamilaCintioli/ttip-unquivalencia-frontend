import {
  CREATE_REQUEST_START, CREATE_SUBJECT_START,
} from '../../consts/actionTypes';

export const createRequest = (payload) => ({
  type: CREATE_REQUEST_START,
  payload,
});

export const createSubject = (payload) => ({
  type: CREATE_SUBJECT_START,
  payload,
});
