import * as types from "./actionTypes";

export const getContactsList = () => ({
  type: types.GET_CONTACTS_LIST,
});

export const setContactsList = (contactsList) => ({
  type: types.SET_CONTACTS_LIST,
  payload: {contactsList}
});


export const postUpdateContact = (contact) => ({
  type: types.POST_UPDATE_CONTACT,
  payload: {contact}
});
