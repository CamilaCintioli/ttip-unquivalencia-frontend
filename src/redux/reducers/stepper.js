import { get } from 'lodash';
import {
  GET_STEPPER_START,
  GET_STEPPER_COMPLETE,
  GET_STEPPER_ERROR,
} from '../../consts/actionTypes';

const initialState = { request: {} };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STEPPER_START:
      return { ...state, isLoading: true, stepper: null };
    case GET_STEPPER_COMPLETE:
      return { ...state, isLoading: false, stepperResult: get(action, 'results.data') };
    case GET_STEPPER_ERROR:
      return { ...state, isLoading: false, stepper: null };
    default:
      return { ...state };
  }
}
