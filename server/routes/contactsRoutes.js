const express = require('express');
const contactsRouter = express.Router();
const {CONTACT_ROUTES} = require("../../config");
const {getContacts, addContact, updateContact, deleteContact} = require("./contactsApi");

contactsRouter
  .route(CONTACT_ROUTES.getContacts)
  .post(getContacts);

contactsRouter
  .route(CONTACT_ROUTES.addContact)
  .post(addContact);

contactsRouter
  .route(CONTACT_ROUTES.updateContact)
  .post(updateContact);

contactsRouter
  .route(CONTACT_ROUTES.deleteContact)
  .post(deleteContact);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = contactsRouter;
