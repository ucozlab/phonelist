import { put, takeLatest, all } from 'redux-saga/effects';
import {postContacts} from "../api/contacts-api";
import {setContactsList} from "../actions/contactFunctions";
import * as types from "../actions/actionTypes";

function* fetchContacts() {
  const contactsResponse = yield postContacts();
  yield put(setContactsList(contactsResponse));
}

function* postContact(contact) {
  console.log("contact saga", contact);
  const contactsResponse = yield postContacts();
  yield put(setContactsList(contactsResponse));
}

function* getWatcher() {
  yield takeLatest(types.GET_CONTACTS_LIST, fetchContacts)
}

function* postWatcher() {
  yield takeLatest(types.POST_UPDATE_CONTACT, postContact)
}

export default function* rootSaga() {
  yield all([
    getWatcher(),
    postWatcher(),
  ]);
}
