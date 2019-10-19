import {
  CREATE_REQUEST_START,
} from '../../consts/actionTypes';

export const createRequest = (payload) => ({
  type: CREATE_REQUEST_START,
  payload,
});
