import { all } from 'redux-saga/effects';

import search from './search';
import user from './user';

export default function* rootSaga() {
  yield all([search(), user()]);
}
