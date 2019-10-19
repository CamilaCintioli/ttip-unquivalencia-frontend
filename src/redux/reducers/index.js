import { combineReducers } from 'redux';
import search from './search';
import updateEquivalence from './updateEquivalence';
import user from './user';
import createRequest from './createRequest';
import match from './match';

const rootReducer = combineReducers({
  user,
  search,
  updateEquivalence,
  createRequest,
  match,
});

export default rootReducer;
