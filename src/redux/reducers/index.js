import { combineReducers } from 'redux';
import search from './search';
import updateEquivalence from './updateEquivalence';
import user from './user';

const rootReducer = combineReducers({
  user,
  search,
  updateEquivalence,
});

export default rootReducer;
