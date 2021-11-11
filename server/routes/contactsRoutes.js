const express = require('express');
const contactsRouter = express.Router();
// const contactsMocked = require("../mockContacts");
const mongoClient = require("../db");

contactsRouter
  .route('/contacts')
  .post((req, res) => {
    const dbConnect = mongoClient.getDb();
    dbConnect
      .collection("contacts")
      .find({}).limit(50)
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
        } else {
          res.json(result);
        }
      });
    // return res.send(contactsCollection)
  });

contactsRouter
  .route('/update-contact')
  .post((req, res) => {
    const dbConnect = mongoClient.getDb();

    const contactInfo = req.body;

    dbConnect
      .collection("contacts")
      .insertOne(contactInfo, function (err, result) {
        if (err) {
          res.status(400).send("Error inserting matches!");
        } else {
          console.log(`Added a new contact with id ${result.insertedId}`);
          res.status(204).send();
        }
      });
    // return res.send(contactsCollection)
  });


// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

// app.post(API_BASE_URL + '/contacts', (req, res) => {
//   console.log("db", db);
//   return res.send(contactsRoutes)
// })

module.exports = contactsRouter;
