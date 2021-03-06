import { all } from 'redux-saga/effects';
import updateEquivalence from './updateEquivalence';
import search from './search';
import user from './user';
import create from './create';
import match from './match';
import stepper from './stepper';
import home from './home';
import subject from './subject';
import file from './file';

export default function* rootSaga() {
    yield all([
        user(),
        search(),
        updateEquivalence(),
        create(),
        stepper(),
        match(),
        subject(),
        home(),
        file(),
    ]);
}