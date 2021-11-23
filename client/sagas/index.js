import { put, takeLatest, all } from 'redux-saga/effects';
import {postAddContact, postContacts, postEditContact, postRemoveContact} from "../api/contacts-api";
import * as types from "../actions/actionTypes";
import {setContactsList} from "../actions/contactModalFunctions";
import {setContactModalOpened, setShowLoader} from "../actions/generalFunctions";

function* fetchContacts() {
  yield put(setShowLoader(true));
  const contactsResponse = yield postContacts();
  yield put(setContactsList(contactsResponse));
  yield put(setShowLoader(false));
}

function* fetchCreateContact(action) {
  yield put(setShowLoader(true));
  const createContactResponse = yield postAddContact(action.payload.contact);
  if (createContactResponse.acknowledged && createContactResponse.insertedId) {
    yield fetchContacts(); // update contacts list
  } else {
    yield put(setShowLoader(false));
  }
  yield put(setContactModalOpened(false));
}

function* fetchUpdateContact(action) {
  yield put(setShowLoader(true));
  const updateResponse = yield postEditContact(action.payload.contact);
  if (updateResponse.success) {
    yield fetchContacts(); // update contacts list
  } else {
    yield put(setShowLoader(false));
  }
  yield put(setContactModalOpened(false));
}

function* fetchDeleteContact(action) {
  yield put(setShowLoader(true));
  const updateResponse = yield postRemoveContact(action.payload.contact);
  if (updateResponse.success) {
    yield fetchContacts(); // update contacts list
  } else {
    yield put(setShowLoader(false));
  }
}

function* getWatcher() {
  yield takeLatest(types.GET_CONTACTS_LIST, fetchContacts)
}

function* createContactWatcher() {
  yield takeLatest(types.POST_CREATE_CONTACT, fetchCreateContact)
}

function* updateContactWatcher() {
  yield takeLatest(types.POST_UPDATE_CONTACT, fetchUpdateContact)
}

function* deleteContactWatcher() {
  yield takeLatest(types.POST_DELETE_CONTACT, fetchDeleteContact)
}

export default function* rootSaga() {
  yield all([
    getWatcher(),
    createContactWatcher(),
    updateContactWatcher(),
    deleteContactWatcher(),
  ]);
}
