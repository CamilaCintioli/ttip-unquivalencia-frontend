import { all } from 'redux-saga/effects';

import search from './search';
import updateEquivalence from './updateEquivalence';

export default function* rootSaga() {
  yield all([search(), updateEquivalence()]);
}
