import { combineReducers } from 'redux';
import search from './search';
import updateEquivalence from './updateEquivalence';

const rootReducer = combineReducers({
  search, updateEquivalence,
});

export default rootReducer;
