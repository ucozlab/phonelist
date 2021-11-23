// const contactsMocked = require("../mockContacts");
const {ObjectId} = require('mongodb');
const mongoClient = require("../db");

const getContacts = (req, res) => {
  const dbConnect = mongoClient.getDb();
  dbConnect
    .collection("contacts")
    .find({}).limit(50)
    .toArray((err, result) => {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
  return null
}

const addContact = (req, res) => {
  const dbConnect = mongoClient.getDb();

  const contactInfo = {...req.body, last_modified: new Date()};
  console.log("contactInfo to create", contactInfo);

  dbConnect
    .collection("contacts")
    .insertOne(contactInfo, function (err, result) {
      if (err) {
        res.status(400).send({error: "Error inserting matches!"});
      } else {
        console.log(`Added a new contact with result ${result.insertedId}`);
        res.status(200).send(result);
      }
    });
  return null
}

const updateContact = (req, res) => {
  const dbConnect = mongoClient.getDb();

  const listingQuery = { "_id": ObjectId(req.body._id) };
  const updates = {
    $set: {
      "first_name": req.body.first_name,
      "last_name": req.body.last_name,
      "phone": req.body.phone,
      "image": req.body.image,
      "countryCode": req.body.countryCode,
      "email": req.body.email
    },
  };

  const contactInfo = {...req.body, last_modified: new Date()};
  // console.log("contactInfo to update", contactInfo);

  dbConnect
    .collection("contacts")
    .updateOne(listingQuery, updates, (err, _result) => {
      if (err) {
        res.status(400).send(`Error updating contact on listing with id ${listingQuery.id}!`);
      } else {
        console.log("1 document updated");
        res.status(200).send({success: true});
      }
    });
  return null
}

const deleteContact = (req, res) => {
  const dbConnect = mongoClient.getDb();
  const listingQuery = { "_id": ObjectId(req.body._id) };

  // console.log("listingQuery", listingQuery);
  dbConnect
    .collection("contacts")
    .deleteOne(listingQuery, (err, _result) => {
      if (err) {
        res.status(400).send(`Error deleting contact on listing with id ${listingQuery.id}!`);
      } else {
        console.log("1 document deleted");
        res.status(200).send({success: true});
      }
    });
  return null
}

module.exports = {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
};
