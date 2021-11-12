import * as types from "../actions/actionTypes";

const contactsState = {
  showLoader: false,
  contactModalOpened: false,
  contactModalValues: {
    "first_name": "",
    "last_name": "",
    "phone": "",
    "image": "",
    "countryCode": "",
    "email": ""
  }
};

export default function (state = contactsState, action) {
  switch (action.type) {
    case types.SET_SHOW_LOADER:
    case types.SET_CONTACT_MODAL_OPENED:
      return Object.assign({}, state, {
        ...action.payload
      });
    case types.SET_CONTACT_MODAL_VALUE:
      return Object.assign({}, state, {
        contactModalValues: {
          ...state.contactModalValues,
          [action.payload.inputName]: action.payload.inputValue
        }
      });
    case types.SET_ACTIVE_CONTACT:
      return Object.assign({}, state, {
        contactModalValues: { ...state.contactModalValues, ...action.payload.activeContact}
      });
    default:
      return state
  }
};
