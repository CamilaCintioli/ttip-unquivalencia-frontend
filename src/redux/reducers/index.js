import { combineReducers } from 'redux';
import search from './search';
import updateEquivalence from './updateEquivalence';
import user from './user';
import create from './create';
import match from './match';
import stepper from './stepper';
import home from './home';
import subject from './subject';
import file from './file';

const rootReducer = combineReducers({
    user,
    search,
    updateEquivalence,
    create,
    match,
    stepper,
    subject,
    home,
    file,
});

export default rootReducer;