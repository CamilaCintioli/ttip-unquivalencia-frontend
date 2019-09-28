import { all } from 'redux-saga/effects';
import updateEquivalence from './updateEquivalence';
import search from './search';
import user from './user';

export default function* rootSaga() {
  yield all([user(), search(), updateEquivalence()]);
}
