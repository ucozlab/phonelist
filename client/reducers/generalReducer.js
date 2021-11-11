import * as types from "../actions/actionTypes";

const contactsState = {
  showLoader: false,
  contactModalOpened: false,
};

export default function (state = contactsState, action) {
  switch (action.type) {
    case types.SET_SHOW_LOADER:
    case types.SET_CONTACT_MODAL_OPENED:
      return Object.assign({}, state, {
        ...action.payload
      });
    default:
      return state
  }
};
