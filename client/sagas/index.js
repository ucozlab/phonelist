import {all} from 'redux-saga/effects';
import contactSagas from './contacts-sagas';

export default function* rootSaga() {
  yield all([
    ...contactSagas,
  ]);
}
