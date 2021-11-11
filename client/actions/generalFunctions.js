import * as types from "./actionTypes";

export const setShowLoader = (showLoader) => ({
  type: types.SET_SHOW_LOADER,
  payload: {showLoader}
});

export const setContactModalOpened = (contactModalOpened) => ({
  type: types.SET_CONTACT_MODAL_OPENED,
  payload: {contactModalOpened}
});

export const setContactModalValue = (inputName, inputValue) => ({
  type: types.SET_CONTACT_MODAL_VALUE,
  payload: {inputName, inputValue}
});
export const setActiveContact = (activeContact) => ({
  type: types.SET_ACTIVE_CONTACT,
  payload: {activeContact}
});
