import * as types from "./actionTypes";

export const setShowLoader = (showLoader) => ({
  type: types.SET_SHOW_LOADER,
  payload: {showLoader}
});

export const setContactModalOpened = (contactModalOpened) => ({
  type: types.SET_CONTACT_MODAL_OPENED,
  payload: {contactModalOpened}
});
