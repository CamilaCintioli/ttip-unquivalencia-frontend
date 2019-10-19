import { combineReducers } from 'redux';
import search from './search';
import updateEquivalence from './updateEquivalence';
import user from './user';
import match from './match';

const rootReducer = combineReducers({
  user,
  search,
  updateEquivalence,
  match,
});

export default rootReducer;
