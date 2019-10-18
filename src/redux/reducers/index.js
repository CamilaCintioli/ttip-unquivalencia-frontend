import { combineReducers } from 'redux';
import search from './search';
import updateEquivalence from './updateEquivalence';
import user from './user';
import createRequest from './createRequest';

const rootReducer = combineReducers({
  user,
  search,
  updateEquivalence,
  createRequest,
});

export default rootReducer;
