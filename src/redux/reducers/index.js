import { combineReducers } from 'redux';
import search from './search';
import updateEquivalence from './updateEquivalence';
import user from './user';
import create from './create';
import match from './match';

const rootReducer = combineReducers({
  user,
  search,
  updateEquivalence,
  create,
  match,
});

export default rootReducer;
