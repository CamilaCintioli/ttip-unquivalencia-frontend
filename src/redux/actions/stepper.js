import {
  GET_STEPPER_START,
} from '../../consts/actionTypes';

const getStepper = (payload) => ({
  type: GET_STEPPER_START,
  payload,
});

export default getStepper;
