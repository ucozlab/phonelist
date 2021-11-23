import * as types from "./actionTypes";

export const getContactsList = () => ({
  type: types.GET_CONTACTS_LIST,
});

export const setContactsList = (contactsList) => ({
  type: types.SET_CONTACTS_LIST,
  payload: {contactsList}
});

export const postCreateContact = (contact) => ({
  type: types.POST_CREATE_CONTACT,
  payload: {contact}
});

export const postUpdateContact = (contact) => ({
  type: types.POST_UPDATE_CONTACT,
  payload: {contact}
});

export const postDeleteContact = (contact) => ({
  type: types.POST_DELETE_CONTACT,
  payload: {contact}
});
