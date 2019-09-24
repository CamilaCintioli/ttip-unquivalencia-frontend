import { combineReducers } from 'redux';
import search from './search';
import user from './user';

const rootReducer = combineReducers({
  user,
  search,

});

export default rootReducer;
