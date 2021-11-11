import * as types from "../actions/actionTypes";

const contactsState = {
  contactsList: [],
  activeContact: {},
  addContactInputValue: "",
  searchInputText: "",
  addContactsList: []
};

export default function (state = contactsState, action) {
  switch (action.type) {
    case types.SET_CONTACTS_LIST:
      return Object.assign({}, state, {
        contactsList: [...action.payload.contactsList]
      });
    case types.SET_ADD_CONTACTS_LIST:
      return Object.assign({}, state, {
        addContactsList: [...action.payload.addContactsList]
      });
    case types.GET_CONTACTS_LIST:
    case types.SET_ADD_CONTACT_INPUT_VALUE:
    case types.SET_CONTACTS_SEARCH_INPUT_TEXT:
      return Object.assign({}, state, {
        ...action.payload
      });
    default:
      return state
  }
};
