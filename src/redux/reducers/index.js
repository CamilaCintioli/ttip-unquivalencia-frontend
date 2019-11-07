import { combineReducers } from 'redux';
import search from './search';
import updateEquivalence from './updateEquivalence';
import user from './user';
import create from './create';
import match from './match';
import stepper from './stepper';

const rootReducer = combineReducers({
  user,
  search,
  updateEquivalence,
  create,
  match,
  stepper,
});

export default rootReducer;
