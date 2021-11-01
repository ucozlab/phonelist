import AxiosInstance from "./axiosInstance";

export const postContacts = (page = 0, pageSize = 500, sortBy = {}, filterBy = {}, params = {}) => {
  return AxiosInstance.post("/contacts", {
    page,
    pageSize,
    sortBy,
    filterBy,
    params
  })
    .then((response) => {
      console.log("postContacts success:", response);
      return response.data
    })
    .catch((response) => {
      console.log("postContacts error:", response);
      return response.data
    });
};

export const postContactSearch = (page = 0, pageSize = 500, sortBy = {}, filterBy = {}, params = {}) => {
  return AxiosInstance.post("/user/search", {
    page,
    pageSize,
    sortBy,
    filterBy,
    params
  })
    .then((response) => {
      console.log("postContactSearch success:", response);
      return response.data
    })
    .catch((response) => {
      console.log("postContactSearch error:", response);
      return response.data
    });
};
export const postAddContact = (contactId) => {
  return AxiosInstance.post("/user/add-contact", {contactId})
    .then((response) => {
      console.log("postAddContact success:", response);
      return response.data
    })
    .catch((response) => {
      console.log("postAddContact error:", response);
      return response.data
    });
};

export const postDeleteContact = (contactId) => {
  return AxiosInstance.post("/user/remove-contact", {contactId})
    .then((response) => {
      console.log("postDeleteContact success:", response);
      return response.data
    })
    .catch((response) => {
      console.log("postDeleteContact error:", response);
      return response.data
    });
};
