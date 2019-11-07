import { all } from 'redux-saga/effects';
import updateEquivalence from './updateEquivalence';
import search from './search';
import user from './user';
import create from './createRequest';
import match from './match';
import stepper from './stepper';

export default function* rootSaga() {
  yield all([user(), search(), updateEquivalence(), create(), stepper(), match()]);
}
