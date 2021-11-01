const express = require('express');
const contactsRouter = express.Router();
const contactsMocked = require("../mockContacts");
// const {db} = require("../db");

contactsRouter
  .route('/contacts')
  .post((req, res) => {
    // console.log("db", db);
    return res.send(contactsMocked)
  });


// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = contactsRouter;

// app.post(API_BASE_URL + '/contacts', (req, res) => {
//   console.log("db", db);
//   return res.send(contactsRoutes)
// })
