import { all } from 'redux-saga/effects';
import updateEquivalence from './updateEquivalence';
import search from './search';
import user from './user';
import create from './create';
import match from './match';
import stepper from './stepper';
import subject from './subject';

export default function* rootSaga() {
  yield all([user(), search(), updateEquivalence(), create(), stepper(), match(), subject()]);
}
