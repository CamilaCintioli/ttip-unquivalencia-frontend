import {
  CREATE_REQUEST_START, CREATE_REQUEST_ERROR, CREATE_REQUEST_COMPLETE,
} from '../../consts/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_REQUEST_START:
      return { ...state, isLoading: true };
    case CREATE_REQUEST_COMPLETE:
      return { ...state, isLoading: false };
    case CREATE_REQUEST_ERROR:
      return { ...state, isLoading: false };
    default:
      return { ...state };
  }
}
