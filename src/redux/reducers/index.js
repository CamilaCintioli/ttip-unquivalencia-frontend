import { combineReducers } from 'redux';
import search from './search';
import updateEquivalence from './updateEquivalence';
import user from './user';
import createRequest from './createRequest';
import match from './match';
import stepper from './stepper';

const rootReducer = combineReducers({
  user,
  search,
  updateEquivalence,
  createRequest,
  match,
  stepper,
});

export default rootReducer;
