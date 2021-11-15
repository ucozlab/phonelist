import {apiPost} from "./axiosInstance";
import {CONTACT_ROUTES} from "../../config";

export const postContacts = (page = 0, pageSize = 500, sortBy = {}, filterBy = {}, params = {}) => {
  return apiPost(CONTACT_ROUTES.getContacts, {
    page,
    pageSize,
    sortBy,
    filterBy,
    params
  })
};

export const postAddContact = async (contactData) => {
  return apiPost(CONTACT_ROUTES.addContact, contactData)
};

export const postUpdateContact = async (contactData) => {
  return apiPost(CONTACT_ROUTES.updateContact, contactData)
};

export const postDeleteContact = async (contactData) => {
  return apiPost(CONTACT_ROUTES.deleteContact, contactData)
};
